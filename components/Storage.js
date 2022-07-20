


class Storage {
    static getTodos(){
        let todos
        if(sessionStorage.getItem("todos")){
            todos = JSON.parse(sessionStorage.getItem("todos"))
        } else {
            todos = []
            Storage.setTodos(todos)
        }
        return todos
    }
    static setTodos(todos){
        sessionStorage.setItem("todos", JSON.stringify(todos))
    }
}

export default Storage