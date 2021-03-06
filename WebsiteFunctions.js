function openNav() {
  document.getElementById("menu").style.width = "100%";
}

function closeNav() {
  document.getElementById("menu").style.width = "0%";
}

function smoothScroll() {
    'use strict';
    var windowHeight = window.document.getElementById("Title").offsetHeight;
    var divArray = [document.getElementById("Title"), document.getElementById("LBlue"), document.getElementById("Pink"), document.getElementById("Yellow"), document.getElementById("Tan")];
    var arrayCount = 0;

    window.addEventListener("wheel", function (event) {
      for(var i = 0; i < divArray.length; i++) {
        if(divArray[i].onmouseover) {
          if (event.deltaY <= -1) {
              if (arrayCount !== 0) {
                  arrayCount -= 1;
                  window.scrollTo(0, divArray[arrayCount].offsetTop);
              }
              /*window.scrollBy(0, -windowHeight);*/
          } else if (event.deltaY >= 1) {
              if (arrayCount < divArray.size) {
                  arrayCount += 1;
                  window.scrollTo(0, divArray[arrayCount].offsetTop);
              }
              /*window.scrollBy(0, windowHeight);*/
          }
        }
      }

    });
}


/* A switch case in which it scrolls to the next section, depending on which section it is currently on */

                /*Assume mouse start in location 0 of array ("title")
                when scroll detected, increase array element by 1
                Set window location to top of that array element*/
