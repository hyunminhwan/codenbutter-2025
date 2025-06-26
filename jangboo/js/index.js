const header = document.querySelector("header");
const scrollTopButton = document.getElementById("top-btn");

function scrollTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function init() {
  window.addEventListener("scroll", function (e) {
    if (window.scrollY > 90) {
      header.classList.add("sticky");
      scrollTopButton.classList.add("show");
    } else {
      header.classList.remove("sticky");
      scrollTopButton.classList.remove("show");
    }
  });
  scrollTopButton.addEventListener("click", scrollTop);
}

init();
