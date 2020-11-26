$(window).scroll(function () {
  let height = $(window).scrollTop();
  if (height > 74) {
    $(".nav-container").addClass("nav-container-fixed");
  } else {
    $(".nav-container").removeClass("nav-container-fixed");
  }
  if (height > 170) {
    $(".nav-container").addClass("nav-container-bg");
  } else {
    $(".nav-container").removeClass("nav-container-bg");
  }
});

// $(document).ready(function () {
//   $('.nav-container a[href^="#"]').click(function () {
//     let offset = 50;
//     let target = $(this).attr("href");
//     $("html, body").animate(
//       {
//         scrollTop: $(target).offset().top - offset,
//       },
//       1000
//     );
//     $('.nav-container a[href^="#"]').removeClass("active");
//     $(this).addClass("active");
//     return false;
//   });
// });

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

var mySwiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
