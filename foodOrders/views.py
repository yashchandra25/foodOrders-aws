from django.shortcuts import render
import json
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from .models import Order

# Create your views here.
@csrf_exempt
def order(request):
    request.session.set_expiry(0)
    if request.method == 'POST':
        data = json.loads(request.body)

        order = Order(
            username = data.get('username'),
            order_message = data.get('msg'),
            orders = data.get('orders')
        )
        order.save()

        request.session['orders'] = data.get('orders')
        print(request.session['orders'])
        request.session['msg'] = data.get('msg')
        print(request.session['msg'])
        request.session['username'] = data.get('username')
        print(request.session['username'])
        return JsonResponse({'status': 'success'})
    return render(request, 'foodOrders/order.html')

def success(request):
    request.session.set_expiry(0)
    orders = request.session['orders']
    return render(request, 'foodOrders/success.html', {'orders': orders})


# fix error in endif in signup - fixed syntax error
# fix register redirect - fixed redirect sytax error
# acc order database - order.save() and data.get('msg')
# login and order button on order.html