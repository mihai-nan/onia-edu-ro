"""Înlocuirea capului de clasificare pe un backbone ResNet-18."""
import torch
from torch import nn
from torchvision.models import resnet18, ResNet18_Weights

# Pentru ponderi pre-antrenate, prima rulare poate DESCĂRCA modelul.
# Folosește weights=None într-un mediu offline, dar nu este transfer learning.
weights = ResNet18_Weights.DEFAULT
model = resnet18(weights=weights)

# Înghețăm backbone-ul și antrenăm capul de ieșire pentru 4 clase.
for p in model.parameters():
    p.requires_grad = False
model.fc = nn.Linear(model.fc.in_features, 4)
optimizer = torch.optim.AdamW(model.fc.parameters(), lr=1e-3)

# IMPORTANT: la inferență respectă preprocesarea ponderilor pre-antrenate.
preprocess = weights.transforms()
print("Output classes:", model.fc.out_features)
print("Trainable parameters:", sum(p.numel() for p in model.parameters()
                                    if p.requires_grad))
print("Preprocessing:", preprocess)
