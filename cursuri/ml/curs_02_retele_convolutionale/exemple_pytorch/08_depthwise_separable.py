"""Factorarea MobileNet: depthwise spatial + pointwise 1x1."""
import torch
from torch import nn


class DepthwiseSeparable(nn.Module):
    def __init__(self, cin, cout, kernel_size=3):
        super().__init__()
        self.layers = nn.Sequential(
            nn.Conv2d(cin, cin, kernel_size, padding=kernel_size // 2,
                      groups=cin, bias=False),  # 1 filtru/canal
            nn.BatchNorm2d(cin), nn.ReLU(inplace=True),
            nn.Conv2d(cin, cout, 1, bias=False),  # combină canalele
            nn.BatchNorm2d(cout), nn.ReLU(inplace=True),
        )

    def forward(self, x):
        return self.layers(x)


cin, cout = 32, 64
standard = nn.Conv2d(cin, cout, kernel_size=3, padding=1, bias=False)
separable = DepthwiseSeparable(cin, cout, kernel_size=3)
x = torch.randn(2, cin, 28, 28)
print("Shapes:", tuple(standard(x).shape), tuple(separable(x).shape))
# Număr de ponderi convoluționale, fără BatchNorm:
print("Standard weights:", cin * cout * 9)
print("DW+PW weights:", cin * 9 + cin * cout)
