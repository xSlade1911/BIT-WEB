function changeSlide() {
    var slider = document.querySelector(".slider");
    var active = slider.querySelector(".active");

    if (active && active.nextElementSibling) {
        console.log("aaa");
        active.nextElementSibling.className = 'active';
        active.className = '';
    } else {
        slider.firstElementChild.className="active";
        active.className = "";
    }
}

setInterval(changeSlide, 2000);