from django.shortcuts import render
from rest_framework import viewsets
from .serializers import *
from .models import *

class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
