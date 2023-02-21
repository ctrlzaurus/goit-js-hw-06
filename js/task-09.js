function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = document.querySelector('.change-color');
const color = document.querySelector('.color');

changeColor.addEventListener('click', () => {
  const hex = getRandomHexColor();
  color.textContent = hex;
  document.body.style.backgroundColor = hex;
});
