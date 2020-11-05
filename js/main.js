$(document).ready(function () {
	$('.slider-1').slick({
		arrows: true,
		speed: 500,
		fade: true,
		dots: true,

		responsive: [{
			breakpoint: 768,
			settings: {
				arrows: false,
			}
		}]

	});


	$('.slider-2').slick({
		arrows: true,
		speed: 500,
		slidesToShow: 4,

		responsive: [{
				breakpoint: 576,
				settings: {
					arrows: false,
					dots: true,
					slidesToShow: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					dots: true,
					slidesToShow: 2
				}
			},
			{
				breakpoint: 1024,
				settings: {
					arrows: true,
					dots: false,
					slidesToShow: 3
				}
			}
		]
	});

});
