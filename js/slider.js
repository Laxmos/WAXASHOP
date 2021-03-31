$(document).ready(function(){
	$('.slider__body').slick({
        arrows:true,
		dots:true,
		slidesToShow:1,
		autoplay: true,
		autoplaySpeed:5000,
		draggable:false,
		pauseOnDotsHover:false,
		pauseOnFocus:false,
        //variableWidth: false,
        appendArrows:$('.slider__switch'),
        //centerMode: true,
        /*responsive:[
			{
				breakpoint: 960,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 630,
				settings: {
					slidesToShow:1
				}
			}
		],*/
        
	});
});