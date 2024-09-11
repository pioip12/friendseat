$(document).ready(function () {
  $(".popup").hide();
  $(".txt_box_icon a").on("click", function (event) {
    event.preventDefault(); // 기본 동작 막기 (페이지 이동 방지)
    $(".popup").fadeIn(); // 팝업 표시

    //3초 후 팝업 자동 닫기
    setTimeout(function () {
      $(".popup").fadeOut();
    }, 1000);
  });

  //   서치바
  function showDetail() {
    $(".top_searchbar").css("opacity", "1");
    $(".search").css("display", "none");
    $(".close").css("display", "block");
  }

  function hideDetail() {
    $(".top_searchbar").css("opacity", "0");
    $(".search").css("display", "block");
    $(".close").css("display", "none");
  }
  window.showDetail = showDetail;
  window.hideDetail = hideDetail;
});
