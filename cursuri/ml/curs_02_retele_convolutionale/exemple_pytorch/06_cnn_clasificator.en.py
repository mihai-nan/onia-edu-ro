"""A small CNN and a PyTorch training step on synthetic data."""
import torch
from torch import nn

torch.manual_seed(42)


class SmallCNN(nn.Module):
    def __init__(self, n_classes=4):
        super().__init__()
        self.features = nn.Sequential(
            nn.Conv2d(3, 16, 3, padding=1),
            nn.BatchNorm2d(16),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(2),  # 32 -> 16
            nn.Conv2d(16, 32, 3, padding=1),
            nn.BatchNorm2d(32),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(2),  # 16 -> 8
        )
        self.classifier = nn.Sequential(
            nn.AdaptiveAvgPool2d(1),  # (B,32,1,1)
            nn.Flatten(),
            nn.Linear(32, n_classes),
        )

    def forward(self, x):
        return self.classifier(self.features(x))  # logits, no softmax


model = SmallCNN(n_classes=4)
optimizer = torch.optim.AdamW(model.parameters(), lr=1e-3)
criterion = nn.CrossEntropyLoss()

x = torch.randn(8, 3, 32, 32)  # date artificiale, NU un set real
labels = torch.randint(0, 4, size=(8,))
model.train()
optimizer.zero_grad(set_to_none=True)
logits = model(x)
loss = criterion(logits, labels)
loss.backward()
optimizer.step()

print("Logits:", tuple(logits.shape), "Loss:", round(loss.item(), 4))
# Pentru evaluare: model.eval() + torch.no_grad() + date independente.
