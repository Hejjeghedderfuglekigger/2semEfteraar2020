/*
 * fil: js.js
 * purpose: introdction to jQuery
 */

// A $( document ).ready() block.
$(document).ready(function () { // kører så snart DOM er klar

	// ... kode herfra ...
	$('#menu').hide();

	// "knap" sådan
	$("#burger").click(function(){
  		$('#menu').toggle(234);
		$('.a').slideToggle(300)
			.css("background-color", "#ff0033");
	});
	// ... din kode slut ...

}); // denne line må ikke slettes
