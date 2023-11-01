let html = document.getElementsByTagName("html")[0];
export let body = document.getElementsByTagName("body")[0];
let header = document.getElementById("header");
let headerHeight = header.getAttribute('data-header-height');
let headerStickyHeight = header.getAttribute('data-sticky-header-height');
let whiteLogo = document.getElementById("logo-white");
let coloredLogo = document.getElementById("logo-colored");
let menuItem = document.querySelectorAll(".menu-item");

//Preparing header height before it gets sticky
header.style.height = headerHeight + "px";


//Preparing dropdown hover mover animation
let afterHeaderBody = document.createElement("div");
header.firstElementChild.appendChild(afterHeaderBody);
afterHeaderBody.classList.add("mover");
afterHeaderBody.style.height = headerHeight + "px";


/*Menu Item Hover Animation */
menuItem.forEach(item => {
    item.addEventListener("mouseover", function () {
        //if (item.childElementCount < 2) return;

        if (item.querySelector(".sub-menu") && window.innerWidth > 1024) {
            body.classList.add("after:h-full", "dropdown-active", "overflow-y-hidden");

            if (window.scrollY === header.offsetTop) {
                coloredLogo.style.width = whiteLogo.offsetWidth + "px";
                whiteLogo.style.display = "none";
                coloredLogo.style.display = "block";
            }

            afterHeaderBody.style.height = parseInt(headerHeight) + parseInt(item.querySelector(".sub-menu").offsetHeight) + "px";
            afterHeaderBody.classList.add("bg-white");
        }
    })

    item.addEventListener("mouseout", function () {
        body.classList.remove("after:h-full", "dropdown-active", "overflow-y-hidden");

        if (window.scrollY === header.offsetTop) {
            whiteLogo.style.display = "block";
            coloredLogo.style.display = "none";
            coloredLogo.style.width = coloredLogo.getAttribute("data-sticky-width") + "px";
        }

        afterHeaderBody.style.height = headerHeight + "px";
        afterHeaderBody.classList.remove("bg-white");
        //afterHeaderBody.style.backgroundColor = "transparent";
    })
})
/*Menu Item Hover Animation */


/* Sticky Header */
window.onscroll = function (){
    if (window.scrollY > header.offsetTop) {
        html.classList.add("sticky-active");

        header.classList.add("top-0");
        header.style.height = headerStickyHeight + "px";

        coloredLogo.style.display = "block";
        coloredLogo.style.width = coloredLogo.getAttribute('data-sticky-width') + "px";
        whiteLogo.style.display = "none";

        //mover block height change
        afterHeaderBody.style.height = headerStickyHeight + "px";
    }

    else {
        html.classList.remove("sticky-active");

        header.classList.remove("top-0");
        header.style.height = headerHeight + "px";

        coloredLogo.style.display = "none";
        whiteLogo.style.display = "block";

        //mover block height change
        afterHeaderBody.style.height = headerHeight + "px";
    }
}
/* Sticky Header */


/* Sidenav */
let sideNav = document.getElementById("sideNav");
let menuBtn = document.getElementById("menu-btn");
let closeBtn = document.getElementById("close-button");
menuBtn.addEventListener("click", () => {
    sideNav.classList.toggle("open");
    body.classList.toggle("overflow-y-hidden");
    menuBtn.classList.toggle("!items-start");
})

closeBtn.addEventListener("click", () => {
    sideNav.classList.remove("open");
    body.classList.remove("overflow-y-hidden");
    menuBtn.classList.remove("!items-start");
})

window.onload = () => {
    menuItem.forEach(mobileItem => {
        mobileItem.addEventListener("click", () => {

            if (mobileItem.querySelector(".sub-menu") && window.innerWidth < 1024) {
                mobileItem.querySelector(".sub-menu").classList.toggle("sub-menu-open");
            }
        })
    })
}
/* Sidenav */

