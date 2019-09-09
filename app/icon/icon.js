window.addEventListener('load', (event) => {
  let request = new XMLHttpRequest();

  let icons = [...document.getElementsByTagName('icon')];
  icons.forEach(icon => {
    let name = icon.attributes.name;
    if (name !== undefined) {
      name = name.value;
      let type = icon.attributes.type;
      if (type === undefined) {
        type = 'outlined';
      } else {
        type = type.value;
      }
      request.open('GET', `./icon/${name}_${type}.svg`, false);
      request.send(null);
      
      if (request.status === 200) {
        icon.innerHTML = request.responseText;
      }
    }
  });
});

