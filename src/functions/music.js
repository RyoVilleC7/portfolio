import musicFile from '../assets/music/menuettm.mp3'
const music = new Audio(musicFile);

music.addEventListener("ended", function () {
    music.currentTime = 0;
    music.play();
  }, false);