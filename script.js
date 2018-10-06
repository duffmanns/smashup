
//List of of Smash Up factions that I own
var deck = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];

//List of cards that have been selected
var pickedCards = [];


//This function adds selected cards back into the deck
function reset() {
	Array.prototype.push.apply(deck, pickedCards);
	pickedCards = [];
	$('#cards').empty();
}


var main = function() {

	$('form').submit(function(event) {

		var x = getRandomInt(0,deck.length);

		if (deck.length<1) {
			window.alert("No more cards in deck");
			return false;
		};

		var html = $('<li>').text(deck[x]);
		html.prependTo('#cards');
		
		pickedCards.push(deck[x]);
		deck.splice(x,1);

		return false;
	});
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

$(document).ready(main);