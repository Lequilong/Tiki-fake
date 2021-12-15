var UsreDK = document.querySelector('.header-user-name-span');
var Modeclick = document.querySelector('.modo');
var Delete = document.querySelector('.btn-close');
var InputForcus = document.querySelector('.header-click-input');
var HistorForcus = document.querySelector('.header_tiki-container-nav-search-sup');
var ModeInput = document.querySelector('.mode-c1');

UsreDK.addEventListener('click', function(){
    Modeclick.classList.add('click');
});

Delete.addEventListener('click',function(){
    Modeclick.classList.remove('click');
})

InputForcus.onfocus = function(){
    // bấm zo input
    ModeInput.classList.add('active');
    HistorForcus.classList.add('active');
}

InputForcus.onblur = function(){
    // bấm ra ngoài
    ModeInput.classList.remove('active');
    HistorForcus.classList.remove('active');
}


$(document).ready(function(){
    $('.slider_header-container-span').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='btn_prev ti-angle-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='btn_prev ti-angle-right'></i></button>"
    });
});

$(document).ready(function(){
    $('.slider_container-item').slick({
        autoplay: true,
        dots:true,
        autoplaySpeed : 5000,
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev pull-left click-left'><i class='btn_prev ti-angle-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right click-right'><i class='btn_prev ti-angle-right'></i></button>"
    });
  });

// $(document).ready(function(){
//     $('.content-header-discount-body-list').slick({
//         slidesToShow: 6,
//         slidesToScroll: 6,
//         infinite: false,
//         arrows: true,
//         prevArrow:"<button type='button' class='slick-prev pull-left'><i class='btn_prev ti-angle-left'></i></button>",
//         nextArrow:"<button type='button' class='slick-next pull-right'><i class='btn_prev ti-angle-right'></i></button>"
//     });
// });


$(document).ready(function(){
    $('.content_container-MainBannersWrapper-c1').slick({
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots:true,
        dotsClass :'slick-dots-content',
        autoplaySpeed : 5000,
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev pull-left click-left btn-left'><i class='btn_prev ti-angle-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right click-right btn-right'><i class='btn_prev ti-angle-right'></i></button>"
    });
  });

// $(document).ready(function(){
//     $('.content_ccontainer-BrandCardsWrapper-c1').slick({
//         slidesToShow: 6,
//         slidesToScroll: 2,
//         infinite: false,
//         arrows: true,
//         prevArrow:"<button type='button' class='slick-prev pull-left lino-icon-left'><ion-icon name='chevron-back-outline'></ion-icon></button>",
//         nextArrow:"<button type='button' class='slick-next pull-right lino-icon-right'><ion-icon name='chevron-forward-outline'></ion-icon></button>"
//     });
// });

// $(document).ready(function(){
//     $('.content_container-top_trending-body-item').slick({
//         slidesToShow: 4,
//         slidesToScroll: 4,
//         infinite: false,
//         arrows: true,
//         prevArrow:"<button type='button' class='slick-prev pull-left lino-icon-left'><ion-icon name='chevron-back-outline'></ion-icon></button>",
//         nextArrow:"<button type='button' class='slick-next pull-right lino-icon-right'><ion-icon name='chevron-forward-outline'></ion-icon></button>"
//     });
// });

$('.content_container-tab-category').slick({
    infinite: false,
    slidesToShow: 10,
    slidesToScroll: 1,
    respondTo:'slider',
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
   
    ]
});

$('.content_ccontainer-BrandCardsWrapper-c1').slick({
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 2,
  respondTo:'slider',
  arrows: true,
  prevArrow:"<button type='button' class='slick-prev pull-left lino-icon-left'><ion-icon name='chevron-back-outline'></ion-icon></button>",
  nextArrow:"<button type='button' class='slick-next pull-right lino-icon-right'><ion-icon name='chevron-forward-outline'></ion-icon></button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});

$('.content_container-table-lazyload-slider-c1').slick({
  centerMode: true,
  centerPadding: '50px',
  slidesToShow: 1,
  dots: true,
  autoplay: true,
  autoplaySpeed : 3000,
  dotsClass: 'slider-table',
  adaptiveHeight: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 1
      }
    }
  ]
});

$('.content_container-top_trending-body-item').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  respondTo:'slider',
  arrows: true,
  prevArrow:"<button type='button' class='slick-prev pull-left lino-icon-left'><ion-icon name='chevron-back-outline'></ion-icon></button>",
  nextArrow:"<button type='button' class='slick-next pull-right lino-icon-right'><ion-icon name='chevron-forward-outline'></ion-icon></button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});

$('.content-header-discount-body-list').slick({
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 6,
  respondTo:'slider',
  arrows: true,
  prevArrow:"<button type='button' class='slick-prev pull-left lino-icon-left'><ion-icon name='chevron-back-outline'></ion-icon></button>",
  nextArrow:"<button type='button' class='slick-next pull-right lino-icon-right'><ion-icon name='chevron-forward-outline'></ion-icon></button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }

  ]
});
