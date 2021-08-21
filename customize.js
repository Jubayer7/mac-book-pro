const smallMemory = document.getElementById('small-memory');
const bigMemory = document.getElementById('big-memory');

const extraMemory = document.getElementById('extra-memory');
// storage part
const lowSsd = document.getElementById('low-ssd')
const mediumSsd = document.getElementById('medium-ssd')
const highSsd = document.getElementById('high-ssd')

const extraStorage = document.getElementById('extra-store');
//  Delivery part
const freeDelivery = document.getElementById('free-delivery');
const chargeDelivery = document.getElementById('charge-delivery')

const deliveryFee = document.getElementById('delivery-fee')

// price part
const bestprice = document.getElementById('best-price');
const totalPrice = document.getElementById('total-price');
let total = document.getElementById('total');

function priceUpdate() {
    const fixedPrice = parseInt(bestprice.innerText);
    const memory = parseInt(extraMemory.innerText);
    const storage = parseInt(extraStorage.innerText);
    const delivery = parseInt(deliveryFee.innerText);
    const grandPrice = fixedPrice + memory + storage + delivery;
    totalPrice.innerText = grandPrice;
    total.innerText = grandPrice;

}

// memory function
bigMemory.addEventListener('click', function () {
    extraMemory.innerText = 180;
    priceUpdate()
})
smallMemory.addEventListener('click', function () {
    extraMemory.innerText = 0;
    priceUpdate()
})
// storage function
lowSsd.addEventListener('click', function () {
    extraStorage.innerText = 0;
    priceUpdate()
})
mediumSsd.addEventListener('click', function () {
    extraStorage.innerText = 100;
    priceUpdate()
})
highSsd.addEventListener('click', function () {
    extraStorage.innerText = 180;
    priceUpdate()
})
//  Delivery Function
freeDelivery.addEventListener('click', function () {
    deliveryFee.innerText = 0;
    priceUpdate()
})
chargeDelivery.addEventListener('click', function () {
    deliveryFee.innerText = 20;
    priceUpdate()
});

// Add pomocode

const promoCodeSubmit = document.getElementById('apply-button');
let promoCodeApply = document.getElementById('pomo-field');

promoCodeSubmit.addEventListener('click', function () {
    promoCode()
});

function promoCode() {
    if (promoCodeApply.value == 'jubayer') {
        promoCodeApply.disabled = true;
        promoCodeApply.disabled = true;
        total.innerText = parseInt(total.innerText) - (parseInt(total.innerText) / 100) * 20;
        promoCodeApply.value = " ";

    }
    else {
        promoCodeSubmit.disabled = false;
        promoCodeApply.disabled = false;
    }
}


