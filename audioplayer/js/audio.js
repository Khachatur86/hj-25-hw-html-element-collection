//Pseudocode

// Let's find the buttons Play, Stop, Pause, Next, Back

(function() {
  // Let's find the buttons Play, Stop, Pause, Next, Back
  const player = document.getElementsByClassName('mediaplayer')[0],
        audio = player.getElementsByTagName('audio')[0],
        title = player.getElementsByClassName('title')[0],
        playPauseBtn = player.getElementsByClassName('playstate')[0],
        stopBtn = player.getElementsByClassName('stop')[0],
        nextBtn = player.getElementsByClassName('next')[0],
        backBtn = player.getElementsByClassName('back')[0],
        songsList = ['LA Chill Tour.mp3', 
                 'LA Fusion Jam.mp3', 
                 'This is it band.mp3'];

  
  let songIndex = 0;

  // Set current song
  
  function setCurrentSong() {
    audio.src = `./mp3/${songsList[songIndex]}`;
    //add atribute appropriate title
    title.title = songsList[songIndex];
    if (player.classList.contains('play')) {
        audio.play();
    };
  };

  // playPause button function realisation 
  playPauseBtn.onclick = () => {
    if (player.classList.contains('play')) {
      audio.pause();}
      else {
        audio.play();
      };
      player.classList.toggle('play');
  };
  
  // Back Button function realisation
  
  backBtn.onclick = () => {
    if (songIndex <= 0) {
      songIndex = 0;
     } else {
     songIndex--}
    setCurrentSong();
  };


  // Stop Button functipn realisation
  
  stopBtn.onclick = () => {
      player.classList.remove('play');
      audio.pause();
      audio.currentTime = 0;
  };
  
  // Next Button function realisation
  
  nextBtn.onclick = () => {
    if (songIndex >= songsList.length - 1) { // (songIndex == songsList.length - 1) this condition enough
      songIndex = 0;
    } else {
      songIndex++} 
    setCurrentSong();
  };
  
})()

