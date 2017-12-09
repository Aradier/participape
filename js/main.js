$('.hbtn').click(function(){
	$('.tapamenuresponsive').fadeIn();
})

$('.btnrsp').click(function(){
	$('.tapamenuresponsive').fadeOut();
})

$(window).scroll(function(){
	if ($(window).scrollTop()==0) {
		$('.header').removeClass('headerfixed');
		$('.prolificlogofixed').hide();
		$('.prolificlogo').show();
		$('.normalli').removeClass('navlistliafixed');
		$('.lastli-menu').removeClass('lastli-menufixed');
	}
	else
	{
		$('.header').addClass('headerfixed');
		$('.prolificlogofixed').show();
		$('.prolificlogo').hide();
		$('.normalli').addClass('navlistliafixed');
		$('.lastli-menu').addClass('lastli-menufixed');
	}
})
