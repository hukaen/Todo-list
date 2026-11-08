const todos = [];

const addTodo = () => {
  const todoInputEl = document.getElementById("todoInput");
  const todoListEl = document.getElementById("todoList");
  const todoText = todoInputEl.value.trim();

  if (todoText === "") {
    return;
  }

  todos.push({ title: todoText, isDone: false });
  todoInputEl.value = "";
};
console.log(todos);
