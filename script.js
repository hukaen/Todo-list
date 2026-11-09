const todoInputEl = document.getElementById("todoInput");
const todoListEl = document.getElementById("list");
const todoCount = document.getElementById("count");
const todos = [];

const addTodo = () => {
  const todoText = todoInputEl.value.trim();

  if (todoText === "") {
    alert("Даалгавраа бичнэ үү!");
    return;
  }

  todos.push({ title: todoText, isDone: false });
  const newTodoContainer = document.createElement("div");
  newTodoContainer.className = "flex gap-5 w-full";
  const newTodoIsDone = document.createElement("input");
  newTodoIsDone.type = "checkbox";
  newTodoIsDone.checked = false;
  newTodoIsDone.className = "w-[26px] h-[26px] accent-[#6C63FF] rounded-[5px]";
  const newTodo = document.createElement("h1");
  newTodo.className = "w-full text-indigo-400 font-bold";
  newTodo.textContent = todoText;
  const newTodoDelete = document.createElement("button");
  newTodoDelete.textContent = "🗑️";
  newTodoDelete.className = "w-[18px] h-[18px] ";

  newTodoContainer.appendChild(newTodoIsDone);
  newTodoContainer.appendChild(newTodo);
  newTodoContainer.appendChild(newTodoDelete);
  todoListEl.appendChild(newTodoContainer);

  newTodoDelete.addEventListener("click", () => {
    const index = todos.findIndex((todo) => todo.title === todoText);

    if (index !== -1) {
      todos.splice(index, 1);
    }

    newTodoContainer.remove();

    console.log(todos);
  });

  newTodoIsDone.addEventListener("change", () => {
    const todo = todos.find((todo) => todo.title === todoText);

    if (todo) {
      todo.isDone = newTodoIsDone.checked;
    }

    newTodo.style.textDecoration = newTodoIsDone.checked
      ? "line-through"
      : "none";
  });

  const doneTodo = todos.filter((todo) => todo.isDone === true);

  todoInputEl.value = "";
  console.log(todos);
};
