
function pullPokemon(){
	for (var i = 1; i < 152; i++) {
		$('#pokemon_images').append("<img id='" +i+"'class='poke_image' src='http://pokeapi.co/media/img/" +i+ ".png' alt='Pokemon image #" +i+ "'>");
	};

};

function stats(id) {
        		$.get("http://pokeapi.co/api/v1/pokemon/"+id+"/", function(res) {
                    console.log(res);
                    var html_str = "";
                    html_str += "<img id='" +id+"'class='poke_image' src='http://pokeapi.co/media/img/" +id+ ".png' alt='Pokemon image #" +id+ "'><h3>" +res.name+ "<h4>Types</h4>";
                    html_str += "<ul>"; 
                    for(var i = 0; i < res.types.length; i++) {
                        html_str += "<li>" + res.types[i].name + "</li>";
                    }
                    html_str += "</ul><h4>Height</h4><p>" +res.height+ " feet</p><h4>Weight</h4><p>" +res.weight+ " lbs.</p>";
                    $("#info").html(html_str);
                }, "json");
        	};


$(document).ready(function() {

	pullPokemon();

	
	$(document).on('click', 'img', function(){
		var id = $(this).attr('id');
		$(this).append(stats(id));
		// $(this).toggle(.css('width', '400px'));
	
	});
});