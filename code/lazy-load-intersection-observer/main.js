document.addEventListener("DOMContentLoaded", () => {
    let lazyImages = [...document.querySelectorAll(".lazy-image")];

    let lazyImageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                let lazyImage = entry.target;
                lazyImage.src = lazyImage.dataset.src;
                lazyImageObserver.unobserve(lazyImage);
                lazyImage.onload = () => lazyImage.classList.add('loaded');
            }
        });
    });

    lazyImages.forEach((lazyImage) => {
        lazyImageObserver.observe(lazyImage);
    });
});