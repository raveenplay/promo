"use strict";

var _slider_stop_procent = 1;

$( document ).ready( function(e) {
	var $container = $(".container");

	function setContainerHeight( value ){
		$(".container").css( "height", value );
	};

	function setContainerWidth( value ){
		$(".container").css( "width", value );
	};

	function setSliderHeight( value ){
		$(".img-comp-slider").css( "height", value );
	};

	function getCurrentHeight(){
		return $( ".img-right" ).height();
	};

	function getCurrentWidth(){
		return $( ".img-right" ).width();
	};

	$(window).resize( function(e) {
		setContainerHeight( getCurrentHeight() + "px" );
		setContainerWidth( getCurrentWidth() + "px" );
	});

	document.addEventListener('touchmove', function(e) {
		updateScreen(e);
	});

	document.addEventListener('mousemove', function(e) {
		updateScreen(e);
	});

	document.addEventListener('touchstart', function(e) {
		updateScreen(e);
	});

	function updateScreen(e){
		var clientX = e.pageX || e.touches[0].clientX; 
		var procent = clientX * 100 / $(window).width();
		if ( procent < _slider_stop_procent || procent > 100 - _slider_stop_procent )
			return;

		$( ".img-right" ).css( "margin-left", procent + "%" );
		$( ".img-right img" ).css( "left", "-" + procent + "%" );
	}

	setContainerHeight( getCurrentHeight() + "px" );
	setContainerWidth( getCurrentWidth() + "px" );

	$( ".mobile-tutorial" )
	.on( "mousedown", function(e) {
		$(this).css( {"display" : "none"} );
	})
	.on( "touchstart", function(e) {
		$(this).css( {"display" : "none"} );
	});
});