

const swiper5 = new Swiper('.swiper-container', {
  // Default parameters
  slidesPerView: 4,
  spaceBetween: 16,
  loop: true,
  cssMode:true,


  pagination: {
    el: ".swiper-pagination",
    clickable: true,


  },
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 4,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 16,
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
})



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


