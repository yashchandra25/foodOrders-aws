let hours = 24;
let now = new Date().getTime();
let stepTime = localStorage.getItem('stepTime');

if (stepTime == null) {
    localStorage.setItem('stepTime', now);
} else {
    if (now - stepTime > hours * 60 * 60 * 1000) {
        localStorage.clear();
        localStorage.setItem('stepTime', now);
    }
}

let orders = JSON.parse(localStorage.getItem('orders'));
let total = localStorage.getItem('total');

if (orders == null || orders == undefined) {
    localStorage.setItem('orders', JSON.stringify([]));
    orders = JSON.parse(localStorage.getItem('orders'));
}

if (total == null || total == undefined) {
    localStorage.setItem('total', 0);
    total = localStorage.getItem('total');
}

let cart = document.getElementById('cart');
cart.innerHTML = orders.length;