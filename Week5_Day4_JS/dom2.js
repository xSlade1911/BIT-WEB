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
/*
function setAlert() {
  var str = document.getElementById("sixthList").firstElementChild.textContent;
  window.alert(str);
}

setAlert();

function setText(str) {
  document.getElementById("sixthList").lastElementChild.textContent = str;
}

setText("New content");

*/
/* 
InnerHTML
Do the following exercise in two ways: using DOM manipulation methods and using innerHTML.
Create a function that is used for building a dropdown/select element.
It first builds a dropdown and then adds it to the DOM.
The function takes two arguments: the first is an array of strings and the second is a DOM node to which the dropdown will be added.
Create options that correspond to items in the passed array and add them to the select element.
Add the whole dropdown list to DOM .

Use this function to create two selects on the page.
The first select should be appended to the first div on the page.
The second select should be appended to the last div on the page. */

/*
var selectBody = document.querySelector("body");
*/

function createDropDown(arrStrings, domNode) {
  var dropdownmenu = document.createElement("select");

  for (var i = 0; i < arrStrings.length; i++) {
    var text = document.createTextNode(arrStrings[i]);
    var option = document.createElement("option");

    option.appendChild(text);

    dropdownmenu.appendChild(option);
  }

  domNode.appendChild(dropdownmenu);
}

/*
createDropDown(["Volvo", "Mercedes", "BMW"], selectBody);
*/

/* use of HTML */
/*
var selectBody = document.querySelector("body");
*/

function createDropDownInnerHTML(arrStrings, domNode) {
  var select = "<select>";

  for (var i = 0; i < arrStrings.length; i++) {
    select += "<option>";
    select += arrStrings[i];
    select += "</option>";
  }

  select += "</select>";

  domNode.innerHTML = select;
}

/* createDropDownInnerHTML(["Volvo", "BMW", "Audi"], selectBody); */

/*
Use this function to create two selects on the page.
The first select should be appended to the first div on the page.
The second select should be appended to the last div on the page. */

/* createDropDownInnerHTML(
  ["Volvo", "BMW", "Audi"],
  document.getElementById("first")
);

createDropDown(
  ["Mercedes", "Renault", "Peugeot"],
  document.getElementById("last")
);
 */
/* Attributes
Create a form that contains multiple input elements with labels.
Some of those elements should be required.

Create a function that validates the form.
The function checks each input element that belongs to the form.
If the element has the required attribute and no data, it should get red borders. */

var formaSaInputima = document.getElementById("forma");

function validateForm(form) {
  for (var i = 0; i < form.length; i++) {
    var selectInput = form[i];
    if (selectInput.hasAttribute("required") && selectInput.value === "") {
      selectInput.style.border = "1px solid red";
    }
  }
}

validateForm(formaSaInputima);
