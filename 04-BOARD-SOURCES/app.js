const board = document.querySelector('#board');
const SQUARES_NUMBER = 665;

for (let i = 0; i < SQUARES_NUMBER; i += 1) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => {
    setColor(square);
  });
  square.addEventListener('mouseleave', () => {
    removeColor(square);
  });

  board.append(square);
}

function setColor(element) {
  element.style.backgroundColor = get_random_color2();
  element.style.boxShadow = `0 0 2px ${get_random_color2()}, 0 0 10px ${get_random_color2()}`;
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #000';
}

//Stackoverflow :)
function get_random_color2() {
  const r = function () {
    return Math.floor(Math.random() * 256);
  };
  return 'rgb(' + r() + ',' + r() + ',' + r() + ')';
}
