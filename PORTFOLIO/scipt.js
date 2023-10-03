document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");

    // Smooth scroll function
    const smoothScroll = (target) => {
        const targetId = target.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        const offsetTop = targetSection.offsetTop;
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
        });
    };

    // Highlight the active link based on scroll position
    const highlightActiveLink = () => {
        let fromTop = window.scrollY + 60; // Adjust the offset as needed

        navLinks.forEach((link) => {
            const section = document.querySelector(link.getAttribute("href"));
            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    };

    // Add click event listeners to nav links
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            smoothScroll(link);
        });
    });

    // Add scroll event listener to highlight active link
    window.addEventListener("scroll", highlightActiveLink);
});