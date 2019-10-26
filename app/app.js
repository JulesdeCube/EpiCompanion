window.addEventListener('load', (event) => {
  let menuOpen = document.getElementsByTagName('menu-open')[0]
  let menu = document.getElementsByTagName('menu')[0]
  menuOpen.addEventListener('click', (event) => {
    menu.classList.toggle('close');
  });

  let menuItems = [...document.getElementsByTagName('menu-item')];
  let content = document.querySelector('content > iframe');
  menuItems.forEach(item => {
    if (item.attributes.page !== undefined) {
      item.addEventListener('click', (event) => {
          selectItem(item)
      });
    }
  });

  function disableItems() {
    menuItems.forEach(item => {
      item.classList.remove('activ');
    });
  }

  function selectItem(item) {
    let page = item.attributes.page.value;
    content.setAttribute('src', `./page/${page}/${page}.html`);
    disableItems();
    item.classList.add('activ');
  }

  selectItem(menuItems[0]);

});