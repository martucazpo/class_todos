


const AddTodoForm = (props) =>{
        let form = document.createElement("form")
        form.classList.add("add-form")
        form.onsubmit = props.handleSubmit
        let addTaskInput = document.createElement("input")
        addTaskInput.setAttribute("name", "task")
        addTaskInput.setAttribute("id", "task")
        addTaskInput.setAttribute("type", "text")
        addTaskInput.addEventListener("input", props.handleInput)
        let addTaskLabel = document.createElement("label")
        addTaskLabel.setAttribute("for", "task")
        addTaskLabel.innerText = "Add Something To Do"
        let addTaskButton = document.createElement("button")
        addTaskButton.setAttribute("type", "submit")
        addTaskButton.innerText = "ADD"
        form.append(addTaskLabel)
        form.append(addTaskInput)
        form.append(addTaskButton)
        return form
}

export default AddTodoForm