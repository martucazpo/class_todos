const RenderLi = (obj, deleteTodos, editTodos) =>{
    let li = document.createElement("li")
    const liTextSpan = document.createElement("span")
    liTextSpan.innerText = obj.task
    liTextSpan.classList = "li-text-span"
    li.append(liTextSpan)
    let deleteBtn = document.createElement("button")
    deleteBtn.addEventListener("click", ()=>deleteTodos(obj.id))
    deleteBtn.innerText = "X"
    deleteBtn.classList = "delete-btn"
    li.append(deleteBtn)
    let editBtn = document.createElement("button")
    editBtn.classList = "li-edit-btn"
    editBtn.addEventListener("click", ()=>editTodos(obj.id))
    editBtn.innerText = "Edit"
    li.append(editBtn)
    return li
}

export default RenderLi