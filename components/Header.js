
const Header = () =>{
    const header = document.createElement("div")
    header.classList = "header-div"
    const h1 = document.createElement("h1")
    h1.innerText = "My To Do List"
    header.append(h1)
    return header
}

export default Header