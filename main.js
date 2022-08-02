const app = () => {
  const song = document.querySelector('.song');
  const play = document.querySelector('.play');
  const outline = document.querySelector('.moving-outline circle');
  const video = document.querySelector('.vid-container video');
  const changeText = document.querySelector('.desc-change');
  const homeBtn = document.querySelector('.home-btn');

  // Sounds
  const sounds = document.querySelectorAll('.sound-picker button');
  // Time Display
  const timeDisplay = document.querySelector('.time-display');
  const timeSelect = document.querySelectorAll('.time-select button');
  // Outline Total Length
  const outlineLength = outline.getTotalLength();
  // Duration
  let fakeDuration = 600;
  // Hide Home Button
  homeBtn.style.visibility = 'hidden';

  outline.style.strokeDasharray = outlineLength;
  outline.style.strokeDashoffset = outlineLength;

  // Pick Different Sounds
  sounds.forEach((sound) => {
    sound.addEventListener('click', function () {
      song.src = this.getAttribute('data-sound');
      video.src = this.getAttribute('data-video');
      checkPlaying(song);
    });
  });

  // Play Sound
  play.addEventListener('click', () => {
    checkPlaying(song);
  });

  // Go To LFL Homepage
  homeBtn.addEventListener('click', () => {
    window.location.href = 'https://www.leftfieldlabs.com/';
  });

  // Choose Song Duration
  timeSelect.forEach((option) => {
    option.addEventListener('click', function () {
      fakeDuration = this.getAttribute('data-time');
      timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
        fakeDuration % 60
      )}0`;
    });
  });

  // Functions

  // Play and Pause Audio
  const checkPlaying = (song) => {
    if (song.paused) {
      song.play();
      video.play();
      play.src = './svg/pause.svg';
      changeText.textContent = `Breath in and out to relax the mind.`;
    } else {
      song.pause();
      video.pause();
      changeText.textContent = `You can't be done just yet. Keep going.`;
      play.src = './svg/play.svg';
    }
  };

  // Animate Circle
  song.ontimeupdate = () => {
    let currentTime = song.currentTime;
    let elapsed = fakeDuration - currentTime;
    let seconds = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60);

    // Animate Circle
    let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
    outline.style.strokeDashoffset = progress;

    // Animate Text
    timeDisplay.textContent = `${minutes}:${seconds}`;

    if (currentTime >= fakeDuration) {
      song.pause();
      song.currentTime = 0;
      play.src = './svg/play.svg';
      video.pause();
      changeText.textContent = `Congratulations, now press Home to go back to the main page.`;
      homeBtn.style.visibility = 'visible';
    }
  };
};

app();
