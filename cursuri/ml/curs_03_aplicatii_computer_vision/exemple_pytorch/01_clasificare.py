"""Clasificare ImageNet cu ResNet18 preantrenat.
Instalare: pip install torch torchvision pillow
Utilizare: python 01_clasificare.py fotografie.jpg
"""
import sys
from PIL import Image
import torch
from torchvision.models import resnet18, ResNet18_Weights

weights = ResNet18_Weights.DEFAULT
model = resnet18(weights=weights).eval()
preprocess = weights.transforms()

image = Image.open(sys.argv[1]).convert("RGB")
x = preprocess(image).unsqueeze(0)  # (1, 3, H, W)

with torch.inference_mode():
    logits = model(x)                  # (1, 1000)
    probs = logits.softmax(dim=1)     # softmax doar la inferență
    values, indices = probs[0].topk(5)

categories = weights.meta["categories"]
for probability, index in zip(values, indices):
    print(f"{categories[index.item()]:30s} {probability.item():.3f}")
