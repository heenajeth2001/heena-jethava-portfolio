    // document.addEventListener("DOMContentLoaded", function() {
    //     const menuItems = document.querySelectorAll(".menu-item");
    //     let activeMenuItem = localStorage.getItem("activeMenuItem");

    //     if (activeMenuItem) {
    //         document.querySelector(`.menu-item[href="${activeMenuItem}"]`).classList.add("bg-gray-900", "text-white");
    //     }

    //     menuItems.forEach(function(item) {
    //         item.addEventListener("click", function(event) {
    //             event.preventDefault(); 
    //             const url = this.getAttribute("href");
                
    //             console.log("Menu item clicked", url);
    //             localStorage.setItem("activeMenuItem", url);
    //             window.location.href = url; // Update the URL

    //             // Styling for active menu item
    //             menuItems.forEach(function(item) {
    //                 item.classList.remove("bg-gray-900", "text-white");
    //             });
    //             this.classList.add("bg-gray-900", "text-white");
    //         });
    //     });
    // });

    document.addEventListener("DOMContentLoaded", function() {
        const menuItems = document.querySelectorAll(".menu-item");
        const bodyElement = document.body;
        let activeMenuItem = localStorage.getItem("activeMenuItem");
    
        function updateActiveLinkStyles() {
            const currentURL = window.location.href;
            menuItems.forEach(function(item) {
                item.classList.remove("bg-gray-900", "bg-teal-700", "text-white");
            });
    
            if (activeMenuItem) {
                const activeItem = document.querySelector(`.menu-item[href="${activeMenuItem}"]`);
                if (activeItem && activeItem.href === currentURL) {
                    if (bodyElement.classList.contains("dark")) {
                      activeItem.classList.add("bg-teal-700", "text-white");
                    } else {
                      activeItem.classList.add("bg-gray-900", "text-white");
                    }
                  }
            }
        }
    
        // Initial update based on stored value
        if (activeMenuItem) {
            updateActiveLinkStyles();
        }
    
        menuItems.forEach(function(item) {
            item.addEventListener("click", function(event) {
                event.preventDefault(); 
                const url = this.getAttribute("href");
                localStorage.setItem("activeMenuItem", url);
                window.location.href = url; // Update the URL
            });
        });
    
        // Update styles on theme change
        const observer = new MutationObserver(updateActiveLinkStyles);
        observer.observe(bodyElement, { attributes: true, attributeFilter: ['class'] });
    
        // Update styles on page load
        window.addEventListener('load', updateActiveLinkStyles);
    });
    