const menu = document.querySelector(".sidebar");

menu.addEventListener('mouseenter', () => {
    document.querySelector(".textNav").classList.add('visible');
})

menu.addEventListener('mouseleave', () => {
    document.querySelector('.textNav').classList.remove('visible');
})

