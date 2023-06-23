document.addEventListener("DOMContentLoaded", function() {



  /*HEADER*/
  document.getElementById("burger").addEventListener("click", function() {
    document.querySelector("header").classList.toggle("burger-open");
  });

  var headerLinks = document.getElementsByClassName("header__link");
  for (var i = 0; i < headerLinks.length; i++) {
    headerLinks[i].addEventListener("click", function() {
      document.querySelector("header").classList.toggle("burger-open");
    });
  }

  document.querySelector('.header__search-open').addEventListener('click', function() {
    document.querySelector('.header__search-wrapper').classList.toggle('search-active');
  });

  document.querySelector('.header__clear').addEventListener('click', function() {
    document.querySelector('.header__search-wrapper').classList.remove('search-active');
  });


  let header = document.querySelector('.js-header');
  let headerH = document.querySelector('.js-header').clientHeight;

  document.onscroll = function () {
    let scroll = window.scrollY;

    if (scroll > headerH + 120) {
      header.classList.add('fixed');
      document.body.style.paddingTop = headerH + 'px';
    } else {
      header.classList.remove('fixed');
      document.body.removeAttribute('style')
    }
  }

  const headerBtns = document.querySelectorAll('.header__btn');
  const drops = document.querySelectorAll('.header__dropdown-list');
  headerBtns.forEach(el => {
    el.addEventListener('click', (e) => {
      let clickedBtn = e.currentTarget;
      let drop = clickedBtn.closest('.header__item--second').querySelector('.header__dropdown-list');

      drops.forEach(el => {
        if (el !== drop) {
          el.classList.remove('dropdown--active');
        }
      });

      drop.classList.toggle('dropdown--active');
    });
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.header__item--second')) {
      drops.forEach(el => {
          el.classList.remove('dropdown--active');
      });
    }
  });


  /*SWIPER HERO*/
  const swiper = new Swiper('.hero__swiper', {

    loop: false,
    a11y: {
      paginationBulletMessage: 'Тут название слайда {{index}}',
    },
    speed: 1500,
    autoplay: {
      delay: 3000, // Задержка между автоматическим переключением слайдов (в миллисекундах)
      disableOnInteraction: false,
    },
  });

  /*GALLERY*/
  const element = document.querySelector('.js-choice');
  const choices = new Choices(element, {
    silent: false,
    searchEnabled: false,
    searchChoices: false,
    itemSelectText: '',
  });




  const swiperG = new Swiper('.gallery__swiper', {

    direction: 'horizontal',

    loop: false,

    speed: 1000,

    pagination: {
      el: '.gallery__swiper-pagination',
      type: 'fraction',
    },




    // Navigation arrows
    navigation: {
      nextEl: '.gallery__swiper-button-next',
      prevEl: '.gallery__swiper-button-prev',
    },



    breakpoints: {
      1: {
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 20
      },
      830: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 34
      },
      1750: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 50,
      },

    }




  });

/*POP-UP */
document.querySelector('.gallery__swiper-slide1').addEventListener('click', function() {
  document.querySelector('.gallery__pop-up').classList.add('pop-up-open');
});

document.querySelector('.gallery__swiper-slide2').addEventListener('click', function() {
  document.querySelector('.gallery__pop-up').classList.add('pop-up-open');
});

document.querySelector('.gallery__swiper-slide3').addEventListener('click', function() {
  document.querySelector('.gallery__pop-up').classList.add('pop-up-open');
});

document.querySelector('.gallery__swiper-slide4').addEventListener('click', function() {
  document.querySelector('.gallery__pop-up').classList.add('pop-up-open');
});

document.querySelector('.gallery__swiper-slide5').addEventListener('click', function() {
  document.querySelector('.gallery__pop-up').classList.add('pop-up-open');
});

document.querySelector('.gallery__swiper-slide6').addEventListener('click', function() {
  document.querySelector('.gallery__pop-up').classList.add('pop-up-open');
});

document.querySelector('.pop-up-close').addEventListener('click', function() {
  document.querySelector('.gallery__pop-up').classList.remove('pop-up-open');
});


//Закрыть модальное окно при клике на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelector('.gallery__pop-up').classList.remove('pop-up-open')
  }
})

// Закрыть модальное окно при клике вне его
document.querySelector('.gallery__pop-up .pop-up__content').addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.querySelector('.gallery__pop-up').addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('pop-up-open');
})

// ACCORDEON
new Accordion('.accordion-container');





document.getElementById('DomGir').addEventListener('click', function () {
  document.getElementById('DomGirContainer').classList.add('catalog-active');
  document.getElementById('noInfo').classList.remove('catalog-active');
})

const catalogBtns = document.querySelectorAll('.accordion__link--name');


catalogBtns.forEach(el => {
  if (el !== document.getElementById('DomGir')) {
    el.addEventListener('click', function () {
      document.getElementById('noInfo').classList.add('catalog-active');
      document.getElementById('DomGirContainer').classList.remove('catalog-active')
    })
  };

});

const anchors = document.querySelectorAll('a[href*="#');

for (let anchor of anchors) {
  anchor.addEventListener('click', function(event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};


//EVENTS SWIPER

const swiperE = new Swiper('.events__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,


  // Navigation arrows
  navigation: {
    nextEl: '.events__swiper-button-next',
    prevEl: '.events__swiper-button-prev',
  },

  pagination: {
    el: '.events__swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  breakpoints: {
    1: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10
    },
    600: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 27
    },
    1024: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 40
    },
    1600: {
      spaceBetween: 40,
      slidesPerGroup: 1,
      slidesPerView: 3,
    }
  }


});

const swiperP = new Swiper('.projects__swiper', {
  // Optional parameters
  direction: 'horizontal',

  loop: false,


  // Navigation arrows
  navigation: {
    nextEl: '.projects__swiper-button-next',
    prevEl: '.projects__swiper-button-prev',
  },


  breakpoints: {
    1: {
      slidesPerView: 1
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 34
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    1800: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }






});

/*VALIDATION*/

const validator = new JustValidate('.contacts__form');

validator
  .addField('.contacts__name-input', [
    {
      rule: 'required',
      errorMessage: 'Заполните форму'
    },
  ])
  .addField('.contacts__tel-input', [
    {
      rule: 'required',
      errorMessage: 'Заполните форму'
    },
    {
      rule: 'number',
      errorMessage: 'Недопустимый формат'
    }
  ]);



//MAP

    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [60.45, 22.27],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 13
        });

      // Создание геообъекта с типом точка (метка).
      var myGeoObject = new ymaps.GeoObject({
          geometry: {
              type: "Point", // тип геометрии - точка
              coordinates: [60.44266026257184,22.252307686611456] // координаты точки
          },
          preset:'islands#violetCircleDotIcon'
      });

      // Размещение геообъекта на карте.
      myMap.geoObjects.add(myGeoObject);




    };











});
