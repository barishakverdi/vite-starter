let html = document.getElementsByTagName("html")[0];
let body = document.getElementsByTagName("body")[0];
let header = document.getElementById("header");
// let headerBody = document.querySelectorAll(".header-body");
let headerHeight = header.getAttribute('data-header-height');
let headerStickyHeight = header.getAttribute('data-sticky-header-height');
let whiteLogo = document.getElementById("logo-white");
let coloredLogo = document.getElementById("logo-colored");
let menuItem = document.querySelectorAll(".menu-item");

window.onscroll = function (){
    if (window.scrollY > header.offsetTop) {
        html.classList.add("sticky-active");
        header.classList.add("!fixed", "top-0");
        header.style.height = headerStickyHeight + "px";
        coloredLogo.style.width = coloredLogo.getAttribute('data-sticky-width') + "px";
    }

    else {
        html.classList.remove("sticky-active");
        header.classList.remove("!fixed", "top-0");
        header.style.height = headerHeight + "px";
        coloredLogo.style.width = "0px";
    }
}

let afterHeaderBody = document.createElement("div");
header.firstElementChild.appendChild(afterHeaderBody);
afterHeaderBody.classList.add("mover");
afterHeaderBody.style.height = headerHeight + "px";
menuItem.forEach(item => {
    item.addEventListener("mouseover", function () {
        if (item.childElementCount < 2) return;

        if (item.lastElementChild.classList.contains("sub-menu") && window.innerWidth > 1024) {
            body.classList.add("after:h-full", "dropdown-active", "overflow-hidden");

            afterHeaderBody.style.height = parseInt(headerHeight) + parseInt(item.lastElementChild.offsetHeight) + "px";
            afterHeaderBody.style.backgroundColor = "white";

            if (window.scrollY === header.offsetTop) {
                whiteLogo.style.width = "0";
                whiteLogo.style.position = "absolute";

                coloredLogo.style.width = whiteLogo.offsetWidth + "px";
                coloredLogo.style.position = "static";
            }
        }
    })

    item.addEventListener("mouseleave", function () {
        body.classList.remove("after:h-full", "dropdown-active", "overflow-hidden");
        afterHeaderBody.style.height = headerHeight + "px";
        afterHeaderBody.style.backgroundColor = "transparent";
    })
})
