if (localStorage.numSavedBags == undefined){
  localStorage.numSavedBags = 0;
}

document.querySelector('.yesbutton').addEventListener('click', function() {
var numSavedBags = localStorage.numSavedBags;
var savedBags = parseInt(numSavedBags)
savedBags = savedBags + 1;
localStorage.numSavedBags = savedBags;


location.href = 'congrats.html'


});

if (localStorage.numUsedBags == undefined){
  localStorage.numUsedBags = 0;
}

document.querySelector('.nobutton').addEventListener('click', function() {
var numUsedBags = localStorage.numUsedBags;
var UsedBags = parseInt(numUsedBags)
UsedBags = UsedBags + 1;
localStorage.numUsedBags = UsedBags;


location.href = 'shame.html'


});
