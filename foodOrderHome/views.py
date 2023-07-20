from django.shortcuts import render, redirect
from .forms import NewUserForm
from django.contrib.auth import login, authenticate, logout
from django.contrib import messages
from django.http import HttpResponseRedirect
from django.urls import reverse

from .models import Food
# Create your views here.
def home(request):
    foods = Food.objects.all()
    return render(request, 'foodOrderHome/index.html', {'foods': foods})

def signup(request):
    ctx = {}
    if request.method == 'POST':
        form = NewUserForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
        else:
            ctx['form'] = form
    else:
        form = NewUserForm()
        ctx['form'] = form
    return render(request, 'foodOrderHome/signup.html', ctx)

def user_login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse('home'))
        else:
            messages.error(request, 'Username or Password is incorrect')
    return render(request, 'foodOrderHome/login.html')

def user_logout(request):
    logout(request)
    return redirect('home')