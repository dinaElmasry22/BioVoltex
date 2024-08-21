"use strict";

var navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.forEach(function (navLink) {
      navLink.classList.remove("active");
    });
    link.classList.add("active");
  });
});
var btnsGroup = document.querySelectorAll(".btns-group .btn");
btnsGroup.forEach(function (btn) {
  btn.addEventListener("click", function () {
    btnsGroup.forEach(function (btn) {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
  });
});

function filterSelection(category) {
  var projects = document.querySelectorAll(".project");
  projects.forEach(function (project) {
    if (category === "all") {
      project.style.display = "block";
    } else {
      if (project.classList.contains(category)) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    }
  });
}
//# sourceMappingURL=script.dev.js.map
