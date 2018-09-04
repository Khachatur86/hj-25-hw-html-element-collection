(function () {

  const drumList = document.getElementsByClassName('drum-kit__drum');

  for (let drum of drumList) {
    drum.onclick = function () {
      const audioElem = this.getElementsByTagName('audio')[0];
      audioElem.play();
    }
  }

})();