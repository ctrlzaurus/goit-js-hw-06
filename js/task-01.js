const categories = document.querySelectorAll(`#categories .item`);
console.log(`Nomber of categories: ${categories.length}`);

categories.forEach(category => {
    const name = category.querySelector('h2').textContent;
    const item = category.querySelectorAll('li').length;
    console.log(`Category: ${name} \nElements: ${item}`);
});