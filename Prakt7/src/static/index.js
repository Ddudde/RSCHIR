let qurId = 0;
let filmsInBlock = 7;
let mainPage = document.querySelector('#mainPage');
fillHeroesWindow();


function fillHeroesWindow(){
  mainPage.appendChild(getMainHeader());
  mainPage.appendChild(getSubHeader(0));
  mainPage.appendChild(getFilmBlock());
  mainPage.appendChild(getSubHeader(1));
  mainPage.appendChild(getFilmBlock());

    //Заполняем фильмы
    let films = document.querySelectorAll('.film');
    for(let i=0; i < films.length; i++){
      films[i].style.backgroundImage = "url('images/"+i+".jpg')";
      films[i].childNodes[1].textContent = heroes[i].name;
      films[i].addEventListener('click', function(e){     
          let id = e.currentTarget.id; 
          localStorage.setItem("id",id);
          document.location.href='hero/hero.html';
        });
  }

}

function getSubHeader(i){
  let subHeader = document.createElement('div');
  subHeader.classList.add('subHeader');
  subHeader.textContent = subTitles[i];

  return subHeader;
}

function getFilmBlock(){
  let row = document.createElement('div');
  row.classList.add('filmBlock');
  for(let i=0;i<filmsInBlock;i++)
    row.append(getFilm());
  return row;
}

function getFilm(){

  let film = document.createElement('div');
  film.classList.add('film');
  film.id = qurId;

  let infoOne = document.createElement('div');
  infoOne.classList.add('info');
  let infoTwo = document.createElement('div');
  infoTwo.classList.add('info');

  film.appendChild(infoOne);
  film.appendChild(infoTwo);

  qurId++;
  return film;
}


