let noveltyPage = document.querySelector('#noveltyPage');
fillNoveltyWindow();


function fillNoveltyWindow(){
    noveltyPage.appendChild(getMainHeader());
    noveltyPage.appendChild(getFilmBlock());

    //Заполняем фильмы
    let films = document.querySelectorAll('.film');
    for(let i=0; i < films.length; i++){
        films[i].style.backgroundImage = "url('images/novelty/"+i+".jfif')";
        films[i].childNodes[1].textContent = noveltyList[i].name;
        films[i].addEventListener('click', function(e){     
            trailer_open(films[i].id);
        });
    }
}

function trailer_open(id)
{
    document.body.style.overflow = "hidden";
    myBackground = getBlurBack();
    myWindow = getWindow();
    myWindow.querySelector(".dialog_title").querySelector("p").textContent="Трейлер";
    myWindow.querySelector('img').src = "svg/close.svg";
    myWindow.querySelector(".dialog_title").querySelector("img").addEventListener('click', function(e){     
        trailer_close();
    });

    let noveltyContainer = document.createElement('iframe');
    noveltyContainer.id = "noveltyContainer";
    for(let i=0;i<noveltyList.length;i++)
    {
        noveltyContainer.src = noveltyList[id].src;
        noveltyContainer.allowFullscreen = "true";
        noveltyContainer.picru
    }
        
    
    myWindow.appendChild(noveltyContainer);
    myBackground.appendChild(myWindow);
    document.body.append(myBackground);
}

function trailer_close()
{
    qurSouvNum = 0;
    document.body.style.overflow = "auto";
    document.body.removeChild(myBackground);
}