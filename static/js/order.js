function addItem(pid) {
    itemNameId = "#itemName" + pid;
    itemPriceId = "#itemPrice" + pid;

    let name = document.querySelector(itemNameId).innerHTML;
    let price = document.querySelector(itemPriceId).innerHTML;

    let order = JSON.parse(localStorage.getItem('orders'));
    let total = localStorage.getItem('total');

    order[order.length] = [name, price];
    localStorage.setItem('orders', JSON.stringify(order));

    total = Number(total) + Number(price);
    localStorage.setItem('total', total);

    let cart = document.getElementById('cart');
    cart.innerHTML = order.length;

    console.log(name, price, total);
}