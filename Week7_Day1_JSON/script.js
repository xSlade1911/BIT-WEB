var $button = document.querySelector("button");
$button.addEventListener("click", function() {
  var url = "https://dog.ceo/api/breeds/image/random";

  var ajax = new XMLHttpRequest();

  ajax.open("GET", url);

  ajax.addEventListener("load", function() {
    var data = JSON.parse(ajax.responseText);

    var $img = document.createElement("img");
    $img.setAttribute("src", data.message);

   

    document.querySelector("body").append($img);

  });

  ajax.send();
});
