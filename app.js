const phonePlusBtn = document.getElementById('plus-btn');
phonePlusBtn.addEventListener('click',function(){
    productCount('phone',true);
})

const phoneMinusBtn = document.getElementById('minus-btn');
phoneMinusBtn.addEventListener('click',function(){
    productCount('phone',false);
})

const casePlusBtn = document.getElementById('case-plus-btn');
casePlusBtn.addEventListener('click',function(){
    productCount('case',true);
})

const caseMinusBtn = document.getElementById('case-minus-btn');
caseMinusBtn.addEventListener('click',function(){
    productCount('case',false);
})

const closeBtnPhone = document.getElementById('removePhone');
closeBtnPhone.addEventListener('click',function(){
    document.getElementById('phone-section').style.display = "none";
})
const closeBtnCase = document.getElementById('removeCase');
closeBtnCase.addEventListener('click',function(){
    document.getElementById('case-section').style.display = "none";
    document.getElementById('close').style.display = "none";
    document.getElementById('close-last').style.display = "none";
})



function productCount(item, isPlus){
    const productInput = document.getElementById(item + '-input');
    const countInput = parseInt(productInput.value);
    let newCountInput = countInput;
    if(isPlus == true){
        newCountInput = countInput + 1;
    }else if(isPlus == false && countInput > 0){
        newCountInput = countInput - 1;
    }
    productInput.value = newCountInput;

    let productPrice = 0;
    if(item == 'phone'){
        productPrice = newCountInput * 1219;
    }else if(item == 'case'){
        productPrice = newCountInput * 59;
    }
    document.getElementById(item + '-price').innerText = productPrice;
    calculateTotal();
}

function calculateTotal(){
    const phonePrice = productIdentify('phone');
    const casePrice = productIdentify('case');
    const subTotal = phonePrice + casePrice;
    document.getElementById('sub-total').innerText = subTotal;
    const tax = (subTotal * .05).toFixed(2);
    const taxNumber = parseFloat(tax);
    document.getElementById('tax').innerText = taxNumber;
    const total = subTotal + taxNumber;
    document.getElementById('total').innerText = total;
}

function productIdentify(product){
    const price = document.getElementById(product + '-price').innerText;
    const priceNumber = parseInt(price);  
    return priceNumber;
}