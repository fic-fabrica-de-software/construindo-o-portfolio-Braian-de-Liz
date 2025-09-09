function moveSlide(direction, container) {
    const wrapper = container.querySelector('.carousel-wrapper');
    const slides = wrapper.querySelectorAll('.carousel-slide');
    
    if (slides.length === 0) return;
    
    // Força o cálculo da largura real
    const slideWidth = slides[0].offsetWidth;
    const currentTransform = window.getComputedStyle(wrapper).transform;
    
    let currentPosition = 0;
    if (currentTransform !== 'none') {
        const matrix = new DOMMatrixReadOnly(currentTransform);
        currentPosition = matrix.m41;
    }

    // Calcula o índice atual
    const currentIndex = Math.abs(currentPosition / slideWidth);
    let newIndex = currentIndex + direction;

    // Lógica de navegação infinita
    if (newIndex >= slides.length) {
        // Volta pro primeiro
        newIndex = 0;
        wrapper.style.transition = 'none';
        wrapper.style.transform = 'translateX(0)';
        
        // Força reflow
        wrapper.offsetWidth;
        wrapper.style.transition = 'transform 0.5s ease-in-out';
        return;
    } else if (newIndex < 0) {
        // Vai pro último
        newIndex = slides.length - 1;
        const lastPosition = -(slideWidth * (slides.length - 1));
        
        wrapper.style.transition = 'none';
        wrapper.style.transform = `translateX(${lastPosition}px)`;
        
        wrapper.offsetWidth;
        wrapper.style.transition = 'transform 0.5s ease-in-out';
        return;
    }

    // Movimento normal
    const newPosition = -(newIndex * slideWidth);
    wrapper.style.transform = `translateX(${newPosition}px)`;
}

// Reset ao redimensionar com debounce
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        document.querySelectorAll('.carousel-wrapper').forEach(wrapper => {
            wrapper.style.transition = 'none';
            wrapper.style.transform = 'translateX(0)';
            wrapper.offsetWidth;
            wrapper.style.transition = 'transform 0.5s ease-in-out';
        });
    }, 100);
});