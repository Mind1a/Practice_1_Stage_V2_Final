"use strict";
// Slider
const productContainers = [...document.querySelectorAll(".methods-wrapper")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

// Burger Menu

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const hideScroll = document.querySelector(".scrollOff");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelector(".show-modal");

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  hideScroll.classList.remove("hideScroll");
};

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  hideScroll.classList.add("hideScroll");
};

btnsOpenModal.addEventListener("click", openModal);

overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
