import EditTodoForm from "./EditTodoForm.js"
import RenderLi from "./RenderLi.js"


const RenderTodos = (arr, props, state) =>{
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
        if(arr[i].id === state.editId && state.isEdit){
           let form = EditTodoForm(arr[i], props)
           ul.append(form) 
        } else {
            let li = RenderLi(arr[i], props)
            ul.append(li)
        }
        
    } 
    return ul
    }
    
}


export default RenderTodos