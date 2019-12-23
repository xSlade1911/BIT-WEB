var $gallery1 = $("<div>");
var $gallery2 = $("<div>");

var images = ["https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150"]

for (var i = 0; i < 3; i++) {
    $imageFirstGallery = $("<img>").attr("src", images[i]).width("33%");
    $imageSecondGallery = $("<img>").attr("src", images[i + 3]).width("33%");
    $gallery1.append($imageFirstGallery);
    $gallery2.append($imageSecondGallery);
};

$("body").append($gallery1);
$("body").append($gallery2);

$gallery1.children("img:first").addClass("selected");

function changeBorder() {
    $(".selected").removeClass("selected").parent().next().children("img:first").next().addClass("selected");
}

changeBorder();
