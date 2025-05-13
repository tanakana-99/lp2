$('.voices__box').slick({
    infinite: true,
    centerMode: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: true,
    variableWidth: false,
    prevArrow: $('.bi-arrow-left-short'),
    nextArrow: $('.bi-arrow-right-short'),
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: false
        }
    }]
});


$(document).ready(function () {
    $('.qa__container__box__item__answer').hide();

    $('.qa__container__box__item').on('click', function () {
        var content = $(this).find('.qa__container__box__item__answer');
        $(this).toggleClass('open');
        content.slideToggle();
    });
});