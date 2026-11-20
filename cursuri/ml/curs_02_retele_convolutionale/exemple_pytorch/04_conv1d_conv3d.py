"""Aceeași idee de kernel local se aplică secvențelor și volumelor."""
import torch
from torch import nn

# Conv1d: semnal multicanal cu 500 eșantioane (ECG, audio, vibrații).
conv1d = nn.Conv1d(in_channels=2, out_channels=8,
                   kernel_size=7, stride=2, padding=3)
signal = torch.randn(4, 2, 500)  # (B, C, L)
features1d = conv1d(signal)
print("Conv1d:", tuple(features1d.shape))  # (4, 8, 250)

# Conv3d: volum medical sau secvență video (B, C, D, H, W).
conv3d = nn.Conv3d(in_channels=1, out_channels=4,
                   kernel_size=3, stride=1, padding=1)
volume = torch.randn(2, 1, 12, 32, 32)
features3d = conv3d(volume)
print("Conv3d:", tuple(features3d.shape))  # (2, 4, 12, 32, 32)

# D poate reprezenta adâncimea spațială sau timpul, în funcție de date.
