$(function () {
  $(".main_wrapper").slick({
    infinite: true,
    autoplay: true, //슬라이드 자동 시작(true or false) ▶기본값 false
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: false,
    // 스크롤바 아래 점으로 페이지네이션 여부

    dots: true,
    dotsClass: "main_button",
    draggable: true,
    pauseOnDotsHover: true,
    prevArrow: $("#slick-slide-control00 "), //이전 화살표만 변경
    nextArrow: $("#slick-slide-control01"), //다음 화살표만 변경
  });

  $(".sec02_box").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    centerMode: false,
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
