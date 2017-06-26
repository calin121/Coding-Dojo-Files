
$(document).ready(function() {
	$(".arena_select").hover(function() {
		var background = $(this).attr("alt");
		$("#wrap").css("background-image", "url('"+background+".jpg')");
	},
	function() {
		$("#wrap").css("background-image", "url('BlackImage.jpg')");
	});

	$(".arena_select").click(function() {
		var background = $(this).attr("alt");
		$("#wrap").css("background-image", "url('"+background+".jpg')");
		$("#select_box").html("<h1 class='select'>Select Players</h1><form class='figthers' id='drop1'><select class='dropdown'><option class='arena_select' alt='none'>Select Ninja</option><option class='arena_select' alt='leo'>Leonardo</option><option class='arena_select' alt='mikey'>Michaelangelo</option><option class='arena_select' alt='donny'>Donatelo</option><option class='arena_select' alt='raphael'>Raphael</option></select></form><form class='figthers' id='drop2'><select class='dropdown'><option class='arena_select' alt='none'>Select Ninja</option><option class='arena_select' alt='leo'>Leonardo</option><option class='arena_select' alt='mikey'>Michaelangelo</option><option class='arena_select' alt='donny'>Donatelo</option><option class='arena_select' alt='raphael'>Raphael</option></select></form>");
	});
	$(document).on("click", "#drop1", function() {
		var turt = $("#drop1 option:selected").attr("alt");
		if(turt === "none") {
			return;
		}
		else {
			$("#turtle_left").html("<img src='"+turt+".png'>");
			console.log(turt);
	};
	});
	$(document).on("click", "#drop2", function() {
		var turt = $("#drop2 option:selected").attr("alt");
		if(turt === 'none') {
			return;
		}
		else {
			$("#turtle_right").html("<img src='"+turt+".png'>")
		};
	});
});