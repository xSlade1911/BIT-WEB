
function changeBackgroundColor() {

    var element = document.getElementById("wrapper");
    element.classList.toggle("background");
}


function turnOff() {
    document.getElementById("first_button").removeAttribute("onclick");
}


button.onclick = function () {


    var getTextContent = document.getElementById("input").value;


    var textNode = document.createTextNode(getTextContent);
    var paragraphElement = document.createElement('p');
    paragraphElement.appendChild(textNode);

    document.getElementById("chatRoom").appendChild(paragraphElement);

    /*     var breakLine = document.createElement('br');
        var breakLine2 = document.createElement('br'); */

    /*   document.getElementById("chatRoom").appendChild(breakLine);
      document.getElementById("chatRoom").appendChild(breakLine2);
   */
    document.getElementById("input").value = "";

}
