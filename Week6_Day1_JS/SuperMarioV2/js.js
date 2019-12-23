var mario = document.querySelector(".mario");
var backDrop = document.getElementById("back_drop");


function marioAnimation() {
    mario.classList.toggle("running");
}

var groundInterval;
var keyDownFix = false;

function startAnimation(event) {

    if (event.key === "ArrowRight" && !keyDownFix) {
        keyDownFix = true;
        console.log(keyDownFix);

        marioAnimation();
        groundInterval = setInterval(groundAnimation, 50);
    }
}

function stopAnimation() {
    marioAnimation();
    clearInterval(groundInterval);
    keyDownFix = false;
}


var body = document.querySelector("body");
body.addEventListener("keydown", startAnimation);
body.addEventListener("keyup", stopAnimation);