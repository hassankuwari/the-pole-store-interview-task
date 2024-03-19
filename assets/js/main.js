// products slider
$(document).ready(function(){
  console.log("doc ready");
$('.product-banner').slick({
  centerPadding: '60px',
  slidesToScroll: 1,
  infinite:true,
  slidesToShow: 3,
  prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>',
  responsive: [
    {
      breakpoint: 768,
      settings: {    
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});


//clients slider
$('.clients-container').slick({
  dots: true,
  centerPadding: '60px',
  slidesToScroll: 1,
  infinite:true,
  slidesToShow: 3,
  focusOnSelect: true,
  prevArrow: '<button type="button" class="slick-prev client-slick-btn">Previous</button>',
      nextArrow: '<button type="button" class="slick-next client-slick-btn">Next</button>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
})

//ja for toggle mobile menu
$("#hamburgerBtn,#menuCloseBtn").on("click", function(){
  console.log("check");
  $(".responsive-nav").toggleClass("show-menu");
})
