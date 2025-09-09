function moveSlide(direction, container) {
    const wrapper = container.querySelector('.carousel-wrapper');
    const slides = wrapper.querySelectorAll('.carousel-slide');
    
    if (slides.length === 0) return;
    
    const slideWidth = slides[0].offsetWidth;
    const currentTransform = window.getComputedStyle(wrapper).transform;
    
    let currentPosition = 0;
    if (currentTransform !== 'none') {
        const matrix = new DOMMatrixReadOnly(currentTransform);
        currentPosition = matrix.m41;
    }

    const currentIndex = Math.abs(currentPosition / slideWidth);

    let newIndex = currentIndex + direction;

    if (newIndex >= slides.length) {
        newIndex = 0;
        wrapper.style.transition = 'none';
        wrapper.style.transform = 'translateX(0)';
        
     
        wrapper.offsetHeight;
        wrapper.style.transition = 'transform 0.5s ease-in-out';
        return;
    } else if (newIndex < 0) {
        newIndex = slides.length - 1;
        const lastPosition = -(slideWidth * (slides.length - 1));
        
        wrapper.style.transition = 'none';
        wrapper.style.transform = `translateX(${lastPosition}px)`;
        
        wrapper.offsetWidth;
        wrapper.style.transition = 'transform 0.5s ease-in-out';
        return;
    }

    const newPosition = -(newIndex * slideWidth);
    wrapper.style.transform = `translateX(${newPosition}px)`;
}

window.addEventListener('resize', () => {
    document.querySelectorAll('.carousel-wrapper').forEach(wrapper => {
        wrapper.style.transition = 'none';
        wrapper.style.transform = 'translateX(0)';
        wrapper.offsetWidth; 
        wrapper.style.transition = 'transform 0.5s ease-in-out';
    });
});