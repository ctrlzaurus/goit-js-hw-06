const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueElement = document.querySelector('#value');

decrementBtn.addEventListener('click', () => {
    counterValue.decrement();
    
    valueElement.textContent = counterValue.value;
});

incrementBtn.addEventListener('click', () => {
    counterValue.increment();
    
    valueElement.textContent = counterValue.value;
});