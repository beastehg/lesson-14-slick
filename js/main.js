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
		// dots: false,
		// dots: true,
		// infinite: true,
		slidesToShow: 4,

		responsive: [{
				breakpoint: 576,
				settings: {
					arrows: false,
					// centerMode: true,
					// centerPadding: '40px',
					dots: true,
					slidesToShow: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					dots: true,
					// centerMode: true,
					// centerPadding: '40px',
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
