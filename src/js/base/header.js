let html = document.getElementsByTagName("html")[0];
let body = document.getElementsByTagName("body")[0];
let header = document.getElementById("header");
let headerHeight = header.getAttribute('data-header-height');
let headerStickyHeight = header.getAttribute('data-sticky-header-height');
let whiteLogo = document.getElementById("logo-white");
let coloredLogo = document.getElementById("logo-colored");
let menuItem = document.querySelectorAll(".menu-item");
header.style.height = headerHeight + "px";

window.onscroll = function (){
    if (window.scrollY > header.offsetTop) {
        html.classList.add("sticky-active");
        header.classList.add("!fixed", "top-0");
        header.style.height = headerStickyHeight + "px";
        setTimeout(function () {
            coloredLogo.style.width = coloredLogo.getAttribute('data-sticky-width') + "px";
        }, 50)
    }

    else {
        html.classList.remove("sticky-active");
        header.classList.remove("!fixed", "top-0");
        header.style.height = headerHeight + "px";
        setTimeout(function () {
            coloredLogo.style.width = "0px";
        }, 50)
    }
}

menuItem.forEach(item => {
    item.addEventListener("mouseover", function () {
        if (item.lastElementChild.classList.contains("sub-menu")) {
            body.classList.add("after:h-full");
        }
    })

    item.addEventListener("mouseleave", function () {
        body.classList.remove("after:h-full");
    })
})