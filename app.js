const container = document.getElementById('container')
const SQUARE_NUMBER = 500;
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

for(let i = 0; i <SQUARE_NUMBER; i++){
  const square = document.createElement('div')
  square.classList.add('square');

  square.addEventListener('mouseover', () => {
    setColor(square);
  })

  square.addEventListener('mouseout', () => {
    removeColor(square);
  })

  container.appendChild(square);
}


const setColor = square => {
  const color = generateRandomColor();
  square.style.backgroundColor = color;
  square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

const removeColor = square => {
  square.style.backgroundColor = '#1d1d1d';
  square.style.boxShadow = `0 0 2px #000`;
}

const generateRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
}