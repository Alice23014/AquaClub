//Tabs First Ages
const tabButtonsFirst = document.querySelectorAll('.ages-slider__text');
const tabContentsFirst = document.querySelectorAll('.ages-inner__first-slide');
const prevArrowFirst = document.querySelector('.ages-prev-arrow-first');
const nextArrowFirst = document.querySelector('.ages-next-arrow-first');
let currentTabIndexFirst = 0;

function showTabFirst(index) {
    tabButtonsFirst.forEach(btn => btn.classList.remove('ages-active'));
    tabContentsFirst.forEach(content => content.style.display = 'none');

    tabButtonsFirst[index].classList.add('ages-active');
    tabContentsFirst[index].style.display = 'block';
    currentTabIndexFirst = index;

    if (currentTabIndexFirst === 0) {
        prevArrowFirst.style.pointerEvents = 'none';
        prevArrowFirst.style.opacity = '0.5';
    } else {
        prevArrowFirst.style.pointerEvents = 'auto';
        prevArrowFirst.style.opacity = '1';
    }

    if (currentTabIndexFirst === tabButtonsFirst.length - 1) {
        nextArrowFirst.style.pointerEvents = 'none';
        nextArrowFirst.style.opacity = '0.5';
    } else {
        nextArrowFirst.style.pointerEvents = 'auto';
        nextArrowFirst.style.opacity = '1';
    }
}

prevArrowFirst.addEventListener('click', () => {
    if (currentTabIndexFirst > 0) {
        currentTabIndexFirst--;
        showTabFirst(currentTabIndexFirst); 
    }
});

nextArrowFirst.addEventListener('click', () => {
    if (currentTabIndexFirst < tabButtonsFirst.length - 1) {
        currentTabIndexFirst++;
        showTabFirst(currentTabIndexFirst);
    }
});

tabButtonsFirst.forEach((button, index) => {
    button.addEventListener('click', () => {
        showTabFirst(index);
    });
});

showTabFirst(currentTabIndexFirst);


//Tabs Second General

const tabButtonsSecond = document.querySelectorAll('.general-text');
const tabContentsSecond = document.querySelectorAll('.general-slider__items');
const prevArrowSecond = document.querySelector('.ages-prev-arrow-second');
const nextArrowSecond = document.querySelector('.ages-next-arrow-second');
let currentTabIndexSecond = 0;

function showTabSecond(index) {
    tabButtonsSecond.forEach(btn => btn.classList.remove('general-active'));
    tabContentsSecond.forEach(content => content.style.display = 'none');

    tabButtonsSecond[index].classList.add('general-active');
    tabContentsSecond[index].style.display = 'flex';
    currentTabIndexSecond = index;

    if (currentTabIndexSecond === 0) {
        prevArrowSecond.style.pointerEvents = 'none';
        prevArrowSecond.style.opacity = '0.5';
    } else {
        prevArrowSecond.style.pointerEvents = 'auto';
        prevArrowSecond.style.opacity = '1';
    }

    if (currentTabIndexSecond === tabButtonsSecond.length - 1) {
        nextArrowSecond.style.pointerEvents = 'none';
        nextArrowSecond.style.opacity = '0.5';
    } else {
        nextArrowSecond.style.pointerEvents = 'auto';
        nextArrowSecond.style.opacity = '1';
    }
}

prevArrowSecond.addEventListener('click', () => {
    if (currentTabIndexSecond > 0) {
        currentTabIndexSecond--;
        showTabSecond(currentTabIndexSecond); 
    }
});

nextArrowSecond.addEventListener('click', () => {
    if (currentTabIndexSecond < tabButtonsSecond.length - 1) {
        currentTabIndexSecond++;
        showTabSecond(currentTabIndexSecond);
    }
});

tabButtonsSecond.forEach((button, index) => {
    button.addEventListener('click', () => {
        showTabSecond(index);
    });
});

showTabSecond(currentTabIndexSecond);


//Slider 1 About

new Swiper ('.about-inner__slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        hiddenClass: 'swiper-button-hidden', 
        disabledClass: 'swiper-button-disabled' 
    },
    scrollbar: {
        el: '.about-slider__rectangle',
        draggable: true,
    }, 
    slidesPerView: 3
})


//Slider 2 Gallery

const slidesFirst = document.querySelectorAll('.slider-photo');
const prevFirst = document.querySelector('.gallery-arrow__left');
const nextFirst = document.querySelector('.gallery-arrow__right');

let slideIndexFirst = 0;

showSlidesFirst(slideIndexFirst); // Исправлено: slideIndexSecond

function showSlidesFirst(n) {
    if (n >= slidesFirst.length) {
        slideIndexFirst = 0; // Исправлено: slideIndexSecond
    }

    if (n < 0) {
        slideIndexFirst = slidesFirst.length - 1; // Исправлено: slidesSecond
    }

    slidesFirst.forEach(item => item.style.display = 'none'); // Исправлено: slidesSecond
    slidesFirst[slideIndexFirst].style.display = 'block'; // Исправлено: slidesSecond
}

function plusSlidesFirst(n) {
    showSlidesFirst(slideIndexFirst += n); // Исправлено: slideIndexFirst
}

prevFirst.addEventListener('click', () => { // Исправлено: prevSecond
    plusSlidesFirst(-1);
});

nextFirst.addEventListener('click', () => { // Исправлено: nextSecond
    plusSlidesFirst(1);
});


//Slider 3 Photos

const slidesSecond = document.querySelectorAll('.photos-inner__img');
const prevSecond = document.querySelector('.photos-arrow__left');
const nextSecond = document.querySelector('.photos-arrow__right');

let slideIndexSecond = 0;

showSlides(slideIndexSecond); // Исправлено: slideIndexSecond

function showSlides(n) {
    if (n >= slidesSecond.length) {
        slideIndexSecond = 0; // Исправлено: slideIndexSecond
    }

    if (n < 0) {
        slideIndexSecond = slidesSecond.length - 1; // Исправлено: slidesSecond
    }

    slidesSecond.forEach(item => item.style.display = 'none'); // Исправлено: slidesSecond
    slidesSecond[slideIndexSecond].style.display = 'block'; // Исправлено: slidesSecond
}

function plusSlides(n) {
    showSlides(slideIndexSecond += n); // Исправлено: slideIndexSecond
}

prevSecond.addEventListener('click', () => { // Исправлено: prevSecond
    plusSlides(-1);
});

nextSecond.addEventListener('click', () => { // Исправлено: nextSecond
    plusSlides(1);
});




//Slider 4 Places




new Swiper ('.places-inner__inner', {
    loop: true,
    autoplay: {
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },

    speed: 1500,

    slidesPerView: 4
})


// const placesInner = document.querySelector('.places-inner__inner');
// const placesInnerWrapper = document.querySelector('.places-inner__wrapper');
// const images = document.querySelectorAll('.places-inner__img');
// const slideGap = 20; // Разрыв между слайдами в пикселях

// // Копируем изображения, чтобы создать бесконечный эффект
// images.forEach((image) => {
//     const clone = image.cloneNode(true);
//     placesInnerWrapper.appendChild(clone);
// });

// // Получаем ширину одного слайда, включая разрыв
// const slideWidth = images[0].offsetWidth + slideGap;

// // Устанавливаем продолжительность анимации в зависимости от количества слайдов и их размера
// const animationDuration = (slideWidth * images.length) / 100; // 100 пикселей в секунду
// placesInner.style.animationDuration = `${animationDuration}s`;

// // Функция для обновления видимости слайдов
// function updateSlides() {
//     if (placesInner.scrollLeft === placesInner.scrollWidth - placesInner.clientWidth) {
//         placesInner.scrollLeft = 0;
//     }
// }

// // Добавляем обработчик события для обновления слайдов
// placesInner.addEventListener('scroll', updateSlides);


Fancybox.bind("[data-fancybox]", {
  });


//   Parallax
const scene = document.getElementById('scene');
const parallaxInstance = new Parallax(scene);