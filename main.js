// Elements
const pom = document.querySelector('.tecla_pom'),
  clap = document.querySelector('.tecla_clap'),
  tim = document.querySelector('.tecla_tim'),
  puff = document.querySelector('.tecla_puff'),
  splash = document.querySelector('.tecla_splash'),
  toim = document.querySelector('.tecla_toim'),
  psh = document.querySelector('.tecla_psh'),
  tic = document.querySelector('.tecla_tic'),
  tom = document.querySelector('.tecla_tom');
// Audio
const pomAudio = document.querySelector('#som_tecla_pom'),
  clapAudio = document.querySelector('#som_tecla_clap'),
  timAudio = document.querySelector('#som_tecla_tim'),
  puffAudio = document.querySelector('#som_tecla_puff'),
  splashAudio = document.querySelector('#som_tecla_splash'),
  toimAudio = document.querySelector('#som_tecla_toim'),
  pshAudio = document.querySelector('#som_tecla_psh'),
  ticAudio = document.querySelector('#som_tecla_tic'),
  tomAudio = document.querySelector('#som_tecla_tom');

function playAudio(el, audioEl) {
  const play = el.addEventListener('click', (e) => {
    audioEl.play();
  });
  return play;
}

playAudio(pom, pomAudio);
playAudio(clap, clapAudio);
playAudio(tim, timAudio);
playAudio(puff, puffAudio);
playAudio(splash, splashAudio);
playAudio(toim, toimAudio);
playAudio(psh, pshAudio);
playAudio(tic, ticAudio);
playAudio(tom, tomAudio);
