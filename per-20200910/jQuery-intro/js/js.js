/*
 * fil: js.js
 * purpose: introdction to jQuery
 */

// Lav en "burger menu" med jQuery og passende effekter ...

// A $( document ).ready() block.
$(document).ready(function () { // kører så snart DOM er klar

	// ... kode herfra ...

	$("#enKnap").click(function () {
		$('h2').toggle(777);
		$("p").css({
			"background-color": "yellow", 
			"font-size": "200%",
			"color": "purple"
		});
	});

	// ... din kode slut ...

}); // denne line må ikke slettes
