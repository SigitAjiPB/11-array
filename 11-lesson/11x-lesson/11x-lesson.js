const todoList = JSON.parse(localStorage.getItem('todoList')) || [];



renderTodoList();

function renderTodoList () {


let todoListHTML = '';

for  (let i = 0; i < todoList.length; i++) {
  const todo = todoList[i];
  const {name} = todo;
  const {dueDate} = todo;
  const html = `
  <div>${name}</div>
  <div>${dueDate}</div>
  <button class="delete-todo-button" onclick="todoList.splice(${i}, 1); renderTodoList();">Delete</button>
  `;
  todoListHTML += html;
} 


document.querySelector('.js-todo-list')
.innerHTML = todoListHTML;

}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  
  todoList.push({name, dueDate});
  
  inputElement.value = '';

  renderTodoList();
  // ================ CHange todoList to string JSON ==============
localStorage.setItem('todoList', JSON.stringify(todoList));
}
