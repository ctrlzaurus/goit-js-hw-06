const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.getElementById('ingredients');

ingredients.forEach((ingredient) => {
  const ingredientsElements = document.createElement('li');
  ingredientsElements.textContent = ingredient;
  ingredientsElements.classList.add('item');

  console.log(ingredientsElements);

  ul.appendChild(ingredientsElements);
});