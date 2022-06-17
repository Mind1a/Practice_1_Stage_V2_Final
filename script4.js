"use strict";

window.addEventListener("resize", displayWindowSize);
function displayWindowSize() {
  let myWidth = window.innerWidth;
  if (myWidth > 1900) {
    getData(4);
  } else if (myWidth < 1900 && myWidth > 768) {
    getData(2);
  } else {
    getData(1);
  }
}

displayWindowSize();

function getData(counter) {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      var content = "<div class='wrapper'>";
      var len = 101;

      for (let index = 1; index < len; index++) {
        var element = json[index - 1];

        var htmlhead =
          "<div class='methods-partial'> <img src='img/" +
          element["userId"] +
          ".png' class='responsive-img' alt='method-01' />";
        var htmlh3 = "<h3>" + element["title"] + "</h3>";
        var htmlP = "<p>" + element["body"] + "<br /><br />";
        var htmlUser =
          "</span > <span class='idNum'>User Id:  </span>  " +
          element["userId"] +
          "</p><br /></div>";
        var subcontent = htmlhead + htmlh3 + htmlP + htmlUser;
        if (index == 100) {
          content = content + subcontent + "</div>";
        } else if (index % counter == 0 && index != 0) {
          content = content + subcontent + "</div>" + "<div class='wrapper'>";
        } else {
          content = content + subcontent;
        }
      }
      var bodyhtml = document.getElementById("wrap");
      bodyhtml.innerHTML = content;
    });
}
