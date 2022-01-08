const indicator = document.querySelector('.indicator');
const links = document.querySelectorAll('ul a');

links.forEach(link => {
  link.addEventListener('click' , e => {
    indicator.style.width = `${e.target.offsetWidth}px`;
    indicator.style.left = `${e.target.offsetLeft}px`;
  })
});
