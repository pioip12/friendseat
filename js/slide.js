$(function () {
  $(".main_wrapper").slick({
    infinite: true,
    // autoplay: true, //슬라이드 자동 시작(true or false) ▶기본값 false
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: false,
    // 스크롤바 아래 점으로 페이지네이션 여부

    dots: false,
    dotsClass: "main_button",
    draggable: true,
    pauseOnDotsHover: true,
    prevArrow: $("#slick-slide-control00 "), //이전 화살표만 변경
    nextArrow: $("#slick-slide-control01"), //다음 화살표만 변경
  });

  $(".sec02_all_box").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    centerMode: false,
    prevArrow: $(".left_grey_1"), //이전 화살표만 변경
    nextArrow: $(".right_grey_1"), //다음 화살표만 변경
    responsive: [
      {
        breakpoint: 1175,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },

      {
        breakpoint: 488,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
        },
      },
    ],
  });

  $("#slick-slide-control00").on("click", function () {
    $(this).css({
      backgroundColor: "black",
    });
    $("#slick-slide-control01 ").css({
      backgroundColor: "#fff",
    });
  });

  $("#slick-slide-control01").on("click", function () {
    $(this).css({
      backgroundColor: "black",
    });
    $("#slick-slide-control00 ").css({
      backgroundColor: "#fff",
    });
  });

  // 레시피 슬라이더
  $(".sec03_allbox").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    centerMode: false,
    autoplay: true,
    prevArrow: $(".left_grey1"), //이전 화살표만 변경
    nextArrow: $(".right_grey1"), //다음 화살표만 변경
    responsive: [
      {
        breakpoint: 1175,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },

      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  });
});
