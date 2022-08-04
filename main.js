const app = () => {
  const song = document.querySelector('.song');
  const play = document.querySelector('.play');
  const outline = document.querySelector('.moving-outline circle');
  const video = document.querySelector('.vid-container video');
  const changeText = document.querySelector('.desc-change');
  const homeBtn = document.querySelector('.home-btn');
  const wrap = document.querySelector('.wrap');
  const circle = document.querySelector('.circle');
  const breath = document.querySelector('.breath');

  const svg = document.querySelector('svg');
  const ngons = [...document.querySelectorAll('.ngon')];
  const morph = document.querySelector('.morph');

  // var tl = new TimelineMax({ delay: 0.5, repeat: -1, repeatDelay: 2 });

  // tl.set('.ngon', { y: 30, opacity: 0 })
  //   // .set('#mirror', {x: -2})
  //   .to('.ngon', 1, { y: 32, opacity: 1 }, 0)
  //   .to(
  //     '.ngon',
  //     6,
  //     { x: -20, rotation: 30, ease: Elastic.easeIn.config(1, 0.4) },
  //     0
  //   )
  //   .to('.ngon', 3, { y: 120, ease: Sine.easeIn }, 3)
  //   .to('.ngon', 6, { x: -40, rotation: 60, opacity: 0 });

  // Circles
  // const circleOne = document.querySelector('div.circle:nth-child(1)');
  // const circleTwo = document.querySelector('.circle:nth-child(2)');
  // const circleThree = document.querySelector('.circle:nth-child(3)');
  // const circleFour = document.querySelector('.circle:nth-child(4)');
  // const circleFive = document.querySelector('.circle:nth-child(5)');
  // const circleSix = document.querySelector('.circle:nth-child(6)');

  // Sounds
  const sounds = document.querySelectorAll('.sound-picker button');
  // Time Display
  const timeDisplay = document.querySelector('.time-display');
  const timeSelect = document.querySelectorAll('.time-select button');
  // Outline Total Length
  // const outlineLength = outline.getTotalLength();
  // Duration
  let fakeDuration = 120;
  // Hide Home Button
  // homeBtn.style.visibility = 'visible';
  // wrap.style.visibility = 'visible';

  morph.style.visibility = 'hidden';

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  // outline.style.strokeDasharray = outlineLength;
  // outline.style.strokeDashoffset = outlineLength;
  // video.play();
  // Pick Different Sounds
  sounds.forEach((sound) => {
    sound.addEventListener('click', function () {
      song.src = this.getAttribute('data-sound');
      video.src = this.getAttribute('data-video');
      checkPlaying(song);
    });
  });

  // Play Animation
  play.addEventListener('click', () => {
    checkPlaying(song);
    // circleOne.style.animation = 'circle-1 4s ease alternate infinite';
    // circleTwo.style.animation = 'circle-2 4s ease alternate infinite';
    // circleThree.style.animation = 'circle-3 4s ease alternate infinite';
    // circleFour.style.animation = 'circle-4 4s ease alternate infinite';
    // circleFive.style.animation = 'circle-5 4s ease alternate infinite';
    // circleSix.style.animation = 'circle-6 4s ease alternate infinite';
    morph.style.visibility = 'visible';
    window.requestAnimationFrame(tick);
    // console.log('button pressed');
    play.style.visibility = 'hidden';
  });

  // Go To LFL Homepage
  homeBtn.addEventListener('click', () => {
    // console.log('Button Clicked');
    window.location.href = 'https://www.leftfieldlabs.com/';
  });

  // Choose Song Duration
  timeSelect.forEach((option) => {
    option.addEventListener('click', function () {
      fakeDuration = this.getAttribute('data-time');
      timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
        fakeDuration % 60
      )}0`;
      song.src = this.getAttribute('data-sound');
      checkPlaying(song);
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
      homeBtn.style.visibility = 'visible';
    } else {
      song.pause();
      video.pause();
      changeText.textContent = `You can't be done just yet. Keep going.`;
      play.src = './svg/play.svg';
      homeBtn.style.visibility = 'visible';
    }
  };

  // Animate Circle
  song.ontimeupdate = () => {
    let currentTime = song.currentTime;
    let elapsed = fakeDuration - currentTime;
    let seconds = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60);

    //   // Animate Circle
    //   let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
    //   outline.style.strokeDashoffset = progress;

    //   // Animate Text
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
  // function kickOff() {
  //   setTimeout(function () {
  //     breath.textContent = 'Breath In';
  //   }, 5000);
  //   setTimeout(function () {
  //     breath.textContent = 'Breath Out';
  //   }, 5000);
  // }

  // function breathIn() {
  //   // do whatever you like here
  //   breath.textContent = 'Breath In';
  //   setTimeout(breathIn, 5000);
  // }

  // function breathOut() {
  //   // do whatever you like here
  //   breath.textContent = 'Breath Out';
  //   setTimeout(breathOut, 10000);
  // }
  // const breathTitle = async () => {
  //   // await delay(500);
  //   breath.textContent = 'Breath In';

  //   await delay(5000);
  //   breath.textContent = 'Breath Out';

  //   setTimeout(breathTitle, 5000);
  // };

  // breathTitle();
  // utils
  const ptsFromPath = (d) =>
    d
      .substring(1, d.length - 1)
      .split('L')
      .map((s) => {
        var pt = s.split(',').map((x) => parseFloat(x));
        return { x: pt[0], y: pt[1] };
      });
  const flashElement = (el) => {
    el.classList.add('active');
    setTimeout(() => {
      el.classList.remove('active');
    }, 0);
  };
  // setup tweens
  let lastNgon = 3;
  let increasing = true;
  const tweens = ngons.map((el, idx, arr) => {
    return !idx
      ? null
      : (() => {
          const a = ptsFromPath(arr[idx - 1].getAttribute('d'));
          a.splice(Math.floor(a.length / 2), 0, {
            x: 0,
            y: a[Math.floor(a.length / 2)].y,
          });
          const b = ptsFromPath(el.getAttribute('d'));
          return (n) => {
            if (lastNgon !== idx + 2) {
              lastNgon = idx + 2;
              flashElement(ngons[idx - (increasing ? 1 : 0)]);
            }
            let d = 'M';
            for (var i = 0, len = a.length, ni = 1 - n; i < len; i++)
              d += `${ni * a[i].x + n * b[i].x},${ni * a[i].y + n * b[i].y}${
                i < len - 1 ? 'L' : 'Z'
              }`;
            morph.setAttribute('d', d);
          };
        })();
  });
  tweens.shift();
  // animate
  const animate = recurve.compose.weighted(
    tweens,
    tweens.map((x) => 1)
  );
  const tick = (() => {
    let progress = 0;
    let prevProgress = 0;
    return (time) => {
      stats.begin();
      progress = opts.easeFunction(
        recurve.normalize.pingpong(time * opts.timeScale)
      );
      if (
        (increasing && prevProgress > progress) ||
        (!increasing && prevProgress < progress)
      ) {
        increasing = !increasing;
        if (progress < 0.02) {
          flashElement(ngons[0]);
        } else if (progress > 0.98) {
          flashElement(ngons[ngons.length - 1]);
        }
      }
      animate((prevProgress = progress));
      window.requestAnimationFrame(tick);
      stats.end();
    };
  })();

  // setup stats
  const stats = new Stats();
  // stats.showPanel(0);
  // stats.domElement.style.position = 'absolute';
  // stats.domElement.style.left = 10;
  // stats.domElement.style.top = 0;
  // document.body.appendChild(stats.domElement);
  // setup options
  const opts = {
    Easing: 'Sine.inOut',
    easeFunction: recurve.ease.Sine.inOut,
    Speed: 1,
    timeScale: 0.0001,
    Size: 80,
    Glow: true,
  };
  // const gui = new dat.GUI();
  // gui
  //   .add(opts, 'Easing', [
  //     'Quad.in',
  //     'Quad.out',
  //     'Quad.inOut',
  //     'Cubic.in',
  //     'Cubic.out',
  //     'Cubic.inOut',
  //     'Quart.in',
  //     'Quart.out',
  //     'Quart.inOut',
  //     'Quint.in',
  //     'Quint.out',
  //     'Quint.inOut',
  //     'Sine.in',
  //     'Sine.out',
  //     'Sine.inOut',
  //     'Circ.in',
  //     'Circ.out',
  //     'Circ.inOut',
  //     'Expo.in',
  //     'Expo.out',
  //     'Expo.inOut',
  //     'Back.in',
  //     'Back.out',
  //     'Back.inOut',
  //     'Elastic.in',
  //     'Elastic.out',
  //     'Elastic.inOut',
  //     'Bounce.in',
  //     'Bounce.out',
  //     'Bounce.inOut',
  //     'Linear',
  //   ])
  //   .onChange((easeSelection) => {
  //     opts.easeFunction = recurve.ease;
  //     easeSelection.split('.').forEach((selectionPart) => {
  //       opts.easeFunction = opts.easeFunction[selectionPart];
  //     });
  //   });
  // gui.add(opts, 'Speed', 0.25, 8).onFinishChange((speedSelection) => {
  //   opts.timeScale = 0.0001 * speedSelection;
  // });
  // gui.add(opts, 'Size', 10, 100).onFinishChange((sizeSelection) => {
  //   svg.style.width = `${sizeSelection}vw`;
  //   svg.style.height = `${sizeSelection}vh`;
  // });
  // gui.add(opts, 'Glow').onFinishChange((glowToggle) => {
  //   ngons[0].parentNode.setAttribute('filter', glowToggle ? 'url(#glow)' : '');
  // });
  // start animation
};

app();
