/* Create page which has soccer field as bg image
In top left corner there should be image of soccer player
When user clicks anywhere on the field, the player is moved to that position
Add the button which is used to disable player movement
 */

var $player = $("#player");

var $field = $("#field");

$field.on("click", getClickPosition);

function getClickPosition(e) {
    var xPosition = e.clientX - (player.offsetWidth / 2);
    var yPosition = e.clientY - (player.offsetHeight / 2);

    var translate3dValue = "translate3d(" + xPosition + "px," + yPosition + "px, 0)";
    player.style.transform = translate3dValue;
}

function removeHandler() {
    $field.off("click", getClickPosition);
}

