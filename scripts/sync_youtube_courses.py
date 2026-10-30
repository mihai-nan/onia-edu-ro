#!/usr/bin/env python3
"""Rebuild courses.js with exact ID+title metadata from official YouTube playlists.

Run with network access: pip install -U yt-dlp && python scripts/sync_youtube_courses.py
Optional: YOUTUBE_API_KEY for official API playlistItems metadata.
Never produces a fabricated ID, title or video-specific watch URL.
"""
import os, sys, re, json, urllib.parse, urllib.request
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
TARGET=ROOT/'data'/'courses.js'
raw=TARGET.read_text(encoding='utf-8')
COURSES=json.loads(raw[raw.index('['):].strip().rstrip(';'))
ID_RE=re.compile(r'^[A-Za-z0-9_-]{11}$')

def yt_api(playlist):
    key=os.getenv('YOUTUBE_API_KEY')
    if not key:return []
    result=[]; page=None
    while True:
        q={'part':'snippet,status','playlistId':playlist,'maxResults':50,'key':key}
        if page:q['pageToken']=page
        url='https://www.googleapis.com/youtube/v3/playlistItems?'+urllib.parse.urlencode(q)
        with urllib.request.urlopen(url,timeout=35) as r: obj=json.load(r)
        for item in obj.get('items',[]):
            s=item.get('snippet',{})
            id=s.get('resourceId',{}).get('videoId')
            title=s.get('title','')
            result.append((id,title))
        page=obj.get('nextPageToken')
        if not page:break
    return result

def ytdlp(playlist):
    import yt_dlp
    url='https://www.youtube.com/playlist?list='+playlist
    opts={'extract_flat':'in_playlist','skip_download':True,'quiet':True,
          'no_warnings':True,'ignoreerrors':True,'socket_timeout':25,'retries':2,
          'extractor_args':{'youtube':{'player_client':['web','android']}}}
    with yt_dlp.YoutubeDL(opts) as ydl:
        obj=ydl.extract_info(url,download=False)
    if not obj: return []
    return [(e.get('id') or e.get('url'), e.get('title')) if e else (None,None)
            for e in obj.get('entries',[])]

def valid_title(s):
    if not isinstance(s,str):return False
    t=s.strip();return bool(t) and t not in ('[Private video]','[Deleted video]') and not t.startswith('Prelegerea ')

errors=[];successful=0
for course in COURSES:
    items=[]
    try:
        items=yt_api(course['playlist']) or ytdlp(course['playlist'])
    except Exception as e:
        errors.append(f"{course['id']}: {type(e).__name__}: {e}")
        print('WARNING',errors[-1],file=sys.stderr)
    if not items:continue
    found=0
    for n,(id,title) in enumerate(items,1):
        if n>course['n']:break
        if id and 'watch?v=' in id:id=id.split('watch?v=')[-1].split('&')[0]
        if not id or not ID_RE.fullmatch(id):continue
        course['ids'][str(n)]=id
        if valid_title(title):course['titles'][str(n)]=title.strip()
        found+=1
    if found:successful+=1
    print(course['id'],f'{found}/{course["n"]}', 'prelegeri cu identificator')
if not successful:
    print('No metadata could be retrieved; existing verified data left unchanged.', file=sys.stderr)
    sys.exit(2)
TARGET.write_text('window.ONIA_COURSES = '+json.dumps(COURSES,ensure_ascii=False,indent=2)+';\n',encoding='utf-8')
print('Updated',TARGET)
