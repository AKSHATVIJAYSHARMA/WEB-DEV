# views.py
from django.shortcuts import render

def task_view(request):
    # You can pass any data you want to be dynamic here
    dynamic_data = "This is dynamic data passed from the server"
    return render(request, 'task.html', {'dynamic_data': dynamic_data})
