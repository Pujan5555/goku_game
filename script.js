let play = document.querySelector('.play');
let reset = document.querySelector('.reset');
let img = document.querySelector('.goku-img');
let enemy = document.querySelector('.goku-rival');
let kaboom = document.querySelector('.blast');
let slide = document.querySelector('.slide-goku');
play.addEventListener('click', (e) => {
    let counter;
    img.classList.add('toggle-goku');
    enemy.classList.add('toggle-goku');
    for (counter = 0; counter <= 330; counter++) {
        img.style.transform = `translateX(${counter}%)`;
        enemy.style.transform = `translateX(-${counter}%)`;
    }
    setTimeout((e) => {
        img.classList.add('vanish');
        enemy.classList.add('vanish');
        kaboom.classList.remove('blast');
        slide.style.justifyContent = "center";
    }, 3000);
});
reset.addEventListener('click', (e) => {
    img.style.transform = "translateX(0)";
    enemy.style.transform = "translateX(0)";
    img.classList.remove('toggle-goku');
    enemy.classList.remove('toggle-goku');
    img.classList.remove('vanish');
    enemy.classList.remove('vanish');
    slide.style.justifyContent = "space-between";
    kaboom.classList.add('blast');
});