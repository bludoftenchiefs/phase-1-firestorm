'use strict';
document.addEventListener('DOMContentLoaded', () => {
const nerdThing = document.getElementById('nerdthing');
const nerdInput = document.getElementById('nerd-input');

nerdThing.addEventListener('click', function() {
    let btn = document.createElement('li');
    btn.innerHTML = nerdInput.value;
    document.body.appendChild(btn);
    nerdInput.value = '';
     })
})

document.getElementById('hint').addEventListener('mouseover', mouseOver);
document.getElementById('hint').addEventListener('mouseout', mouseOut);

function mouseOver () {
    document.getElementById('hint').innerHTML = 'there are more than you think';
}
function mouseOut(){
  document.getElementById('hint').innerHTML = '';
}

const answers = document.getElementById('answers');
answers.addEventListener('click', function() {
  alert('Ronnie Raymond/Martin Stein, Mikhail Arkadan/Jason Thomas, Ronnie Raymond/Jason Thomas, Ronnie/Stein/Arkadan, Jason Thomas/Martin Stein, Jason Thomas/Firehawk, Fire Elemental');
})