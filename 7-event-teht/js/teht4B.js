const pics = [
  {
    thumb: 'http://www.fillmurray.com/100/100',
    big: 'http://www.fillmurray.com/640/480',
  },
  {
    thumb: 'http://lorempixel.com/100/100/sports/1/',
    big: 'http://lorempixel.com//640/480/sports/1/',
  },
  {
    thumb: 'https://placeimg.com/100/100/tech',
    big: 'https://placeimg.com/640/480/tech',
  },
];

let n;
let t = pics.length;
let lista, listapaikka;
let kuva, lis;

lista = document.createElement('ul');
listapaikka = document.querySelector('body');
listapaikka.appendChild(lista);

for (n = 0; n<t; n++) {

  kuva = document.createElement('img');
  kuva.src = pics[n].thumb;
  kuva.alt = 'kuvake';

  lis = document.createElement('li');

  lis.appendChild(kuva);
  lista.appendChild(lis);
}


const listakuva = document.getElementsByTagName("li");
let isotkuvat = document.querySelector('div');
for (let i = 0; i <t; i++) {

  listakuva[i].addEventListener('click', function() {
    document.querySelector('#kuva img').src = pics[i].big;
    document.getElementById('kuva').setAttribute('class', 'visible');
  });

  isotkuvat.addEventListener('click', function() {
    document.getElementById('kuva').setAttribute('class', 'hidden');
  });
}



