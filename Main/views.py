from django.shortcuts import render, redirect, HttpResponse
from django.views import View
from Main.models import *

# Create your views here.
class Home(View):
    def get(self, request):
        return render(self.request, 'HomeScreen/index.html')
    
class Login(View):
    def get(self, request):
        return render(self.request, 'account/login.html')    
    
class Register(View):
    def get(self, request):
        return render(self.request, 'account/register.html')    

class DashBoard(View):
    def get(self, request):
        return render(self.request, 'account/dashboard.html')

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    