window.addEventListener('load', () => {
    let box = document.querySelectorAll('.display .display-r .list-item');
    for (let i = 2; i < box.length; i++) {
        box[i].addEventListener('mouseenter', () => {
            box[1].classList.add('active');
        })
        box[i].addEventListener('mouseleave', () => {
            box[1].classList.remove('active');
        })
    }
})