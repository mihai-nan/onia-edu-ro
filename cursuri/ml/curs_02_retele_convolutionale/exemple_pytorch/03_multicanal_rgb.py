"""Un filtru standard combină toate cele trei canale RGB."""
import torch
from torch import nn

torch.manual_seed(7)
x = torch.arange(1, 28, dtype=torch.float32).reshape(1, 3, 3, 3)
conv = nn.Conv2d(in_channels=3, out_channels=2, kernel_size=2, bias=False)
with torch.no_grad():
    conv.weight[0].fill_(1.0)    # Primul filtru: adună toți termenii.
    conv.weight[1].fill_(0.5)    # Al doilea: jumătate din primul.

y = conv(x)
manual = sum((x[0, c, :2, :2] * conv.weight[0, c]).sum()
             for c in range(3))
assert torch.allclose(manual, y[0, 0, 0, 0])
print("Input:", tuple(x.shape))               # (1, 3, 3, 3)
print("Weights:", tuple(conv.weight.shape)) # (2, 3, 2, 2)
print("Output:", tuple(y.shape))            # (1, 2, 2, 2)
print("Y[0,0,0,0]:", y[0, 0, 0, 0].item())
