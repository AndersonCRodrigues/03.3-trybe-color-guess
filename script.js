const ballContainer = document.querySelector('#ball-container');
const textRGB = document.querySelector('#rgb-color');
const textAnswer = document.querySelector('#answer');
const resetBtn = document.querySelector('#reset-game');
const score = document.querySelector('#score');
let points = 0;

function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `( ${red} , ${green} , ${blue})`;
}

function getTextColor() {
  const ball = document.querySelectorAll('.ball');
  const ballNumber = Math.floor(Math.random() * 6);
  textRGB.innerText = `${ball[ballNumber].id}`;
}

function addBall() {
  for (let i = 0; i < 6; i += 1) {
    const ball = document.createElement('div');
    ball.classList = 'ball';
    ball.id = randomColor();
    ball.style.backgroundColor = `rgb${ball.id}`;
    ballContainer.appendChild(ball);
  }
  getTextColor();
  textAnswer.innerText = 'Escolha uma cor';
}

ballContainer.addEventListener('click', (orign) => {
  if (orign.target.id === textRGB.innerText) {
    textAnswer.innerText = 'Acertou!';
    points += 3;
    score.innerText = `Placar: ${points}`;
  } else textAnswer.innerText = 'Errou! Tente novamente!';
});

resetBtn.addEventListener('click', () => {
  score.innerText = 'Placar: 0';
  let child = ballContainer.firstChild;
  while (child) {
    ballContainer.removeChild(child);
    child = ballContainer.firstChild;
  } addBall();
});

window.addEventListener('load', addBall);
