import AddTodoForm from "./AddTodoForm.js"
import RenderTodos from "./RenderTodos.js"
import { uuidv4 } from "../javascript/UUIDv4.js"
 const state = {
        task: "",
        todos: []
    }
class UI{
constructor(){
}
static renderSomething(){
  document.getElementById("root").innerHTML = ""
  AddTodoForm(this.handleSubmit, this.handleInput)
  RenderTodos(state.todos)
}
static handleInput(e){
    let { name, value } = e.target
    state[name] = value
}
static handleSubmit(e){
    e.preventDefault()
    let task = {}
    task.id = uuidv4()
    task.task = state.task
    state.todos.push(task)
    state.task = ""
    document.getElementById("task").value = ""
    UI.renderSomething()
}
}

export default UI