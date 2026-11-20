"""Calculăm shape, numărul de ponderi și MACs pentru o convoluție 2D."""
import math
import torch
from torch import nn

# B=8, imagine RGB 32x32, 6 filtre 5x5, fără padding.
batch, cin, cout = 8, 3, 6
height, width = 32, 32
kernel, stride, padding, dilation, groups = 5, 1, 0, 1, 1

layer = nn.Conv2d(cin, cout, kernel_size=kernel, stride=stride,
                  padding=padding, dilation=dilation, groups=groups, bias=True)
x = torch.randn(batch, cin, height, width)
y = layer(x)

h_out = math.floor((height + 2 * padding - dilation * (kernel - 1) - 1) / stride + 1)
w_out = math.floor((width + 2 * padding - dilation * (kernel - 1) - 1) / stride + 1)
parameters = cout * ((cin // groups) * kernel ** 2 + 1)
macs_per_image = h_out * w_out * cout * (cin // groups) * kernel ** 2

assert y.shape == (batch, cout, h_out, w_out)
assert sum(t.numel() for t in layer.parameters()) == parameters
print("Intrare:", tuple(x.shape))
print("Ieșire:", tuple(y.shape))  # (8, 6, 28, 28)
print("Parametri:", parameters)  # 456
print("MACs / imagine:", macs_per_image)
