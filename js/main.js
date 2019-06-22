"use strict";

var SHADOW_TRIGGER_PROCENT = 10;

$( document ).ready( function(e) {
	function setContainerHeight( value ){
		$(".container").css( "height", value );
	};

	function setSliderSize( value ){
		$(".img-comp-slider").css( "height", value );
	};

	function getCurrentSize(){
		return $( ".img-right" ).height();
	};

	$(window).resize( function(e) {
		setContainerHeight( getCurrentSize() + "px" );
		setSliderSize( getCurrentSize() + "px" );
	});

	document.addEventListener('touchmove', function(e) {
		updateScreen(e);
	});

	$(window).mousemove( function(e) {
		updateScreen(e);
	});

	$(window).click( function(e) {
		console.log( );
	});

	function updateScreen(e){
		var clientX = e.pageX || e.touches[0].clientX; 
		var procent = clientX * 100 / $(window).width();
		if ( procent < 2 || procent > 98 )
			return;

		if ( procent < SHADOW_TRIGGER_PROCENT ){
			$( ".shadow-left" ).css( "opacity", 1 - procent / SHADOW_TRIGGER_PROCENT );
		} else {
			$( ".shadow-left" ).css( "opacity", 0 );
		}

		if ( procent > (100 - SHADOW_TRIGGER_PROCENT) ){
			$( ".shadow-right" ).css( "opacity", ( procent - (100 - SHADOW_TRIGGER_PROCENT) ) / SHADOW_TRIGGER_PROCENT );
		} else {
			$( ".shadow-right" ).css( "opacity", 0 );
		}
		$( ".img-right" ).css( "margin-left", procent + "%" );
		$( ".img-right img" ).css( "left", "-" + procent + "%" );
		$( ".img-comp-slider" ).css( {"left": procent + "%"} );
	}

	setContainerHeight( getCurrentSize() + "px" );
	setSliderSize( getCurrentSize() + "px" );
});