"""A residual block with projection when the shape changes."""
import torch
from torch import nn


class ResidualBlock(nn.Module):
    def __init__(self, cin, cout, stride=1):
        super().__init__()
        self.path = nn.Sequential(
            nn.Conv2d(cin, cout, 3, stride=stride, padding=1, bias=False),
            nn.BatchNorm2d(cout), nn.ReLU(inplace=True),
            nn.Conv2d(cout, cout, 3, padding=1, bias=False),
            nn.BatchNorm2d(cout),
        )
        self.shortcut = (nn.Identity() if cin == cout and stride == 1 else
                         nn.Sequential(nn.Conv2d(cin, cout, 1, stride=stride, bias=False),
                                       nn.BatchNorm2d(cout)))
        self.activation = nn.ReLU(inplace=True)

    def forward(self, x):
        return self.activation(self.path(x) + self.shortcut(x))


block = ResidualBlock(16, 32, stride=2)
x = torch.randn(2, 16, 28, 28)
y = block(x)
print(tuple(x.shape), '->', tuple(y.shape))  # (2, 32, 14, 14)
