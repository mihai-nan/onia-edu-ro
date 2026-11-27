"""Soft Dice Loss for binary segmentation; logits and target (B,1,H,W)."""
import torch
from torch import nn


class SoftDiceLoss(nn.Module):
    def __init__(self, eps=1e-6):
        super().__init__()
        self.eps = eps

    def forward(self, logits, target):
        if logits.shape != target.shape:
            raise ValueError("logits and target must have the same shape")
        probs = torch.sigmoid(logits)
        target = target.to(dtype=probs.dtype)
        axes = (1, 2, 3)  # agregare per imagine
        intersection = (probs * target).sum(dim=axes)
        denominator = probs.sum(dim=axes) + target.sum(dim=axes)
        dice = (2 * intersection + self.eps) / (denominator + self.eps)
        return (1 - dice).mean()


loss_fn = SoftDiceLoss()
logits = torch.randn(2, 1, 128, 128, requires_grad=True)
target = torch.randint(0, 2, logits.shape).float()
loss = loss_fn(logits, target)
loss.backward()
print("Loss:", loss.item(), "Gradient:", logits.grad is not None)
