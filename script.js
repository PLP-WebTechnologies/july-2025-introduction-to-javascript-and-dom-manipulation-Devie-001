// Part 1: Variables & Conditionals
const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const greetBtn = document.getElementById('greetBtn');
const greetingOutput = document.getElementById('greetingOutput');

greetBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  const age = parseInt(ageInput.value, 10);

  if (!name || isNaN(age)) {
    greetingOutput.textContent = 'Please enter both your name and a valid age.';
    return;
  }

  // Conditional logic
  if (age >= 18) {
    greetingOutput.textContent = `Hello, ${name}! Welcome aboard as an adult.`;
  } else {
    greetingOutput.textContent = `Hey ${name}! You’re a minor—have fun learning.`;
  }
  console.log('Greeting displayed for', name);
});

// Part 2: Custom Functions
// Function 1: Format a string to uppercase with exclamation
function formatText(str) {
  return str.toUpperCase() + '!';
}

// Function 2: Calculate total cost
function calculateTotal(pricePerItem, quantity) {
  return (pricePerItem * quantity).toFixed(2);
}

const stringInput = document.getElementById('stringInput');
const formatBtn = document.getElementById('formatBtn');
const formattedOutput = document.getElementById('formattedOutput');

formatBtn.addEventListener('click', () => {
  const text = stringInput.value;
  formattedOutput.textContent = formatText(text);
});

const priceInput = document.getElementById('priceInput');
const quantityInput = document.getElementById('quantityInput');
const calcBtn = document.getElementById('calcBtn');
const totalOutput = document.getElementById('totalOutput');

calcBtn.addEventListener('click', () => {
  const price = parseFloat(priceInput.value);
  const qty = parseInt(quantityInput.value, 10);
  const total = calculateTotal(price, qty);
  totalOutput.textContent = `Total: $${total}`;
});

// Part 3: Loops
const countdownBtn = document.getElementById('countdownBtn');
const countdownOutput = document.getElementById('countdownOutput');

countdownBtn.addEventListener('click', () => {
  let count = 5;
  countdownOutput.textContent = '';
  // while loop demonstration
  while (count > 0) {
    countdownOutput.textContent += count + '... ';
    count--;
  }
  countdownOutput.textContent += 'Lift off!';
});

const listBtn = document.getElementById('listBtn');
const fruitList = document.getElementById('fruitList');
const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];

listBtn.addEventListener('click', () => {
  fruitList.innerHTML = ''; // clear existing
  // forEach loop demonstration
  fruits.forEach((fruit, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${fruit}`;
    fruitList.appendChild(li);
  });
});

// Part 4: DOM Manipulation
const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');
const themeToggleBtn = document.getElementById('themeToggleBtn');

addTodoBtn.addEventListener('click', () => {
  const task = todoInput.value.trim();
  if (task === '') return;
  const li = document.createElement('li');
  li.textContent = task;
  todoList.appendChild(li);
  todoInput.value = '';
});

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});