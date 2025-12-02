// Dynamic background elements
document.addEventListener('DOMContentLoaded', function() {
    const bg = document.querySelector('.bg-animation');
    if (!bg) return;

    // Create additional stars
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = Math.random() * 2 + 'px';
        star.style.height = star.style.width;
        star.style.background = '#fff';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.boxShadow = '0 0 4px #fff';
        bg.appendChild(star);
    }
});
