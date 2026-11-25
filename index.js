document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello From index.js!');
    const heading = document.querySelector('h1');
    heading.addEventListener('click', () => {
        heading.style.color = '#e74c3c';
    });
});