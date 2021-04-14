'use strict';

//Change opacity function
document.getElementById('checkbox').addEventListener('click', changeOpacity);

function changeOpacity() {
  let perQuarter = document.getElementById('per-quarter');
  let perYear = document.getElementById('per-year');
  if (this.checked) {
    perQuarter.style.opacity = 0.5;
    perYear.style.opacity = 1;
  } else {
    perQuarter.style.opacity = 1;
    perYear.style.opacity = 0.5;
  }
}

//Counter function
document.getElementById('increment').addEventListener('click', increment);
document.getElementById('decrement').addEventListener('click', decrement);

let counterEl = document.getElementsByClassName('count');
let count = 2;

function updateCounter(newCountValue) {
  for (let element of counterEl) {
    if (element.value !== 'undefined') {
      element.value = newCountValue;
    }
    if (element.innerHTML !== 'undefined') {
      element.innerHTML = newCountValue;
    }
  }
}
function increment() {
  count++;
  updateCounter(count);
}
function decrement() {
  if (count <= 2) {
    return;
  } else {
    count--;
    updateCounter(count);
  }
}

//Track clicks function
const buttonEl = document.querySelectorAll('.cta');
//console.log(buttonsEl);

let counter = 0;

buttonEl.forEach(function (elem) {
  elem.addEventListener('click', function () {
    counter++;
    //console.log('clicked');
    //Here goes the segment code for tracking clicks
    //In order to check the function, comment on these 3 lines of code
    // analytics.track('clickedCTA', {
    //   type: 'button',
    //   action: 'clicked',
    // });

    //I cannot test this because I don't have a Segment account.
    //Link to the documentation https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/
  });
});
