window.addEventListener('load', (event) => {
  let menuOpen = document.getElementsByTagName('menu-open')[0]
  let menu = document.getElementsByTagName('menu')[0]
  menuOpen.addEventListener('click', (event) => {
    menu.classList.toggle('close');
  });
});