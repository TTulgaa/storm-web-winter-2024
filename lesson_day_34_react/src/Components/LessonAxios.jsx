import { useState } from "react";
import axios from "axios"
const Lesson = () => {
    const [completed, setCompleted] = useState(false)
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState("")
    const [loginResult, setLoginRestult] = useState(null)


    const handleCompleteLesson = () => {
        setCompleted(true)
    }
    const handleInputChange = (e) => {
        setUserName(e.target.value)
    }
    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axios.post("https://dummyjson.com/auth/login",
                {
                    username: userName,
                    password: userPassword,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
            console.log(data);
            setLoginRestult(data);
            localStorage.setItem("userInfo", JSON.stringify(data));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const getProfileInfo = async (event) => {
        const { token } = JSON.parse(localStorage.getItem("userInfo"));
        event.preventDefault();
        const { data } = await axios.get("https://dummyjson.com/auth/me",
            {
                header: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            }
        );
        console.log(data)
    }
    return (
        <div>
            <h2>React.js Lesson</h2>
            <p>{completed ? 'Lesson Completed' : 'Lesson Content Goes Here'}</p>
            {!completed && (
                <div>
                    <form onSubmit={handleLogin}>
                        <label >
                            Your Name:
                            <input type="text" value={userName} onChange={handleInputChange} />
                        </label>
                        <label >
                            Your Password:
                            <input type="password" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
                        </label>
                        <button type="submit">Login</button>

                    </form>
                    <button onClick={handleCompleteLesson}>mark as completed</button>
                    <button onClick={getProfileInfo}>Get My Info</button>
                </div>
            )}
            {
                loginResult && (
                    <div>
                        <h3>Login Result:</h3>
                        <pre>{JSON.stringify(loginResult, null, 2)}</pre>
                    </div>
                )
            }
        </div>
    )
}
export default Lesson