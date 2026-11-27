"""Replacing the classification head on a ResNet-18 backbone."""
import torch
from torch import nn
from torchvision.models import resnet18, ResNet18_Weights

# For pretrained weights, the first run may DOWNLOAD the model.
# Use weights=None in an offline environment, but this is not transfer learning.
weights = ResNet18_Weights.DEFAULT
model = resnet18(weights=weights)

# Freeze the backbone and train the output head for 4 classes.
for p in model.parameters():
    p.requires_grad = False
model.fc = nn.Linear(model.fc.in_features, 4)
optimizer = torch.optim.AdamW(model.fc.parameters(), lr=1e-3)

# IMPORTANT: use the pretrained weights' preprocessing during inference.
preprocess = weights.transforms()
print("Output classes:", model.fc.out_features)
print("Trainable parameters:", sum(p.numel() for p in model.parameters()
                                   if p.requires_grad))
print("Preprocessing:", preprocess)
