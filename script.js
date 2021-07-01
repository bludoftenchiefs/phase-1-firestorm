'use strict';
document.addEventListener('DOMContentLoaded', () => {

  nerdInput();
  // hint event code //
  document.getElementById('name').addEventListener('mouseover', mouseOver);
  document.getElementById('name').addEventListener('mouseout', mouseOut);
  // The mouseover event occurs when the mouse
  
  // is moved onto an element, or onto one of its children. 
  //  The mouseout event is fired when the mouse is used to move the 
  //  cursor so that it is no longer contained within the element or one of its children.
  
  
  // answer event code //
  const answers = document.getElementById('answers');
  answers.addEventListener('click', () => {
    alert('DeathStorm');
  })
})

const nerdInput = () => {
   fetch("https://superheroapi.com/api.php/1476336809372383/261/biography")
  .then (response => response.json())
  
  .then ( (response) => {
    const addOn = document.createElement('p')
    document.getElementById('nerd-input').append(addOn)
    addOn.innerHTML = 'First-Appearance';
    document.getElementById('nerd-input').innerHTML +=response['first-appearance'];
    const anotherAddOn =document.createElement('p')
    anotherAddOn.innerHTML = 'Publisher'
    document.getElementById('nerd-input').append(anotherAddOn)
    document.getElementById('nerd-input').append(response['publisher'])
  })
  }
// requests for a resources(the API) return. returns a promise that resolves into a Response object (json)
//which resolves to actual data

// hint event code cont....//
function mouseOver() {
  document.getElementById('name').innerHTML = 'Ronnie Raymond';
}

function mouseOut() {
  document.getElementById('name').innerHTML = 'Name (hover)';
}

