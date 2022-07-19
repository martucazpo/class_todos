


const RenderTodos = (arr) =>{
    let ul = document.createElement("ul")
    for(let i = 0; i < arr.length; i++){
        let li = document.createElement("li")
        li.innerText = arr[i].task
        ul.append(li)
    }
    document.getElementById("root").append(ul)
}


export default RenderTodos