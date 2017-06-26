
function pullPokemon(){
	for (var i = 1; i < 152; i++) {
		$('#pokemon_images').append("<img class='poke_image' src='http://pokeapi.co/media/img/" +i+ ".png' alt='Pokemon image #" +i+ "'>");
	};

};

$(document).ready(function() {

	pullPokemon(); //i'm calling in my function from above

// or I can just create my function after the document is ready

// for (var i = 1; i < 152; i++) {
// 		$('#pokemon_images').append("<img class='poke_image' src='http://pokeapi.co/media/img/" +i+ ".png' alt='Pokemon image #" +i+ "'>");
// 	};


});