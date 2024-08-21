window.addEventListener("scroll", function (e) {
  let header = this.document.querySelector("header");
  if (window.scrollY > 81) {
    header.style.backgroundColor = "#fff";
  } else if (window.screenY < 81) {
    header.style.backgroundColor = "transparent";
  }
});
