document.addEventListener("DOMContentLoaded", () => {
    const sideItems = document.querySelectorAll(".side-item");

    sideItems.forEach(item => {
        item.addEventListener("click", () => {
            // Remove "active" class from all items first
            sideItems.forEach(el => {
                el.classList.remove("active");
                el.querySelector(".active-item").classList.remove("active");
            });

            // Add "active" class to the clicked item and its indicator
            item.classList.add("active");
            item.querySelector(".active-item").classList.add("active");
        });
    });
});
