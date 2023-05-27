document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function() {
    document.querySelector("header").classList.toggle("open");
  });

  var headerLinks = document.getElementsByClassName("header__link");
  for (var i = 0; i < headerLinks.length; i++) {
    headerLinks[i].addEventListener("click", function() {
      document.querySelector("header").classList.toggle("open");
    });
  }
  const searchWrapper = document.querySelector('.header__search-wrapper');
  const search = document.querySelector('.header__btn--open');
  const clear = document.querySelector('.header__btn--close');

  search.onclick = function () {
    searchWrapper.classList.toggle('active');
    document.getElementById('headerSearch').value = '';
  }

  clear.onclick = function () {
    document.getElementById('headerSearch').value = '';
  }

  const swiper = new Swiper('.swiper', {

    loop: false,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    a11y: {
      paginationBulletMessage: 'Тут название слайда {{index}}',
    },
    speed: 1000,
    autoplay: {
      delay: 3000, // Задержка между автоматическим переключением слайдов (в миллисекундах)
      disableOnInteraction: false,
    },
  });

  const workingItem = document.querySelectorAll('.working__item');
  const workingContent = document.querySelectorAll('.working__wrapper');

  for (let item of workingItem) {

    item.addEventListener('click', function() {

      for (let element of workingContent) {
        element.classList.add('hidden')
      }

      const content = document.querySelector('#' + item.dataset.tab);
      content.classList.remove('hidden')

    })
  };

  new Accordion('.accordion-container');

});
