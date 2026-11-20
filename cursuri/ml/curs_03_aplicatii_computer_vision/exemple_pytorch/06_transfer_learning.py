"""Fine-tuning doar pentru clasificatorul ResNet18.
Date: dataset/train/{clasa1,clasa2,...}/*.jpg.
Instalare: pip install torch torchvision pillow
"""
import torch
from torch import nn
from torch.utils.data import DataLoader
from torchvision import datasets, transforms
from torchvision.models import resnet18, ResNet18_Weights

weights = ResNet18_Weights.DEFAULT
train_tf = transforms.Compose([
    transforms.RandomResizedCrop(224),
    transforms.RandomHorizontalFlip(),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406],
                         std=[0.229, 0.224, 0.225]),
])
dataset = datasets.ImageFolder("dataset/train", transform=train_tf)
loader = DataLoader(dataset, batch_size=16, shuffle=True, num_workers=0)

model = resnet18(weights=weights)
for param in model.parameters():
    param.requires_grad = False  # backbone înghețat
model.fc = nn.Linear(model.fc.in_features, len(dataset.classes))

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = model.to(device)
optimizer = torch.optim.AdamW(model.fc.parameters(), lr=1e-3)
criterion = nn.CrossEntropyLoss()

model.eval()  # păstrează statisticile BatchNorm înghețate
model.fc.train()  # antrenează numai noul clasificator
for images, labels in loader:  # un singur epoch demonstrativ
    images, labels = images.to(device), labels.to(device)
    optimizer.zero_grad(set_to_none=True)
    logits = model(images)  # (B, num_classes)
    loss = criterion(logits, labels)  # fără softmax manual
    loss.backward()
    optimizer.step()

print("Clase:", dataset.classes)
print("Antrenarea demonstrativă s-a încheiat.")
