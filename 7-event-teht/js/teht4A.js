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

let t = pics.length;
let listaus;
let isokuva;

listaus = document.querySelector('ul');

for (let n = 0; n < t; n++) {
  console.log( 'li:nth-child(' + (n + 1) + ')');

  listaus.innerHTML +=
      `<li>
            <img src="${pics[n].thumb}" alt="kuvake">
         </li>`;
}


const listakuva = document.getElementsByTagName("li");
let isotkuvat;
isotkuvat = document.querySelector('div');

for (let i = 0; i <listakuva.length; i++) {
  listakuva[i].addEventListener('click', function() {
    isotkuvat.innerHTML +=
        `<img src="${pics[i].big}" alt="kuvake">`;
    document.getElementById('kuva').setAttribute('class', 'visible');
  });


  isotkuvat.addEventListener('click', function() {
    document.getElementById('kuva').setAttribute('class', 'hidden');

    // koska innetHTML-metodissa kaikki kuvat jäävät muuten listaukseen, ne pitää poistaa piilottaessa -> voi olla monta kuvaa samaan aikaan näkyvissä, jos ei klikata pois
    isokuva = document.querySelector('div img');
    isotkuvat.removeChild(isokuva);
  });
}
