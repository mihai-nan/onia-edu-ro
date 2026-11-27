"""ConvTranspose2d is associated with a transposed linear operation, not an inverse."""
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

# The output is computed by overlapping contributions from each
# position in the input tensor, summing at overlapping positions.
