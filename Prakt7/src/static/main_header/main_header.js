function getMainHeader(){
    let mainHeader = document.createElement('div');
    mainHeader.classList.add('mainHeader');


    //Кнопка "Киногерои"
    let mainHeaderTitle = document.createElement('div');
    mainHeaderTitle.classList.add('mainHeaderTitle');
    let titleText = document.createElement('a');
    titleText.href = "index.html";
    titleText.textContent = "Киногерои";
    mainHeaderTitle.appendChild(titleText);
    mainHeader.appendChild(mainHeaderTitle);

    //Кнопка "Кинопары"
    mainHeaderTitle = document.createElement('div');
    mainHeaderTitle.classList.add('mainHeaderTitle');
    titleText = document.createElement('a');
    titleText.href = "cinemaPair.html";
    titleText.textContent = "Кинопары";
    mainHeaderTitle.appendChild(titleText);
    mainHeader.appendChild(mainHeaderTitle);

    //Кнопка "Новинки"
    mainHeaderTitle = document.createElement('div');
    mainHeaderTitle.classList.add('mainHeaderTitle');
    titleText = document.createElement('a');
    titleText.href = "novelty.html";
    titleText.textContent = "Новинки";
    mainHeaderTitle.appendChild(titleText);
    mainHeader.appendChild(mainHeaderTitle);

    //Кнопка "Интересные факты"
    mainHeaderTitle = document.createElement('div');
    mainHeaderTitle.classList.add('mainHeaderTitle');
    titleText = document.createElement('a');
    titleText.href = "interesting-facts.php";
    titleText.textContent = "Интересные факты";
    mainHeaderTitle.appendChild(titleText);
    mainHeader.appendChild(mainHeaderTitle);



    //Меню
    let mainHeaderMenu = document.createElement('div');
    mainHeaderMenu.classList.add('mainHeaderMenu');
    let burgerCheck = document.createElement('input');
    burgerCheck.type = 'checkbox';
    burgerCheck.id = "burgerCheck";

    //label
    burgetLabel = document.createElement('label');
    burgetLabel.htmlFor = 'burgerCheck';
    burgetLabel.id = 'burgerLable';
    burgetLabel.addEventListener('click', function(e){  
        // alert("f");
        if(burgerCheck.checked != true)
        {
            document.querySelector('#burgerIcon').classList.toggle('burgerAnimIcon');
            document.querySelector('#burgerList').classList.toggle('burgerAnimList');
        }
        else
        {
            document.querySelector('#burgerIcon').classList.remove('burgerAnimIcon');
            document.querySelector('#burgerList').classList.remove('burgerAnimList');
        }
            
    });

    //icon
    burgerIcon = document.createElement('logo');
    burgerIcon.id = 'burgerIcon';
    burgetLabel.appendChild(burgerIcon);

    //list
    burgerList = document.createElement('div');
    burgerList.id = 'burgerList';


    let names = ['Киногерои','Кинопары','Новинки'];
    let links = ['index.html','cinemaPair.html','novelty.html'];
    for(let i=0;i<names.length;i++){
        burgerLine = document.createElement('Button');//Создаём пункт меню
        burgerLine.classList.add('burgerLine');//Создаём пункт меню
        burgerLink = document.createElement('a');
        burgerLink.classList.add('burgerLink')//Создаём ссылку
        burgerLink.textContent = names[i];
        burgerLink.href = links[i];
        burgerLine.appendChild(burgerLink)
        burgerList.appendChild(burgerLine);
    }

    //Добавляем всё в меню
    mainHeaderMenu.appendChild(burgerCheck);
    mainHeaderMenu.appendChild(burgetLabel);
    mainHeaderMenu.appendChild(burgerList);
    mainHeader.appendChild(mainHeaderMenu);
    

    return mainHeader;
}