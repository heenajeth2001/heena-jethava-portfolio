document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            const target = this.getAttribute("data-tab");

            tabs.forEach(t => t.classList.remove("border-b-teal-600"));
            this.classList.add("border-b-teal-600");

            contents.forEach(content => {
                content.classList.remove("active");
                if (content.getAttribute("id") === target) {
                    content.classList.add("active");
                }
            });
        });
    });
});