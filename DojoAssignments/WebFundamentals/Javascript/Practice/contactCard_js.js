
$(document).ready(function() {

	$("button").click(function(){
		var first = $('#1').val();
		var last = $('#2').val();
		var description = $('#3').val();
		$('#users').append('<div id ="card" ><p>' +first+ ' ' +last+ '</p><p id= "back"> ' +description+ '</p></div>');
		return false;
	});

	$(document).on('click', '#card', function(){
		$(this).children().toggle();
	});

});