let id = localStorage.getItem("id");
let prefix = '../';

fillHeroWindow();

function fillHeroWindow(){
document.querySelector("#title").textContent = heroes[id].name;
images = document.querySelectorAll(".photo");
for(let i=0;i<images.length; i++)
  images[i].style.backgroundImage = 'url("../images/'+id+'_'+i+'.jpg")';

let btns = document.querySelector(".btns");

//Кнопка покупок
let basket = document.querySelector("#basket");
basket.addEventListener('click', function(e){     
  openBasket(id);
});

  makeHeroData();
}

function makeHeroData(){

  //Текст о герое
  document.querySelector("#hero_info_text").textContent = heroes[id].info;

  //Кнопка "Создатель"
  document.querySelector("#btn_maker").textContent = heroes[id].maker[0];
  document.querySelector("#btn_maker").href = heroes[id].maker[1];

  //Кнопка "Исполнитель"
  document.querySelector("#btn_actor").textContent = heroes[id].actor[0];
  document.querySelector("#btn_actor").href = heroes[id].actor[1];

  //Кнопка "Фильм"
  document.querySelector("#btn_film").textContent = heroes[id].filmName;
  document.querySelector("#btn_film").href = heroes[id].film;
}

//Карусель
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}