document.addEventListener('DOMContentLoaded', () => {
    // Анимация появления текста
    const heroText = document.querySelector('.fade-up');
    setTimeout(() => {
        heroText.classList.add('visible');
    }, 300);

    // Анимация счетчиков
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const speed = 200; // Чем выше число, тем медленнее
            
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 15);
            } else {
                counter.innerText = target + (target > 100 ? '+' : '');
            }
        };

        updateCount();
    });
});