
//List of of Smash Up factions that I own
var deck = ["Vampires","Apes","Robots","Ninjas","Fairies","Shape Shifters","Time Travelers",
				"Plants", "Mythical Horses","Dinos","Princesses","Aliens","Wizards","Geeks",
				"Tricksters","Pirates","Spies","Zombees","Steam Punks","Ghosts","Bears",
				"Giant Ants","Kittens","Mad Scientists","Werewolves"];

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