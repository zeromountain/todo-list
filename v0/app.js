// state → Model
const todos = [
  { id: 3, content: "투두리스트 구현하기", completed: false },
  { id: 2, content: "모던 자바스크립트 딥 다이브 공부하기", completed: false },
  { id: 1, content: "알고리즘 공부하기", completed: false },
];

// DOM Nodes → View
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

const completeTodo = e => {
  const textContent = e.target.nextSibling;
  if (e.target.checked) textContent.style.textDecoration = "line-through";
  else textContent.style.textDecoration = "none";
};

const addCheckbox = todo => {
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.addEventListener("click", completeTodo);
  todo.appendChild(checkbox);
};

const addTextContent = (todo, e) => {
  const textContent = document.createElement("sapn");
  textContent.textContent = e.target[0].value;
  todo.appendChild(textContent);
};

const removeTodo = e => {
  const li = e.target.parentElement;
  li.remove();
};

const addRemoveButton = todo => {
  const removeButton = document.createElement("button");
  removeButton.textContent = "🗑";
  removeButton.addEventListener("click", removeTodo);
  todo.appendChild(removeButton);
};

const addChildElements = (todo, e) => {
  addCheckbox(todo);
  addTextContent(todo, e);
  addRemoveButton(todo);
};

const addTodo = e => {
  if (e.target[0].value.trim() === "") return; // 공백문자 예외처리
  const todo = document.createElement("li");
  addChildElements(todo, e);
  // button 생성, input checkbox 생성하고 todo 요소의 자식 요소로 추가하는 함수
  todoList.appendChild(todo);
};

const render = () => {
  todoList.innerHTML = todos
    .map(
      ({ id, content, completed }) =>
        `<li id="${id}">
        <input type="checkbox"${completed ? " checked" : ""}>
        <span>${content}</span>
        <button>🗑</button>
      </li>`,
    )
    .join("");
};

// Event Handler → Controller
// TODO: input 요소에 대해서 키보드와 마우스 이벤트를 모두 대응하는 방법은 무엇인가??
todoForm.onsubmit = e => {
  e.preventDefault();
  addTodo(e);
  todoInput.value = "";
};

window.addEventListener("DOMContentLoaded", render);
