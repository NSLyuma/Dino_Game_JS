const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const btn = document.getElementById('btn');
const score = document.getElementById('score');
const latestScore = document.getElementById('latest');
const results = document.getElementById('results');
const scoreList = [];
let counter = 0;

document.addEventListener('keydown', function (event) {
  if (event.code === 'Space') {
    jump();
  }
});

function updateResults() {
  latestScore.innerHTML = Math.floor(counter / 10);
  scoreList.push(Math.floor(counter / 10));

  if (scoreList.length >= 11) {
    scoreList.shift();
  }

  let resultsTable = '';
  scoreList.forEach((s) => {
    resultsTable += `<li>${s}</li>`;
  });

  results.innerHTML = resultsTable;

  counter = 0;
}

function jump() {
  if (dino.classList != 'jump') {
    dino.classList.add('jump');
  }
  setTimeout(function () {
    dino.classList.remove('jump');
  }, 500);
}

let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue('left'),
  );

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    alert('GAME OVER');
    updateResults();
  } else if (btn.innerText == 'Stop') {
    counter++;
    score.innerHTML = `Score: ${Math.floor(counter / 10)}`;
  }
}, 10);

btn.addEventListener('click', function () {
  stopGame();
});

btn.addEventListener('keydown', function (event) {
  event.preventDefault();
});

function stopGame() {
  if (cactus.classList == 'move') {
    cactus.classList.remove('move');
    btn.innerText = 'Start';
    updateResults();
  } else {
    cactus.classList.add('move');
    btn.innerText = 'Stop';
    counter++;
    score.innerHTML = `Score: ${Math.floor(counter / 10)}`;
  }
}
