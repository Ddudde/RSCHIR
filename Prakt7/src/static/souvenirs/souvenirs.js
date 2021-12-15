let myBackground;
let myWindow;  
qurSouvNum = 0;
quanElem = 14;
let prefixSouv = '../';

function fillSouvWindow(persId){
    myWindow.querySelector(".dialog_title").querySelector("p").textContent="Сувениры";
    myWindow.querySelector(".dialog_title").querySelector("img").addEventListener('click', function(e){     
        souvenirs_close();
    });

    let souvContainer = document.createElement('div');
    souvContainer.id = "souvContainer";

    for(let i=0;i<quanElem;i++){
        souvContainer.appendChild(getElement(persId));
    }
    myWindow.appendChild(souvContainer);

}

function getElement(souvId)
{
    let element = document.createElement('div');
    element.classList.add('souvenirs_elem')

    let numInList = -1;
    for(let i=0;i<souvenirsList.length;i++){
        if(souvenirsList[i].id == souvId)
            numInList = i;
    }

    //Картинка товара
    let img = document.createElement('div');
    if (souvenirsList[numInList].array[qurSouvNum].img === "")
        img.style.backgroundImage = "url('../souvenirs/souvenirs_img/sold.png')"
    else
        img.style.backgroundImage = souvenirsList[numInList].array[qurSouvNum].img;

    img.classList.add("souvenirs_img");
    element.append(img);

    //Блок информации об товаре
    let info = document.createElement('div');
    info.classList.add("souvenirs_info");

    //Цена товара
    let infoPrice = document.createElement("p");
    if (souvenirsList[numInList].array[qurSouvNum].price === "")
        infoPrice.textContent = "---";
    else
        infoPrice.textContent = souvenirsList[numInList].array[qurSouvNum].price;
    infoPrice.classList.add("souvenirs_info_price","souvenirs_p");
    info.append(infoPrice);

    //Описание товара
    let infoText = document.createElement("p");
    if (souvenirsList[numInList].array[qurSouvNum].text === "")
        infoText.textContent = "---";
    else
        infoText.textContent = souvenirsList[numInList].array[qurSouvNum].text;
    infoText.classList.add("souvenirs_info_text","souvenirs_p");
    info.append(infoText);

    //Кнопка купить
    let infoBuy = document.createElement("Button");
    if (souvenirsList[numInList].array[qurSouvNum].price === "")
    {
        infoBuy.textContent = "Продано";
    }else{
        infoBuy.textContent = "Купить";
        infoBuy.addEventListener('click', function(e){     
            buy();});
    }
    infoBuy.classList.add("souvenirs_info_buy");
    info.append(infoBuy);
    element.append(info);
    qurSouvNum++
    return element;
}

function openBasket(persId)
{
    document.body.style.overflow = "hidden";
    myBackground = getBlurBack();
    myWindow = getWindow();
    fillSouvWindow(persId);
    myBackground.appendChild(myWindow);
    document.body.append(myBackground);
}

function souvenirs_close()
{
    qurSouvNum = 0;
    document.body.style.overflow = "auto";
    document.body.removeChild(myBackground);
}