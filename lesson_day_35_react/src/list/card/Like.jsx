import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"



export default function Like(){
    const [like, setLike] = useState (false)
    return(
        <>
            <div className="flex justify-between">
                <div className="flex">
                <div onClick={()=>setLike(!like)} className="mr-3">
                {like ? <FontAwesomeIcon icon="fa-solid fa-heart" /> : <FontAwesomeIcon icon="fa-regular fa-heart" />}
                </div>
                <div>
                {like ? 1 : 0 }
                </div>
                </div>
                <button className="bg-[#2F80ED] p-[5px] rounded-[5px] text-white"><FontAwesomeIcon icon="fa-brands fa-facebook-f" className="mr-2"/>Share</button>
            </div>
        </>
    )

}
