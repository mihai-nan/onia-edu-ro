"""ConvTranspose2d este asociată unei operații liniare transpuse, nu inverse."""
import torch
from torch import nn

x = torch.tensor([[[[1., 0., 0.],
                    [0., 2., 0.],
                    [0., 0., 3.]]]])  # (1,1,3,3)
layer = nn.ConvTranspose2d(1, 1, kernel_size=2, stride=2,
                           padding=0, output_padding=0, bias=False)
with torch.no_grad():
    layer.weight.fill_(1.0)
y = layer(x)
print("Shape:", tuple(y.shape))  # (1, 1, 6, 6)
print(y[0, 0])

# Ieșirea este calculată prin suprapunerea contribuțiilor fiecărei
# poziții din tensorul de intrare, cu suma în pozițiile comune.
