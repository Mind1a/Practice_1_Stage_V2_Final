"use strict";

// Select for search button Page 2, off-topic

let searchBtn = document.getElementById("searchBtn");

let searchOutput = document.getElementById("searchOutput");

let selectLanguage = document.querySelector("#languageSelect");

searchBtn.addEventListener("click", function () {
  searchOutput.placeholder = `Use Language: ${selectLanguage.value}`;
  if (selectLanguage.value === "null")
    searchOutput.placeholder = "Choose language from select!";
});
