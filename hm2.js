document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Apply dark mode if it's enabled in localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
    }

    // Toggle dark mode on button click
    if (toggleButton) {
        toggleButton.addEventListener("click", () => {
            body.classList.toggle("dark-mode");
            localStorage.setItem("darkMode", body.classList.contains("dark-mode") ? "enabled" : "disabled");
        });
    }
});
