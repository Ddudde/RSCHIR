let qurId = 0;
let pairsInBlock = 7;
createCinemaPair();
function createCinemaPair(){
    document.body.appendChild(getMainHeader());
    document.body.appendChild(getPairBlock());


    //Заполняем пары
    let pairs = document.querySelectorAll('.pair');
    for(let i=0; i < pairs.length; i++){
        pairs[i].style.backgroundImage = "url('pair/images_pair/"+i+".jpg')";
        pairs[i].childNodes[0].childNodes[0].textContent = pairsList[i][0];
        pairs[i].childNodes[0].childNodes[2].textContent = pairsList[i][1];
        pairs[i].addEventListener('click', function(e){     
            let id = e.currentTarget.id; 
            localStorage.setItem("id",id);
            document.location.href='pair/pair.html';
        });
    }

}

function getPairBlock(){
    let row = document.createElement('div');
    row.classList.add('pairBlock');
    for(let i=0;i<pairsInBlock;i++)
      row.append(getPair());
    return row;
  }
  
  function getPair(){
  
    let pair = document.createElement('div');
    pair.classList.add('pair');
    pair.id = qurId;

    let info = document.createElement('div');
    info.classList.add('info');
    let first = document.createElement('div');
    first.classList.add('name');
    info.appendChild(first);

    first = document.createElement('div');
    first.classList.add('vs');
    first.textContent = "VS";
    info.appendChild(first);

    first = document.createElement('div');
    first.classList.add('name');
    info.appendChild(first);


    pair.appendChild(info);
  
    qurId++;
    return pair;
  }
  