import EditTodoForm from "./EditTodoForm.js"
import RenderLi from "./RenderLi.js"


const RenderTodos = (arr, deleteTodos, handleInput, handleEdit, editTodos, isEdit,id) =>{
    if(arr.length <= 0){
        let messageDiv = document.createElement("div")
        messageDiv.classList = "message-div"
        let h3 = document.createElement("h3")
        h3.innerText = "There's nothing to do here!"
        messageDiv.append(h3)
        return messageDiv
    } else {
        let ul = document.createElement("ul")
    for(let i = 0; i < arr.length; i++){
        if(arr[i].id === id && isEdit){
           let form = EditTodoForm(arr[i], handleInput, handleEdit)
           ul.append(form) 
        } else {
            let li = RenderLi(arr[i], deleteTodos, editTodos)
            ul.append(li)
        }
        
    } 
    return ul
    }
    
}


export default RenderTodos