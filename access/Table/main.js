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
        autoplaySpeed : 10000,
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev pull-left click-left'><i class='btn_prev ti-angle-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right click-right'><i class='btn_prev ti-angle-right'></i></button>"
    });
  });

  $(document).ready(function(){
    $('.content-header-discount-body-list').slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        infinite: false,
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='btn_prev ti-angle-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='btn_prev ti-angle-right'></i></button>"
    });
});

