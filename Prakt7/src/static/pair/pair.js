let numInList = 0;

fillPairWindow();

function fillPairWindow(){
    document.querySelector("#title").textContent = "История противостояния";

    for(let i=0;i<pairInfoList.length;i++){
        if(pairInfoList[i].id == localStorage.getItem('id'))
            numInList = i;
    }

    for(let i=0;i<pairInfoList[numInList].array.length;i++){
        let block = getBlock();
        block.childNodes[0].firstChild.textContent = pairInfoList[numInList].array[i][0];
        block.childNodes[1].firstChild.src = pairInfoList[numInList].array[i][1];
        block.childNodes[2].firstChild.textContent = pairInfoList[numInList].array[i][2];
        document.querySelector("#pairContent").appendChild(block);
    }

}

function getBlock(){

    //Создаём блок
    let block = document.createElement('div');
    block.classList.add('block');

    //Создаём заголовок
    let title = document.createElement('div');
    title.classList.add('title');
    let articleTitle = document.createElement('p');
    title.appendChild(articleTitle);

    //Создаём картинку
    let img_wrap = document.createElement('div');
    img_wrap.classList.add('imageWrap');
    let img = document.createElement('img');
    img.classList.add('img');
    img_wrap.appendChild(img);

    //Создаём текст
    let text = document.createElement('div');
    text.classList.add('text');
    let article = document.createElement('p');  
    text.appendChild(article);


    //Добовляем всё в блок
    block.appendChild(title)
    block.appendChild(img_wrap);
    block.appendChild(text);

    return block;
}