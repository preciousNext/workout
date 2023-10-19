var section = document.querySelector("section");
var burgerIcon = document.querySelector(".burger");
var navLinks = document.querySelector(".nav-links");
burgerIcon.addEventListener("click", function () {
  navLinks.classList.toggle("show");
  burgerIcon.classList.toggle("navbar-active");
  section.classList.toggle("shift");
});
//night / day//
document.getElementById("toggleButton").addEventListener("click", function () {
  var bodyElement = document.querySelector("body");
  var toggleButton = document.querySelector("#toggleButton");
  if (bodyElement.classList.contains("night-mode")) {
    bodyElement.classList.remove("night-mode");
    toggleButton.innerHTML = '<i id = "round" class = "fas fa-sun"><i/>';
  } else {
    bodyElement.classList.add("night-mode");
    toggleButton.innerHTML = '<i id = "bend" class = "fas fa-moon"><i/>';
  }
});
document.getElementById("content1").classList.add("active");
function showContent(contentId) {
  var contents = document.querySelectorAll(".content");
  contents.forEach(function (content) {
    content.classList.remove("active");

    var selectedContent = document.getElementById(contentId);
    selectedContent.classList.add("active");
  });
}
