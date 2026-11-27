"""Numerical check: Conv2d computes cross-correlation; it does not flip the kernel."""
import torch
import torch.nn.functional as F

torch.set_printoptions(sci_mode=False)
x = torch.tensor([
    [1., 2., 3., 4.],
    [5., 6., 7., 8.],
    [9., 1., 2., 3.],
    [4., 5., 6., 7.],
]).reshape(1, 1, 4, 4)  # (batch, in_channels, H, W)
k = torch.tensor([[1., 0., -1.],
                  [2., 0., -2.],
                  [1., 0., -1.]]).reshape(1, 1, 3, 3)

# In PyTorch, the kernel is not rotated when applying conv2d.
y = F.conv2d(x, k, stride=1, padding=0)

# Manual calculation for output (0, 0): elementwise sum of products.
manual = (x[0, 0, :3, :3] * k[0, 0]).sum()
assert torch.allclose(y[0, 0, 0, 0], manual)

# Mathematical convolution uses the kernel rotated by 180°.
conv_math = F.conv2d(x, torch.flip(k, dims=(-2, -1)))
print("Kernelul original:\n", k[0, 0])
print("Cross-correlation:\n", y[0, 0])
print("Primul element, calcul manual:", manual.item())
print("Mathematical convolution:\n", conv_math[0, 0])
