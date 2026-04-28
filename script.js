const slider = document.querySelector('.product-slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function getScrollAmount() {
    return slider.querySelector('.product-card').offsetWidth + 10;
}

nextBtn.onclick = () => {
    slider.scrollBy({
        left: getScrollAmount() * 2, // change 2 → how many cards per click
        behavior: 'smooth'
    });
};

prevBtn.onclick = () => {
    slider.scrollBy({
        left: -getScrollAmount() * 2,
        behavior: 'smooth'
    });
};

function updateButtons() {
    const maxScroll = slider.scrollWidth - slider.clientWidth;

    prevBtn.style.display = slider.scrollLeft <= 0 ? 'none' : 'block';
    nextBtn.style.display = slider.scrollLeft >= maxScroll ? 'none' : 'block';
}

slider.addEventListener('scroll', updateButtons);
window.addEventListener('resize', updateButtons);
updateButtons();