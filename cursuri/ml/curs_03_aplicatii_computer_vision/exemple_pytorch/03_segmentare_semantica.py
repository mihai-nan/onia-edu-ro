"""DeepLabV3: predicție semantică pe fiecare pixel.
Instalare: pip install torch torchvision pillow
Utilizare: python 03_segmentare_semantica.py fotografie.jpg
"""
import sys
from PIL import Image
import torch
from torchvision.models.segmentation import (
    deeplabv3_resnet50,
    DeepLabV3_ResNet50_Weights,
)

weights = DeepLabV3_ResNet50_Weights.DEFAULT
model = deeplabv3_resnet50(weights=weights).eval()
image = Image.open(sys.argv[1]).convert("RGB")
x = weights.transforms()(image).unsqueeze(0)  # (1, 3, H, W)

with torch.inference_mode():
    logits = model(x)["out"]  # (1, C, H, W)
    labels = logits.argmax(dim=1)[0]  # (H, W)

print("Logits:", tuple(logits.shape))
print("Harta claselor:", tuple(labels.shape))
print("Clase identificate:", labels.unique().tolist())
print("Clasele modelului:", weights.meta["categories"])
