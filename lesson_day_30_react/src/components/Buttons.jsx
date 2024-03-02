const Button = () => {
    return (
        <button className=" border-2 border-black" >Click me</button>
    )
    }
    const AlertButton = ({message, children})=>{
        return(
            <button className="border-solid rounded-lg border-2" onClick={()=> alert(message)}>{children}</button>
        )
    }
export {Button, AlertButton}