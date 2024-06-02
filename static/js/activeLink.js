    document.addEventListener("DOMContentLoaded", function() {
        const menuItems = document.querySelectorAll(".menu-item");
        let activeMenuItem = localStorage.getItem("activeMenuItem");

        if (activeMenuItem) {
            document.querySelector(`.menu-item[href="${activeMenuItem}"]`).classList.add("bg-gray-900", "text-white");
        }

        menuItems.forEach(function(item) {
            item.addEventListener("click", function(event) {
                event.preventDefault(); 
                const url = this.getAttribute("href");
                
                console.log("Menu item clicked", url);
                localStorage.setItem("activeMenuItem", url);
                window.location.href = url; // Update the URL

                // Styling for active menu item
                menuItems.forEach(function(item) {
                    item.classList.remove("bg-gray-900", "text-white");
                });
                this.classList.add("bg-gray-900", "text-white");
            });
        });
    });
