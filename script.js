'use strict';
document.addEventListener('DOMContentLoaded', () => {

  function nerdInput() {
    return fetch("https://superheroapi.com/api.php/1476336809372383/261/biography")
    .then(function(response) {
        return response.json();
      })
  
    .then (function(response) {
     return document.getElementById('nerd-input').innerHTML = response['first-appearance']; 
    })
  }
  nerdInput();
  // hint event code //
  document.getElementById('name').addEventListener('mouseover', mouseOver);
  document.getElementById('name').addEventListener('mouseout', mouseOut);
  
  function mouseOver() {
    document.getElementById('name').innerHTML = 'Ronnie Raymond';
  }

  function mouseOut(){
    document.getElementById('name').innerHTML = 'Name (hover)';
  }
  
  // answer event code //
  const answers = document.getElementById('answers');
  answers.addEventListener('click', function() {
    alert('DeathStorm');
  })
})