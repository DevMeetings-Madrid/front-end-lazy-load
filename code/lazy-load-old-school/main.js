let lazyImages = [...document.querySelectorAll('.lazy-image')];

function lazyLoad() {
    lazyImages.forEach(image => {
        let topDistance = image.parentElement.offsetTop;
        if (topDistance < window.innerHeight + window.pageYOffset + 100) {
            image.src = image.dataset.src;
            image.onload = () => image.classList.add('loaded');
        }
    });
};

lazyLoad();

window.addEventListener('scroll', throttle(lazyLoad, 16));
window.addEventListener('resize', throttle(lazyLoad, 16));