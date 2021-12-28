var buttonRed = document.getElementById('btn-red');
var buttonGreen = document.getElementById('btn-green');
var buttonBlue = document.getElementById('btn-blue');
var button10 = document.getElementById('btn-10');
var button20 = document.getElementById('btn-20');
var button30 = document.getElementById('btn-30');
var buttonMontserrat = document.getElementById('btn-montserrat');
var buttonOswald = document.getElementById('btn-oswald');
var buttonRoboto = document.getElementById('btn-roboto');

var paragraph = document.getElementById('paragraph');

buttonRed.addEventListener('click', event => {
  paragraph.style.color = 'red';
});

buttonGreen.addEventListener('click', event => {
  paragraph.style.color = 'green';
});

buttonBlue.addEventListener('click', event => {
  paragraph.style.color = 'blue';
});

button10.addEventListener('click', event => {
  paragraph.style.fontSize = '10px';
});

button20.addEventListener('click', event => {
  paragraph.style.fontSize = '15px';
});

button30.addEventListener('click', event => {
  paragraph.style.fontSize = '20px';
});

buttonMontserrat.addEventListener('click', event => {
  paragraph.style.fontFamily = 'Montserrat';
});

buttonOswald.addEventListener('click', event => {
  paragraph.style.fontFamily = "'Oswald', sans-serif";
});

buttonRoboto.addEventListener('click', event => {
  paragraph.style.fontFamily = 'Roboto';
});