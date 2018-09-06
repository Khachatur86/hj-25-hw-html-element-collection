(function() {
  let wrapElement = document.documentElement.getElementsByClassName('wrapper-dropdown')[0];
  function showMenu() {
    this.classList.toggle('active');
  }
  wrapElement.onclick = showMenu
})();
