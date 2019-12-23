function changeSlide() {
    var slider = document.querySelector(".slider");
    var active = slider.querySelector(".active");

    if (active && active.nextElementSibling) {
        active.nextElementSibling.className = "active";
        active.className = "";
    } else {
        slider.firstElementChild.className = "active";
        active.className = "";
    }
}

setInterval(changeSlide, 4000);