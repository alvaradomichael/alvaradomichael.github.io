document.querySelector('.numUsedBags').textContent = localStorage.numUsedBags;

if (localStorage.numUsedBags == 10){
  document.querySelector('.supershame').style.color = 'black';
}
