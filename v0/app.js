// state → Model
let todos = [
  { id: 3, content: "투두리스트 구현하기", completed: true },
  { id: 2, content: "모던 자바스크립트 딥 다이브 공부하기", completed: false },
  { id: 1, content: "알고리즘 공부하기", completed: false },
];

const addTodo = (todos, newTodo) => [newTodo, ...todos];
const createId = todos => Math.max(...todos.map(todo => todo.id), 0) + 1;
const removeTodo = id => {
  todos = todos.filter(todo => todo.id !== +id);
};
const toggleTodo = id => {
  todos = todos.map(todo => {
    return todo.id === +id ? { ...todo, completed: !todo.completed } : todo;
  });
};

window.addEventListener("DOMContentLoaded", () => {
  // DOM Nodes → View
  const todoForm = document.querySelector(".todo-form");
  const todoInput = document.querySelector(".todo-input");
  const todoList = document.querySelector(".todo-list");

  // TODO: innerHTML 대체 방법
  const render = () => {
    todoList.innerHTML = todos
      .map(
        ({ id, content, completed }) =>
          `<li id="${id}">
        <input type="checkbox" class="completed-todo"${
          completed ? " checked" : ""
        }
        >
        ${
          completed
            ? `<span style="text-decoration: line-through">${content}</span>`
            : `<span>${content}</span>`
        }
        <button class="remove-todo" remove>🗑</button>
      </li>`,
      )
      .join("");
  };

  render();

  // Event Handler → Controller
  todoForm.onsubmit = e => {
    e.preventDefault();
    todos = addTodo(todos, {
      id: createId(todos),
      content: e.target[0].value,
      completed: false,
    });
    render();
    todoInput.value = "";
  };

  todoList.addEventListener("click", e => {
    const { id } = e.target.parentNode;

    if (!e.target.matches(".completed-todo")) {
      console.log(id);
      removeTodo(id);
    } else {
      toggleTodo(id);
    }
    render();
  });
});

// const completeTodo = e => {
//   const textContent = e.target.nextSibling;
//   if (e.target.checked) textContent.style.textDecoration = "line-through";
//   else textContent.style.textDecoration = "none";
// };

// const addCheckbox = todo => {
//   const checkbox = document.createElement("input");
//   checkbox.setAttribute("type", "checkbox");
//   checkbox.addEventListener("click", completeTodo);
//   todo.appendChild(checkbox);
// };

// const addTextContent = (todo, e) => {
//   const textContent = document.createElement("sapn");
//   textContent.textContent = e.target[0].value;
//   todo.appendChild(textContent);
// };

// const removeTodo = e => {
//   const li = e.target.parentElement;
//   li.remove();
// };

// const addRemoveButton = todo => {
//   const removeButton = document.createElement("button");
//   removeButton.textContent = "🗑";
//   removeButton.addEventListener("click", removeTodo);
//   todo.appendChild(removeButton);
// };

// const addChildElements = (todo, e) => {
//   addCheckbox(todo);
//   addTextContent(todo, e);
//   addRemoveButton(todo);
// };
