
$(document).ready(function() {

	// $('#submit_form').click(function(){ 
	// 	var newline = "<tr><td>" +$('form').find('#1').val()+ "</td><td>" +$('form').find('#2').val()+ "</td><td>" +$('form').find('#3').val()+ "</td><td>" +$('form').find('#4').val()+ "</td></tr>";
	// 	$('#enter_data').append(newline);
	// });

	$('#submit_form').click(function() {
		var first = $('#1').val();
		var last = $('#2').val();
		var email = $('#3').val();
		var phone = $('#4').val();
		$('#enter_data').append('<tr><td>' +first+ '</td><td>' +last+ '</td><td>' +email+ '</td><td>' +phone+ '</td></tr>')
	});
});