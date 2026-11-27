"""Faster R-CNN: list of boxes, classes and scores.
Installation: pip install torch torchvision pillow
Usage: python 02_detectie.py fotografie.jpg
"""
import sys
from PIL import Image
import torch
from torchvision.models.detection import (
    fasterrcnn_resnet50_fpn,
    FasterRCNN_ResNet50_FPN_Weights,
)

weights = FasterRCNN_ResNet50_FPN_Weights.DEFAULT
model = fasterrcnn_resnet50_fpn(weights=weights).eval()
image = Image.open(sys.argv[1]).convert("RGB")
x = weights.transforms()(image)  # tensor (3, H, W)

with torch.inference_mode():
    out = model([x])[0]  # list of images -> dict / image

# Box-uri in coordonatele imaginii: (x1, y1, x2, y2)
keep = out["scores"] >= 0.60
categories = weights.meta["categories"]
for box, label, score in zip(
        out["boxes"][keep], out["labels"][keep], out["scores"][keep]
):
    print(categories[label.item()], [round(v, 1) for v in box.tolist()],
          round(score.item(), 3))
