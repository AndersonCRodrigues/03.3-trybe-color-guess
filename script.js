const ballContainer = document.querySelector('#ball-container');

function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb( ${red} , ${green} , ${blue})`;
}

window.addEventListener('load', () => {
  for (let i = 0; i < 6; i += 1) {
    const ball = document.createElement('div');
    ball.classList = 'ball';
    ball.style.backgroundColor = randomColor();
    ballContainer.appendChild(ball);
  }
});

