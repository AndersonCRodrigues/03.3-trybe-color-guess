const ballContainer = document.querySelector('#ball-container');

window.addEventListener('load', () => {
  for (let i = 0; i < 6; i += 1) {
    const ball = document.createElement('div');
    ball.classList = 'ball';
    ballContainer.appendChild(ball);
  }
});
