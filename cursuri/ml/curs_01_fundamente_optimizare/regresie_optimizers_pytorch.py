import copy
import torch
from torch import nn
from torch.utils.data import DataLoader, TensorDataset
import matplotlib.pyplot as plt

torch.manual_seed(7)
x = torch.linspace(-3, 3, 64).unsqueeze(1)
i = torch.arange(64, dtype=x.dtype).unsqueeze(1)
y = 0.6 * torch.sin(1.35 * x) + 0.15 * x**2 - 0.25 * x
y = y + 0.04 * torch.sin(17 * x + 0.4 * i)

base = nn.Sequential(nn.Linear(1, 4), nn.Tanh(), nn.Linear(4, 1))
with torch.no_grad():
    base[0].weight.copy_(torch.tensor([[-.62],[-.20],[.35],[.78]]))
    base[0].bias.copy_(torch.tensor([.20,-.10,.08,-.27]))
    base[2].weight.copy_(torch.tensor([[.32,-.40,.30,.16]]))
    base[2].bias.fill_(.05)

models = {'A': copy.deepcopy(base), 'B': copy.deepcopy(base)}
choices = {'A': 'sgd', 'B': 'momentum'}
eta, beta, beta2 = 0.02, 0.9, 0.999

def make_optim(kind, model):
    params = model.parameters()
    if kind == 'sgd':
        return torch.optim.SGD(params, lr=eta)
    if kind == 'momentum':
        return torch.optim.SGD(params, lr=eta, momentum=beta)
    if kind == 'nesterov':
        return None  # mai jos: look-ahead explicit
    if kind == 'adagrad':
        return torch.optim.Adagrad(params, lr=eta)
    if kind == 'rmsprop':
        return torch.optim.RMSprop(params, lr=eta, alpha=beta2)
    return torch.optim.Adam(params, lr=eta, betas=(beta, beta2))

opt = {k: make_optim(choices[k], models[k]) for k in models}
vel = {k: [torch.zeros_like(p) for p in models[k].parameters()]
       for k in models}
criterion = nn.MSELoss()
bs = 8
loader = DataLoader(TensorDataset(x, y), batch_size=bs, shuffle=True,
                    generator=torch.Generator().manual_seed(1234567))
history = {k: [] for k in models}

for epoch in range(12):
    for xb, yb in loader:
        for key, model in models.items():
            if choices[key] == 'nesterov':
                # Convenția heavy-ball: grad la punctul de anticipare theta+beta*v
                params = list(model.parameters())
                with torch.no_grad():
                    for p, v in zip(params, vel[key]):
                        p.add_(beta * v)
                model.zero_grad()
                loss = criterion(model(xb), yb)
                loss.backward()
                with torch.no_grad():
                    for p, v in zip(params, vel[key]):
                        p.sub_(beta * v)  # revenim la theta
                        v.mul_(beta).add_(p.grad, alpha=-eta)
                        p.add_(v)
            else:
                opt[key].zero_grad()
                predictions = model(xb)       # FORWARD
                loss = criterion(predictions, yb)
                loss.backward()               # BACKWARD
                opt[key].step()               # UPDATE
            with torch.no_grad():
                history[key].append(criterion(model(x), y).item())

plt.figure(figsize=(10, 5))
for key in models:
    plt.plot(history[key], label=f'{key}: {choices[key]}')
plt.xlabel('Actualizare de parametri')
plt.ylabel('MSE pe întreg setul')
plt.legend(); plt.grid(alpha=0.2); plt.show()
