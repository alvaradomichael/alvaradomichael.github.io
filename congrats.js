document.querySelector('.savedBags').textContent = localStorage.numSavedBags;

if (localStorage.numSavedBags == 2){
  document.querySelector('.supercongrats').style.color = 'black';
}
