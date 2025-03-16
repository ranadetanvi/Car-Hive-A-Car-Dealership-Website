document.addEventListener("DOMContentLoaded", function () {
    const selectedOption = document.querySelector(".selected-option");
    const dropdownOptions = document.querySelector(".dropdown-options");
    const selectedBrandText = document.getElementById("selected-brand");
    const selectedBrandLogo = document.getElementById("selected-logo");
    const hiddenInput = document.getElementById("brand-filter");

    selectedOption.addEventListener("click", function () {
        dropdownOptions.style.display = dropdownOptions.style.display === "block" ? "none" : "block";
    });

    dropdownOptions.querySelectorAll("li").forEach(item => {
        item.addEventListener("click", function () {
            let brandName = this.textContent.trim();
            let brandLogo = this.querySelector("img").src;

            selectedBrandText.textContent = brandName;
            selectedBrandLogo.src = brandLogo;
            hiddenInput.value = this.getAttribute("data-value");

            dropdownOptions.style.display = "none";
        });
    });

    document.addEventListener("click", function (event) {
        if (!selectedOption.contains(event.target) && !dropdownOptions.contains(event.target)) {
            dropdownOptions.style.display = "none";
        }
    });
});
