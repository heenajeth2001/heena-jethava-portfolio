    document.addEventListener("DOMContentLoaded", function () {
        // Function to check if an element is in viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        // Function to handle lazy loading of elements
        function lazyLoad() {
            const lazyLoadContainers = document.querySelectorAll('.lazy-load');

            lazyLoadContainers.forEach(container => {
                if (!container.classList.contains('lazy-loaded') && isInViewport(container)) {
                    container.classList.add('lazy-loaded'); // Mark container as loaded
                    container.querySelectorAll('.lazy-load-item').forEach(item => {
                        item.classList.remove('lazy-load-item'); // Remove lazy-load-item class
                    });
                }
            });
        }

        // Initial load check
        lazyLoad();

        // Event listener for scroll to check for lazy-load items
        document.addEventListener('scroll', lazyLoad);
    });
