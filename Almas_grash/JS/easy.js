document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    
    // Initial check on load
    setTimeout(revealOnScroll, 100);

    // Interactive button effect
    const btn = document.querySelector('.btn-book');
    btn.addEventListener('click', () => {
        btn.innerText = "Processing...";
        setTimeout(() => {
            alert("Thank you! Our guide will contact you shortly.");
            btn.innerText = "Book a Guide";
        }, 1500);
    });
});