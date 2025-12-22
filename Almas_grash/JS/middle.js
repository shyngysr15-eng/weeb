document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load

    // Special interaction for Essentials list
    const listItems = document.querySelectorAll('.essentials li');
    listItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });

    // Booking Button Animation
    const btn = document.querySelector('.btn-book');
    btn.addEventListener('mouseenter', () => {
        btn.innerText = "Check availability →";
    });
    btn.addEventListener('mouseleave', () => {
        btn.innerText = "Reserve a Guide";
    });
});