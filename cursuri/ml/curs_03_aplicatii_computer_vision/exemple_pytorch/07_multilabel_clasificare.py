"""Clasificare multi-label cu sigmoid și BCEWithLogitsLoss.
Instalare: pip install torch torchvision
Exemplu didactic: 4 etichete independente pentru fiecare imagine.
"""
import torch
from torch import nn
from torchvision.models import resnet18, ResNet18_Weights

weights = ResNet18_Weights.DEFAULT
model = resnet18(weights=weights)
model.fc = nn.Linear(model.fc.in_features, 4)   # 4 etichete independente

x = torch.randn(8, 3, 224, 224)
y = torch.randint(0, 2, (8, 4)).float()         # target multi-hot

logits = model(x)                                # (8, 4)
criterion = nn.BCEWithLogitsLoss()               # sigmoid intern, stabil numeric
loss = criterion(logits, y)
loss.backward()

probs = torch.sigmoid(logits)
pred = probs > 0.5
print('loss =', float(loss))
print('probabilități pentru prima imagine =', probs[0].tolist())
print('etichete estimate pentru prima imagine =', pred[0].tolist())
