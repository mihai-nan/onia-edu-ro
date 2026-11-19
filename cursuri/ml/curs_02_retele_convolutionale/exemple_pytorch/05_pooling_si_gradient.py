"""MaxPool2d transmite gradient doar către maxime (în acest exemplu unic)."""
import torch
import torch.nn.functional as F

x = torch.tensor([[[[1., 3., 2., 1.],
                    [2., 9., 0., 4.],
                    [4., 3., 6., 2.],
                    [1., 0., 5., 7.]]]], requires_grad=True)
y_max = F.max_pool2d(x, kernel_size=2, stride=2)
print("Max pooling:\n", y_max)
y_max.sum().backward()
print("Gradient d sum(y)/dx:\n", x.grad)

# Average pooling păstrează media, nu doar maximum.
y_avg = F.avg_pool2d(x.detach(), kernel_size=2, stride=2)
print("Average pooling:\n", y_avg)
