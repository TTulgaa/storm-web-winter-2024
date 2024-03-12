import { useState } from "react";
const Lesson = () => {
    const [completed, setCompleted] = useState(false)
    const [userName, setUserName] = useState('')
    const handleCompleteLesson = () => {
        setCompleted(true)
    }
    const handleInputChange = (e) => {
        setUserName(e.target.value)
    }
    const handleSubmitForm = (e) => {
        e.preventDefault()
        console.log(`Hello, ${userName}!`)
    }
    return(
        <div>
            <h2>React.js Lesson</h2>
            <p>{completed ? 'Lesson Completed' : 'Lesson Content Goes Here'}</p>
            {!completed &&(
                <div>
                    <form onSubmit={handleSubmitForm}>
                        <label >
                            Your Name:
                            <input type="text" value={userName} onChange={handleInputChange}/>
                        </label>
                        <button type="submit">Submit</button>

                    </form>
                    <button onClick={handleCompleteLesson}>mark as completed</button>
                </div>
            )}
        </div>
    )
}
export default Lesson