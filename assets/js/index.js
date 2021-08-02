
function initSwiper() {
	var mySwiper = new Swiper(".swiper-container", {
		// esto es opcional
		direction: "horizontal",
		slidesPerView: 1,
		slidesPerGroup: 1,
		loop: true,
		spaceBetween: 0,
		//visibilityFullFit: true,
		pagination: ".swiper-pagination",
		paginationClickable: true,
		nextButton: ".swiper-button-next",
		prevButton: ".swiper-button-prev",
	});
}
//coloresSections();
initSwiper();

