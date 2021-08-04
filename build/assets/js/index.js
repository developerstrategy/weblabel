
function initSwiper() {
	var mySwiper = new Swiper(".swiper-container", {
		// esto es opcional
		direction: "horizontal",
		slidesPerView: 4,

		loop: true,
		spaceBetween: 5,
		//visibilityFullFit: true,
		pagination: ".swiper-pagination",
		paginationClickable: true,
		nextButton: ".swiper-button-next",
		prevButton: ".swiper-button-prev",
	});


	var mySwiper2 = new Swiper(".swiper-container2", {
		// esto es opcional
		direction: "horizontal",
		slidesPerView: 1,

		loop: true,
		spaceBetween: 0,
		//visibilityFullFit: true,
		pagination: ".swiper-pagination",
		paginationClickable: true,
		nextButton: ".swiper-button-next",
		prevButton: ".swiper-button-prev",
	});
}

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll >= 50) {
        //console.log('a');
        $("body").addClass("has-stick");
    } else {
        //console.log('a');
        $("body").removeClass("has-stick");
    }
});

//coloresSections();
initSwiper();


