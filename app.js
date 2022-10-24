var count = 1;

// Plus button handler
const plusBtn = document.getElementById('plus-btn');
plusBtn.addEventListener('click',function(){
    count++;
    console.log(count);
    document.getElementById('input-Iphone').value = count;

    const iphonePrice = 1219 * count;
    console.log(iphonePrice);
    document.getElementById('iphone-price').innerText = iphonePrice;
    const subtotal = iphonePrice;
    const tax = .05 * iphonePrice;
    const total = tax + subtotal;
    document.getElementById('sub-total').innerText = subtotal;
    document.getElementById('tax').innerText = tax.toFixed(2);
    document.getElementById('total').innerText = total;
})
