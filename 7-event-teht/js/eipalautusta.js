const paikka = document.querySelector('#dropdown');

const valikko =
    '<button onclick="myFunction()" class="dropbtn">Valitse laskutapa</button>\n' +
    '  <div id="myDropdown" class="dropdown-content">\n' +
    '    <a href="#sum">Summa</a>\n' +
    '    <a href="#sub">Vähennys</a>\n' +
    '    <a href="#multi">Kertolasku</a>\n' +
    '    <a href="#div">Jakolasku</a>\n' +
    '</div>';
paikka.innerHTML = valikko;



function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

let numero1 = document.querySelector('#num1');
let numero2 = document.querySelector('#num2');


let tulos = 0;
let vastaus = document.getElementById("vastaus");

const summa = document.querySelector('#sum');
summa.addEventListener('click', function(){
  tulos = parseFloat(numero1.value) + parseFloat(numero2.value);
  vastaus.innerHTML = 'Tulos on ' + tulos;
});

const vahennys = document.getElementById('sub');
vahennys.addEventListener('click', function(){
  tulos = parseFloat(numero1.value) - parseFloat(numero2.value);
  vastaus.innerHTML = 'Tulos on ' + tulos;
});

const kerto = document.getElementById('multi');
kerto.addEventListener('click', function(){
  tulos = parseFloat(numero1.value) * parseFloat(numero2.value);
  vastaus.innerHTML = 'Tulos on ' + tulos;
});

const jako = document.getElementById('div');
jako.addEventListener('click', function(){
  tulos = parseFloat(numero1.value) / parseFloat(numero2.value);
  vastaus.innerHTML = 'Tulos on '  + tulos;
});

/*
document.querySelector('#sum').setAttribute('class', 'hidden');
document.querySelector('#sub').setAttribute('class', 'hidden');
document.querySelector('#multi').setAttribute('class', 'hidden');
document.querySelector('#div').setAttribute('class', 'hidden');


let summa, vahennys, kerto, jako;

summa= document.querySelector('#sum');
vahennys = document.querySelector('#sub');
kerto = document.querySelector('#multi');
jako = document.querySelector('#div');

/*
function summa (e) {
  tulos = numero1 + numero2;
}

function vahennys (e) {
  tulos = numero1 - numero2;
}

function kerto (e) {
  tulos = numero1 * numero2;
}

function jako (e) {
  tulos = numero1 / numero2;
}
<button id="sum">Yhteenlasku</button>
    <button id="sub">Vähennyslasku</button>
    <button id="multi">Kertolasku</button>
    <button id="div">Jakolasku</button>
*/



