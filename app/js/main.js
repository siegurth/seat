$(document).ready(function(){
	$('.sandwich-menu').click(function(){
		$(this).toggleClass('active');
		$('nav').toggleClass('active');

		return false;
	});

	$(window).on('resize', function(){
		var w = $(window).width(),
				mh = $('main').height();

		if (w >= 769) {
			$('.sandwich-menu, nav').removeClass('active');
		}

		if (mh <=652) {
			$('main').css({'overflow':'auto'});
		}
	});

	$(window).on('load', function(){
		if (mh <=652) {
			$('main').css({'overflow':'auto'});
		}	
	});

	$('.btn').click(function(){
		alert('Coming soon');
	});
	
});