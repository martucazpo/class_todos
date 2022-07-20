const EditTodoForm = (obj, handleInput, handleEdit) =>{
    let form = document.createElement("form")
    form.classList.add("edit-form")
    form.onsubmit = (e)=>handleEdit(e,obj.id)
    let editInput = document.createElement("input")
    editInput.setAttribute("name", "task")
    editInput.setAttribute("id", "edit")
    editInput.setAttribute("type", "text")
    editInput.value = obj.task
    editInput.addEventListener("input", handleInput)
    let editLabel = document.createElement("label")
    editLabel.setAttribute("for", "edit")
    editLabel.innerText = "Edit"
    let editButton = document.createElement("button")
    editButton.setAttribute("type", "submit")
    editButton.innerText = "EDIT"
    form.append(editLabel)
    form.append(editInput)
    form.append(editButton)
   return form
}

export default EditTodoForm