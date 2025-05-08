// カルーセル
$('.voices__box').slick({
    slidesToShow: 3, // 同時に表示するスライド数
    slidesToScroll: 3, // スクロール時に動く枚数
    dots: true,
    arrows: true,
    variableWidth: false,
    prevArrow: $('.bi-arrow-left-short'),
    nextArrow: $('.bi-arrow-right-short'),
    responsive: [{
        breakpoint: 768, // スマホでは1枚だけ表示
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: false
        }
    }]
});

$(document).ready(function () {
    // すべての答えを非表示
    $('.qa__container__box__item__answer').hide();

    // 最初の質問と答えだけ表示状態に
    $('.qa__container__box__item').first().addClass('open')
        .find('.qa__container__box__item__answer').show();

    // アコーディオン開閉処理
    $('.qa__container__box__item').on('click', function () {
        var content = $(this).find('.qa__container__box__item__answer');
        $(this).toggleClass('open');
        content.slideToggle();
    });
});