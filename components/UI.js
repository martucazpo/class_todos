import Header from "./Header.js";
import AddTodoForm from "./AddTodoForm.js";
import RenderTodos from "./RenderTodos.js";
import Storage from "./Storage.js";
import { uuidv4 } from "../javascript/UUIDv4.js";

const state = {
      isEdit: false,
      editId: "",
      task: "",
    };

class UI {
  static renderSomething() {
    document.getElementById("root").innerHTML = "";
    let todos = Storage.getTodos();
    const header = Header();
    const addTaskForm = AddTodoForm(props);
    const ul = RenderTodos(
      todos,
      props,
      state
    );
    document.getElementById("root").append(header);
    document.getElementById("root").append(addTaskForm);
    document.getElementById("root").append(ul);
  }
  static handleInput(e) {
    let { name, value } = e.target;
    state[name] = value;
  }
  static handleSubmit(e) {
    e.preventDefault();
    let todos = Storage.getTodos();
    let task = {};
    task.id = uuidv4();
    task.task = state.task;
    todos.push(task);
    Storage.setTodos(todos);
    state.task = "";
    document.getElementById("task").value = "";
    UI.renderSomething();
  }
  static deleteTodos(id) {
    let allTheOtherTodos = [];
    let todos = Storage.getTodos();
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id !== id) {
        allTheOtherTodos.push(todos[i]);
      }
    }
    Storage.setTodos(allTheOtherTodos);
    UI.renderSomething();
  }
  static editTodos(id) {
    state.editId = id;
    state.isEdit = true;
    UI.renderSomething();
  }
  static handleEdit(e, id) {
    e.preventDefault();
    let todos = Storage.getTodos();
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id && state.task !== "") {
        todos[i].task = state.task;
      }
    }
    Storage.setTodos(todos);
    state.editId = "";
    state.isEdit = false;
    state.task = "";
    UI.renderSomething();
  }
}

const props = {
  handleInput: UI.handleInput,
  handleSubmit: UI.handleSubmit,
  handleEdit: UI.handleEdit,
  editTodos: UI.editTodos,
  deleteTodos: UI.deleteTodos
}

export default UI;
