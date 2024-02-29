function Item({name, isDone}){
    if (isDone){
        return <li className="bg-green-200">{name}</li>
    }
    return <li className="bg-red-200">{name}</li>
}
function Todolist(){
    return (
        <section>
            <h1>My Todo List</h1>
            <ul>
                <Item isDone={true} name="read book"/>
                <Item isDone={true} name="read book"/>
                <Item isDone={false} name="read book"/>
            </ul>
        </section>
    )
}
export default Todolist