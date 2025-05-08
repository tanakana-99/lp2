// カルーセル
// $(function () {
//     $(".voices__box").slick({
//         arrows: false,
//         autoplay: true,
//         adaptiveHeight: false,
//         dots: true,
//         slidesToShow: 3,
//         responsive: [{
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 1,
//             },
//         }, ],
//     });
// });

// $('.voices__box').slick({
//     autoplay: true,
//     autoplaySpeed: 4000,
//     arrows: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
// });

$('.voices__box__item').slick({
    slidesToShow: 3, // 同時に表示するスライド数
    slidesToScroll: 1, // スクロール時に動く枚数
    dots: true,
    arrows: true,
    responsive: [{
        breakpoint: 768, // スマホでは1枚だけ表示
        settings: {
            slidesToShow: 1
        }
    }]
});