const app = () => {
  const song = document.querySelector('.song');
  const play = document.querySelector('.play');
  const outline = document.querySelector('.moving-outline circle');
  const video = document.querySelector('.vid-container video');

  // Sounds
  const sounds = document.querySelectorAll('.sound-picker button');
  // Time Display
  const timeDisplay = document.querySelector('.time-display');
  // Outline Total Length
  const outlineLength = outline.getTotalLength();
  // Duration
  let fakeDuration = 600;

  outline.style.strokeDasharray = outlineLength;
  outline.style.strokeDashoffset = outlineLength;

  // Play Sound
  play.addEventListener('click', () => {
    checkPlaying(song);
  });

  // Functions

  // Play and Pause Audio
  const checkPlaying = (song) => {
    if (song.paused) {
      song.play();
      video.play();
      play.src = './svg/pause.svg';
    } else {
      song.pause();
      video.pause();
      play.src = './svg/play.svg';
    }
  };
};

app();
