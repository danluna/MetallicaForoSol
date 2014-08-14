$(document).ready(function() {	

		// Home button properties
	$(".home").mouseover(function() {
		$(this).css("background-color", "green");
		$(this).css("color", "black");
		$(this).css("cursor", "pointer");
	});

	$(".home").mouseout(function() {
		$(this).css("background-color", "black");
		$(this).css("color", "white");
	});

	$(".home").click(function() {
		window.location.href = "/";
	});

	// Mouseover options for each song tab
	$(".song").mouseover(function() {
		$(this).css("background-color", "#336699");
		$(this).css("cursor", "pointer");

	});

	$(".song").mouseout(function() {
		$(this).css("background-color", "#003366");
	})

	// Event when clicking on a song tab
	$(".song").click(function() {
		var songAreaStatus = $(this).find(".songArea").css("display");
		if(songAreaStatus === "none") {
			$(this).find(".songArea").show("slow");
		}
		else {
			$(this).find(".songArea").hide("slow");
		}
		
	});
});