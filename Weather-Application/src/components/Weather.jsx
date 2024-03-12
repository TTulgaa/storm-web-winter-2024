import { useEffect, useState } from "react";
import axios from "axios";

export default function Weather() {

    const API_KEY = "b11fcaec50164789fa9e77353ad82431";
    const [location, setLocation] = useState("Ulaanbaatar");
    const [data, setData] = useState("")


    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const weather = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
            );
            console.log(weather);
            localStorage.setItem("weather", JSON.stringify(weather))
        } catch (error) {
            console.error("Error fatching data:", error)
        }
    }

    const searchLocation =  (e) => {
       
        if (e.key === "Enter") {
            setLocation(e.target.value)
            fetchData()
        }
    }

    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="Enter a City"
                    className="opacity-75 mt-10 rounded-md p-2"
                    // value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onKeyDown={searchLocation}
                />
            </form>

        </div>
    )
}

