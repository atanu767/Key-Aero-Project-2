
jQuery(document).ready(function($){
  $('.my-slider').slick({
    dots:false,          // show dots navigation
    infinite: true,      // infinite loop
    speed: 500,          // transition speed
    slidesToShow: 7,     // how many slides to show at once
    slidesToScroll: 1,   // how many slides to scroll at once
    autoplay: true,      // enable autoplay
    autoplaySpeed: 2000,  // autoplay speed
    arrows: false,      
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint:550,
        settings: {
          slidesToShow: 3
        }
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 2
      //   }
      // }
    ] 
    
  });
});
$(document).ready(function(){
      $('.podcast-slider').slick({
        dots:false,
        arrows: false,  // Disable default arrows
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          { breakpoint:991, settings: { slidesToShow: 3 } },
          { breakpoint: 767, settings: { slidesToShow: 2 } },
          { breakpoint:510, settings: { slidesToShow: 1 } }
        ]
      });

      // Custom arrows
      $('#prev').click(function() {
        $('.podcast-slider').slick('slickPrev');
      });
      $('#next').click(function() {
        $('.podcast-slider').slick('slickNext');
      });
    });
    $(document).ready(function(){
      $(".menu-btn").click(function(){
        $(".links").toggleClass("on")
        $(".menu-btn i").toggleClass("ri-close-large-line")
      })
    });
    
document.getElementById("lightBtn").addEventListener("click", function () {
  document.body.classList.remove("dark-mode");
});

document.getElementById("darkBtn").addEventListener("click", function () {
  document.body.classList.add("dark-mode");
});



