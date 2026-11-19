"""Verificare numerică: Conv2d calculează cross-correlation, nu inversează kernelul."""
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

# În PyTorch, kernelul nu este rotit la aplicarea conv2d.
y = F.conv2d(x, k, stride=1, padding=0)

# Calcul manual pentru ieșirea (0, 0): sumă elementwise.
manual = (x[0, 0, :3, :3] * k[0, 0]).sum()
assert torch.allclose(y[0, 0, 0, 0], manual)

# Convoluția matematică folosește kernelul rotit cu 180°.
conv_math = F.conv2d(x, torch.flip(k, dims=(-2, -1)))
print("Kernelul original:\n", k[0, 0])
print("Cross-correlation:\n", y[0, 0])
print("Primul element, calcul manual:", manual.item())
print("Convoluție matematică:\n", conv_math[0, 0])
