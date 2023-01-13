const clouds = document.querySelectorAll('.cloud'),
    boat = document.querySelector('.boat'),
    fantasy = document.querySelector('.fantasy');
    let title = document.querySelector('.header__title');
let text = title.innerHTML;
title.innerHTML = '';

title2();

function title2(i = 0) {

    setTimeout(() => {
        title.innerHTML += text.charAt(i)
        i++
        if (i < text.length) {
            title2(i)
        }
    }, 200);

}

window.addEventListener('scroll', function (e) {
    boat.style.transform = `translateX(${this.scrollY}px)`
    clouds.forEach(el => {
        let speed = el.getAttribute('data-speed')
        el.style.transform = `translateX(${this.scrollY * speed}px)`
    })
    fantasy.style.objectPosition = `0 ${this.scrollY / 10}%`
})

const paralax__box = document.querySelector('.paralax__box'),
    layer = document.querySelectorAll('.layer')

paralax__box.addEventListener('mousemove', function (e) {
    layer.forEach(el => {
        let speed = el.getAttribute('data-speed'),
            x = (e.pageX * speed) / 100,
            y = (e.pageY * speed) / 100
        el.style.transform = `translate(${x}px, ${y}px)`
    })
})

let timer = document.querySelector('.timer'),
    timer__num = document.querySelectorAll('.timer__num');

window.addEventListener('scroll', function onScroll(e) {
    if (window.scrollY + window.innerHeight >= timer.offsetTop) {
        timer__num.forEach(el => {
            const timerAttr = el.getAttribute('data-timer')
            function scrollCount(k = 0) {
                el.innerHTML = k
                k++
                if (k <= timerAttr) {
                    setTimeout(() => {
                        scrollCount(k)
                    }, 20);
                }
            }
            scrollCount()
        })
        window.removeEventListener('scroll', onScroll)
    }
})

const box__inp = document.querySelector('.box__inp'),
      box__btn = document.querySelector('.box__btn'),
      list = document.querySelector('.list');
box__btn.addEventListener('click', () => {
    if (box__inp.value !== '') {
        add()
    }
})

function add() {
    const boxInpValue = box__inp.value,
          list__item = document.createElement('li'),
          button = document.createElement('button');
    button.classList.add('list__btn')
    button.classList.add('remove')
    list__item.classList.add('list__item')
    list.append(list__item)
    list__item.innerHTML = boxInpValue
    list__item.append(button)
    button.innerHTML = 'X'
    box__inp.value = ''
    let remove = document.querySelectorAll('.remove')
    remove.forEach(e => {
        e.addEventListener('click', function() {
            const parent = this.closest('.list__item').remove()
            
        })
    })
}