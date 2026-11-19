"""Mini U-Net pentru segmentare multiclasă cu skip și dimensiuni impare."""
import torch
import torch.nn.functional as F
from torch import nn

class DoubleConv(nn.Module):
    def __init__(self, ci, co):
        super().__init__()
        self.seq = nn.Sequential(nn.Conv2d(ci, co, 3, padding=1), nn.ReLU(),
                                 nn.Conv2d(co, co, 3, padding=1), nn.ReLU())

    def forward(self, x):
        return self.seq(x)

class MiniUNet(nn.Module):
    def __init__(self, classes=3):
        super().__init__()
        self.enc = DoubleConv(1, 16)
        self.bottleneck = DoubleConv(16, 32)
        self.dec = DoubleConv(32 + 16, 16)
        self.head = nn.Conv2d(16, classes, kernel_size=1)

    def forward(self, x):
        skip = self.enc(x)
        low = F.max_pool2d(skip, 2)
        low = self.bottleneck(low)
        high = F.interpolate(low, size=skip.shape[-2:], mode="bilinear",
                             align_corners=False)
        return self.head(self.dec(torch.cat([high, skip], dim=1)))

torch.manual_seed(3)
model = MiniUNet(classes=3)
x = torch.randn(2, 1, 65, 65)
target = torch.randint(0, 3, (2, 65, 65), dtype=torch.long)
logits = model(x)
loss = F.cross_entropy(logits, target)
loss.backward()
print("Logits:", tuple(logits.shape))  # (2, 3, 65, 65)
print("Loss:", loss.item())
# La inferență: mask = logits.argmax(dim=1); nu aplica softmax înainte de CE.
