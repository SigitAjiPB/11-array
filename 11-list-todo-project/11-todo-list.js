const todoList = [];

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.ariaValueMax;

  todoList.push(name);
  console.log(todoList);
}