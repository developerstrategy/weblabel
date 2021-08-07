
function initSwiper() {



	var mySwiper = new Swiper(".swiper-container", {
        slidesPerView: 5,
        spaceBetween: 4,
		loop: true,

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 4,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 8,
          },
        },
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



