/* Selecting One/Multiple Elements
Create two unordered lists on the page.
    
Create a function that selects the second list and applies a class that sets some background color to it.

Create a second function that, when triggered, selects all <li> elements on the page. 
The function also sets a class that sets some bg color to every <li> element.

Create one more unordered list and one more function
The function​ should select only <li> elements from that last list
Each <li> element should get a class that sets some bg color and transforms the text to uppercase.
 */
/*
function setBackground() {
  document.getElementById("secondList").className = "backgroundList";
}

setBackground();

function setBackgroundToLiElements() {
  var items = document.getElementsByTagName("li");

  for (var i = 0; i < items.length; i++) {
    items[i].className = "backgroundElementList";
  }
}
*/

/*setBackgroundToLiElements();*/
/*
function setBgAndUppercase() {
  var thirdList = document.getElementById("thirdList");
  var items = thirdList.getElementsByTagName("li");

  for (var i = 0; i <= items.length - 1; i++) {
    items[i].className = "line" + i + "Class";
  }
}

setBgAndUppercase();

/* Traversing
Create two unordered lists.
Each list should be wrapped in a div element.
One <li> element in the second list should have a class “active”, which sets its background color.

Create a function that selects the <li> element with class “active”.
Remove the class from that element, and then select the first <li> element in the first unordered list 
using node relations.
Apply class to that newly selected <li> element
 */
/* 
function removeClass() {
  var fifthList = document.getElementById("fifthList");
  fifthList.querySelector(".active").className = "";
}

function setClass() {
  var fourthList = document.getElementById("fourthList");

  fourthList.firstElementChild.className = "active";
}

removeClass();

setClass(); */

/* 
Access/Update Text Node
Create an unordered list containing <li> items that represent navigation.

Create a function that takes text from one of the <li> elements and presents it on screen using alert.
  
Create one more function.
The function should take some text as an argument.
The function should select the last <li> element in the list and replace its text with text passed as the function argument.
 */

function setAlert() {
  var str = document.getElementById("sixthList").firstElementChild.textContent;
  window.alert(str);
}

setAlert();

function setText(str) {
  document.getElementById("sixthList").lastElementChild.textContent = str;
}

setText("New content");
