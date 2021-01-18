function boot() {
  var url = 'interface.html';
  let randucySelector = document.getElementById('randucySelector');
  let ducySelector = document.getElementById('ducySelector');

  if (randucySelector.checked === true || ducySelector.checked === true) {
    url += '?'
  }

  if (randucySelector.checked === true) {
    url += 'randucy=true'
  }

  if (randucySelector.checked === true && ducySelector.checked === true) {
    url += '&'
  }

  if (ducySelector.checked === true) {
    url += 'ducy=true'
  }

  console.log(url)
}

document.getElementById('submit').addEventListener('click', boot)
