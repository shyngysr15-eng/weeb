document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.fade-in');

    // Плавное появление элементов один за другим
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, 200 * index); // Задержка для каждой следующей карточки
    });

    // Интерактив: эффект "подсветки" карточки при наведении
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = '#2d3e33';
        });
    });
});