const counterUp = window.counterUp.default;

const callback = (entries) => {
  entries.forEach((entry) => {
    const el = entry.target;
    if (entry.isIntersecting && !el.classList.contains('is-visible')) {
      counterUp(el, el2, el3, el4, {
        duration: 2000,
        delay: 16,
        time: 1000,
      });
      el.classList.add('is-visible');
    }
  });
};

const IO = new IntersectionObserver(callback, { threshold: 1 });
const IO2 = new IntersectionObserver(callback, { threshold: 1 });
const IO3 = new IntersectionObserver(callback, { threshold: 1 });
const IO4 = new IntersectionObserver(callback, { threshold: 1 });

const el = document.querySelector('.counter');
const el2 = document.querySelector('.branchcounter');
const el3 = document.querySelector('.trainercounter');
const el4 = document.querySelector('.lastcounter');

IO.observe(el);
IO2.observe(el2);
IO3.observe(el3);
IO4.observe(el4);
