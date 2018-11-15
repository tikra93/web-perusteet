const kuva = document.querySelector('img');

kuva.addEventListener('mouseenter', function(){
  document.querySelector('p').setAttribute('class', 'seen');
});

kuva.addEventListener('mouseleave', function(){
  document.querySelector('p').setAttribute('class', 'hidden');
});