let buyWindow;
let buyBack;
let adresses = ["проспект Вернадского, дом 86, стр.1","Мичуринский проспект, д. 12, корпус 2","ул. Студенческая, дом 33, корп. 3."];



function fillBuyWIndow(){
    buyWindow = document.createElement('div');
    buyWindow.classList.add("buyWindow");
    buyWindow.appendChild(makePayment());
    buyWindow.appendChild(makeAddress());
    buyWindow.appendChild(makePersInf());
}

function makePayment(){
    //Контейнер для оплаты
    let payment = document.createElement('div');
    payment.classList.add("payment");

    //Поле "Способ оплаты"
    let paymentText = document.createElement('p');
    paymentText.classList.add("payment_text");
    paymentText.textContent = "Оплата";
    payment.append(paymentText);

    //Поле Оплата картой
    let payment_card = document.createElement('input');
    payment_card.classList.add("payment_card");
    payment_card.type = "text";
    payment_card.placeholder="Введите номер карты";
    payment.append(payment_card);

    //Кнопка подтвердить
    let payment_card_enter = document.createElement("div");
    payment_card_enter.classList.add("payment_card_enter");
    payment_card_enter.textContent = "Подтвердить";
    payment.appendChild(payment_card_enter);


    return payment;
}
function makeAddress(){

    //Контейнер для адресов
    let adress = document.createElement('div');
    adress.classList.add("adress");
    adress.textContent = "Адреса для самовывоза";

    //Маркированный список адресов
    let list = document.createElement('ul');
    for (let i=0;i<3;i++){
        let elem = document.createElement('li');
        elem.textContent = adresses[i];
        list.appendChild(elem);
    }
    adress.appendChild(list);

    return adress;
}

function makePersInf(){
    let phone = makePayment();
    phone.querySelector(".payment_text").textContent = "Номер телефона";
    phone.querySelector(".payment_card").placeholder = "Введите номер телефона";
    return phone;
}


function buy(){
    sentWindow = getWindow();
    sentWindow.querySelector(".dialog_title").querySelector("p").textContent="Покупка";
    sentWindow.querySelector(".dialog_title").querySelector("img").addEventListener('click', function(e){     
        buyClose();});

    fillBuyWIndow();
    sentWindow.appendChild(buyWindow)
    
    buyBack = getBlurBack();
    buyBack.appendChild(sentWindow);

    document.body.append(buyBack);
}

function buyClose(){
    document.body.removeChild(buyBack)
}
