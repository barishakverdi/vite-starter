let customDropdown = document.querySelectorAll(".custom-dropdown");
let options = document.querySelectorAll(".options");
let option = document.querySelectorAll(".option");

customDropdown.forEach(dropdown => {
    dropdown.addEventListener("click", function (e) {

        options.forEach(options => {
            if (dropdown.getAttribute("data-dropdown-id") === options.getAttribute("data-options-id")) {
                dropdown.firstElementChild.lastElementChild.classList.toggle("rotate-180"); //angle-down-icon
                options.classList.toggle("options-open");

                option.forEach(option => {
                    let placeholderText = option.parentElement.parentElement.querySelectorAll(".placeholder span");

                    option.addEventListener("click", function (e) {
                        placeholderText.forEach(placeholderText => {
                            dropdown.querySelectorAll("input").value = placeholderText.innerHTML;

                            if (placeholderText.getAttribute("data-placeholder-id") === dropdown.getAttribute("data-dropdown-id")) {
                                placeholderText.innerHTML = option.firstElementChild.innerHTML;
                            }
                        })
                    })
                })
            }
        })
    })
})
