"""Mask R-CNN: box-uri, clase, scoruri și măști per instanță.
Instalare: pip install torch torchvision pillow
Utilizare: python 04_instance_segmentation.py fotografie.jpg
"""
import sys
from PIL import Image
import torch
from torchvision.models.detection import (
    maskrcnn_resnet50_fpn,
    MaskRCNN_ResNet50_FPN_Weights,
)

weights = MaskRCNN_ResNet50_FPN_Weights.DEFAULT
model = maskrcnn_resnet50_fpn(
    weights=weights, box_detections_per_img=100
).eval()
image = Image.open(sys.argv[1]).convert("RGB")
x = weights.transforms()(image)  # (3, H, W)

with torch.inference_mode():
    out = model([x])[0]

keep = out["scores"] >= 0.70
boxes = out["boxes"][keep]  # (N, 4)
labels = out["labels"][keep]  # (N,)
scores = out["scores"][keep]  # (N,)
mask_probs = out["masks"][keep]  # (N, 1, H, W)
masks = mask_probs[:, 0] > 0.5  # (N, H, W), boolean

print(f"Instanțe păstrate: {len(boxes)}")
print("boxes:", tuple(boxes.shape), "masks:", tuple(masks.shape))
for label, score in zip(labels, scores):
    print(weights.meta["categories"][label.item()], round(score.item(), 3))
