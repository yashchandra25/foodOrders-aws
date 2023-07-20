let itemName = document.querySelector('.itemName');
let itemPrice = document.querySelector('.itemPrice');
let removeBtn = document.querySelector('.removeBtn');
let totalBill = document.querySelector('#totalBill');

function shoppingCart() {
    let orders = JSON.parse(localStorage.getItem('orders'));
    let total = localStorage.getItem('total');

    for (let i = 0; i < orders.length; i++) {
        itemName.innerHTML += orders[i][0] + "<br>";
        itemPrice.innerHTML += orders[i][1] + "<br>";
        removeBtn.innerHTML += '<button class="btn btn-sm btn-danger" onclick="removeItem(' + i + ')"> x </button>' + "<br>";
    }
    totalBill.innerHTML = parseFloat(total).toFixed(2) + '$';
}

shoppingCart();

function removeItem(n) {
    let order = JSON.parse(localStorage.getItem('orders'));

    let total = localStorage.getItem('total');
    total = Number(total) - Number(order[n][1]);

    order.splice(n, 1)

    localStorage.setItem('orders', JSON.stringify(order));
    localStorage.setItem('total', total);

    shoppingCart();
    window.location.reload();
}

let message = document.querySelector("#message");

function order() {
    let orders = JSON.parse(localStorage.getItem('orders'));
    let msg = message.value;

    let url = '/order/';

    let orderData = {};
    orderData['orders'] = orders;
    orderData['msg'] = msg;
    orderData['username'] = username;

    fetch (url, {
        method: 'POST',
        body: JSON.stringify(orderData),
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(function(response) {
        console.log(response.status);
        if (response.ok) {
            window.location.replace('/success')

            localStorage.setItem('orders', JSON.stringify([]));
            localStorage.setItem('total', 0);
            
            console.log('order success');
        } else {
            console.log('order failed');
        }
    }).catch(function(error){
        console.log(error);
    })
}