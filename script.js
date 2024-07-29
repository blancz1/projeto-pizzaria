let show = true;

const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    menuContent.classList.toggle('on', show);
    show= !show;
})

document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.querySelector('.local');
    const expandableImage = document.querySelector('.expandable-image');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

   

    overlay.addEventListener('click', function () {
        imageContainer.classList.remove('expanded');
        overlay.classList.remove('show');
    });
});
