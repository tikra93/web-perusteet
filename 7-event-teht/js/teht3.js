



let numero1 = document.querySelector('#num1');
let numero2 = document.querySelector('#num2');


let tulos = 0;
let vastaus = document.getElementById("vastaus");

const summa = document.getElementById('sum');
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








