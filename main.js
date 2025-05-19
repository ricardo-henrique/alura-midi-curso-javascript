const keysList = document.querySelectorAll('.tecla');

function playSong(audioSelector) {
  const element = document.querySelector(audioSelector);

  if (element && element.localName === 'audio') {
    element.play();
  } else {
    throw new Error('Elemento não encontrado ou seletor invalido');
  }
}

for (let couter = 0; couter < keysList.length; couter++) {
  const key = keysList[couter];
  const instrument = key.classList[1];
  const idAudio = `#som_${instrument}`;
  key.addEventListener('click', () => {
    playSong(idAudio);
  });
  key.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'Enter') {
      key.classList.add('ativa');
    }
  });
  key.addEventListener('keyup', () => {
    key.classList.remove('ativa');
  });
}
