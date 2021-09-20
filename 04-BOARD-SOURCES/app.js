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
  //   element.style.backgroundColor = 'red';
  element.style.backgroundColor = randomColor(55);
  element.style.boxShadow = `0 0 2px ${randomColor(55)}, 0 0 10px ${randomColor(
    2
  )}`;
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #000';
}

/* Stackoverflow :) 
Вызвать randomColor со значением от 0 до 255, 
указывая, насколько ярким должен быть цвет. 
Это полезно для создания пастелей, */
function randomColor(brightness) {
  function randomChannel(brightness) {
    const r = 255 - brightness;
    const n = 0 | (Math.random() * r + brightness);
    const s = n.toString(16);
    return s.length == 1 ? '0' + s : s;
  }
  return (
    '#' +
    randomChannel(brightness) +
    randomChannel(brightness) +
    randomChannel(brightness)
  );
}
