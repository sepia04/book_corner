const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3000,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

const buttonPlus = document.querySelectorAll(".plus");
const showFilter = document.querySelectorAll(".filter-choose");
const showBtn = document.querySelectorAll(".filter-btn");

let k = 0;

for (let i = 0; i < buttonPlus.length; i++) {
  buttonPlus[i].addEventListener('click', (event) => {
    if (buttonPlus[i].classList.contains("active")) {
      buttonPlus[i].classList.remove("active");
      showFilter[i].classList.remove("active");
      showBtn[i].classList.remove("active");
      k--;
      console.log(k);
    } else {
      buttonPlus[i].classList.add("active");
      showFilter[i].classList.add("active");
      showBtn[i].classList.add("active");
      k++;
      console.log(k);
    }
  });
}
