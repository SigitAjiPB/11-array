const todoList = [{name:'make dinner', dueDate: '2022-12-22'},{name: 'was dishes', dueDate: '2022-12-22'}];

renderTodoList();

function renderTodoList () {


let todoListHTML = '';


todoList.forEach(function(todo, index) {
  const {name} = todo;
  const {dueDate} = todo;
  const html = `
  <div>${name}</div>
  <div>${dueDate}</div>
  <button class="delete-todo-button" onclick="todoList.splice(${index}, 1); renderTodoList();">Delete</button>
  `;
  todoListHTML += html;
});


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
}
