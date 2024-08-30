$(function () {
  $(".sec02_box").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 1,
    centerMode: true,
    prevArrow: $(".left_grey_1"), //이전 화살표만 변경
    nextArrow: $(".right_grey_1"), //다음 화살표만 변경
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
