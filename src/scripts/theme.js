document.addEventListener("DOMContentLoaded", () => {
    const themeToggleInput = document.querySelector("#themeToggle input");
    const root = document.querySelector("html");

    if (!themeToggleInput || !root) {
        console.error("Error: Could not find the theme toggle input or root element!");
        return;
    }

    // Check localStorage for theme preference, default to dark mode
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        setLightMode();
        themeToggleInput.checked = true; // Ensure the toggle reflects the state
    } else {
        setDarkMode(); // Default to dark mode
        themeToggleInput.checked = false;
    }

    // Listen for toggle changes
    themeToggleInput.addEventListener("change", () => {
        if (themeToggleInput.checked) {
            setLightMode();
            localStorage.setItem("theme", "light"); // Save preference
        } else {
            setDarkMode();
            localStorage.setItem("theme", "dark"); // Save preference
        }
    });

    function setLightMode() {
        root.classList.add("light-mode");
        root.style.setProperty("--primary", "#FFFFFF");
        root.style.setProperty("--secondary", "#F0F0F0");
        root.style.setProperty("--tertiary", "#222222");
        root.style.setProperty("--quaternary", "#007BFF");
    }

    function setDarkMode() {
        root.classList.remove("light-mode");
        root.style.setProperty("--primary", "#1E1E2E");
        root.style.setProperty("--secondary", "#2E2E3E");
        root.style.setProperty("--tertiary", "#EAEAEA");
        root.style.setProperty("--quaternary", "#00A3FF");
    }
});
