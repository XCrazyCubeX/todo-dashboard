document.addEventListener("DOMContentLoaded", () => {
    const sideItems = document.querySelectorAll(".side-item");
    const sidebar = document.querySelector(".side-wrapper");
    const toggleButton = document.querySelector(".sidebar-toggle");

    const profileSelect = document.getElementById("profileSelect");
    const profileMenu = document.getElementById("profileMenu");


    // 🔹 Load Active State from Local Storage (Keeps Selection on Refresh)
    function loadActiveState() {
        const activeItemIndex = localStorage.getItem("activeItem");
        if (activeItemIndex !== null) {
            sideItems[activeItemIndex].classList.add("active");
            sideItems[activeItemIndex].querySelector(".active-item").classList.add("active");
        }
    }

    // 🔹 Store Active State When Clicking an Item
    sideItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            // Remove "active" class from all items first
            sideItems.forEach(el => {
                el.classList.remove("active");
                el.querySelector(".active-item").classList.remove("active");
            });

            // Add "active" class to the clicked item and its indicator
            item.classList.add("active");
            item.querySelector(".active-item").classList.add("active");

            // Store the active item index
            localStorage.setItem("activeItem", index);
        });
    });

    // 🔹 Ensure Sidebar Doesn't Collapse on Desktop
    function checkSidebarState() {
        if (window.innerWidth >= 769) {
            sidebar.classList.remove("collapsed"); // Keep sidebar open on large screens
            profileMenu.classList.remove("collapsed");

        }
    }

    // Sidebar Toggle (For Mobile)
    toggleButton.addEventListener("click", function () {
        sidebar.classList.toggle("collapsed");
        profileMenu.classList.toggle("collapsed");
    });

    // Ensure Sidebar is Open on Desktop When Resizing
    window.addEventListener("resize", checkSidebarState);

    // Load active state when page loads
    loadActiveState();


    // active state for login/logout menu 

    profileSelect.addEventListener("click", () => {
        profileMenu.classList.toggle("active");
    })
});
