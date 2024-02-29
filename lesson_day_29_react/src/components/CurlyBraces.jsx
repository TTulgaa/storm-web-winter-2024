function Avatar(){
    const avatar = "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
    const description = 'Munkhtulga'
    return (
        <img src={avatar} alt={description} />
    )
}
function Todolist(name){
    return(
        <h1>
            {name.asd} Todo list
        </h1>
    )
}
export {Avatar, Todolist}