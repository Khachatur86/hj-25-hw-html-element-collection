(function() {
  let wrapElement = document.documentElement.getElementsByTagName('div')[0];
  function showMenu() {
    this.classList.toggle('active');
  }
  wrapElement.onclick = showMenu
})();