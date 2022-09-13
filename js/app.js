"use strict";

// SELECTION
const topHeader = document.querySelector(".page__header");
const listBtn = document.querySelector(".btn");
const ulList = document.querySelector(".list");
const scrollTopBtn = document.querySelector(".scroll-top");
const sections = document.querySelectorAll("section"); // all sections by data atribute
const sectionOne = document.getElementById("section-1");
const sectionTwo = document.getElementById("section-2");
const sectionThree = document.getElementById("section-3");
const sectionFour = document.getElementById("section-4");

// function for create ul list based on sections length
const createLists = function () {
  for (let i = 0; i < sections.length; i++) {
    const html = `<li><a href="#" data-link=${i + 1}>Section ${i + 1}</a></li>`;
    // add list to ul
    ulList.insertAdjacentHTML("beforeend", html);
  }
};
createLists();

//////// for add active for current section ////////
window.addEventListener("scroll", function () {
  for (let i = 0; i < sections.length; i++) {
    if (this.scrollY >= sections[i].offsetTop - 300) {
      sections.forEach((el) => {
        el.classList.remove("active");
      });
      sections[i].classList.add("active");
    }
  }
});

if (sections.length >= 7) {
  ulList.style.justifyContent = "center";
}

//////// when click on any li close btn ////////
ulList.childNodes.forEach((ele) => {
  ele.addEventListener("click", () => listBtn.click());
});

//////// Handle header in scroll ////////
let page = window.scrollY;
window.addEventListener("scroll", function () {
  if (page > window.scrollY) {
    topHeader.classList.remove("hidden--nav");
  } else {
    topHeader.classList.add("hidden--nav");
  }
  page = window.scrollY;
});
//////// for btn in mobail media ////////
listBtn.addEventListener("click", function () {
  listBtn.classList.toggle("clicked");
  if (
    ulList.style.getPropertyValue("display") === "none" ||
    ulList.style.getPropertyValue("display") === ""
  ) {
    ulList.style.display = "flex";
  } else if (ulList.style.getPropertyValue("display") === "flex") {
    ulList.style.display = "none ";
  }
});

//////// for scroll to top btn ////////
window.addEventListener("scroll", function (e) {
  if (scrollY >= 700) {
    scrollTopBtn.classList.remove("hidden");
  } else {
    scrollTopBtn.classList.add("hidden");
  }
});

// when click on it
scrollTopBtn.addEventListener("click", function () {
  scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

//////// smooth scrolling ////////
ulList.addEventListener("click", function (e) {
  e.preventDefault();
  const target = e.target.dataset.link;
  document
    .getElementById(`section-${target}`)
    .scrollIntoView({ behavior: "smooth" });
});
