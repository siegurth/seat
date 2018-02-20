$(document).ready(function(){
	$('.sandwich-menu').click(function(){
		$(this).toggleClass('active');
		$('nav').toggleClass('active');

		return false;
	});

	$(window).on('resize', function(){
		var w = $(window).width();

		if (w >= 769) {
			$('.sandwich-menu, nav').removeClass('active');
		}
	});
});