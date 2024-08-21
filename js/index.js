// window.addEventListener("scroll", function (e) {
//   let header = this.document.querySelector("header");
//   if (window.scrollY > 81) {
//     header.style.backgroundColor = "#fff";
//   } else if (window.screenY < 81) {
//     header.style.backgroundColor = "transparent";
//   }
// });

function showDetail() {
  document.querySelector(".top_searchbar").style.opacity = "1";
  document.querySelector(".search").style.display = "none";
  document.querySelector(".close").style.display = "block";
}
function hideDetail() {
  document.querySelector(".top_searchbar").style.opacity = "0";
  document.querySelector(".search").style.display = "block";
  document.querySelector(".close").style.display = "none";
}

// $(function () {
//   function openclose() {
//     let status = $(".top_searchbar").css("display");
//     console.log(status); //콘솔창에 로그를 남기며, 확인했으면 삭제하기
//     if (status == "block") {
//       $(".top_searchbar").hide();
//     } else {
//       $(".top_searchbar").show();
//     }
//   }
// });
