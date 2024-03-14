import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function CategoryMenu({ category }) {
    const [menuClosed, setMenuClosed] = useState(category.closed)
    // const [icon, setIcon] = useState('fa-solid fa-chevron-up')

   

    return (
        <>
            <div>
                <div className="flex justify-between">
                    <h2 className="text-2xl ">
                        {category.parent}
                    </h2>
                    <div onClick={()=>setMenuClosed(!menuClosed)}>{
                        menuClosed ? <FontAwesomeIcon icon="fa-solid fa-chevron-down" /> : <FontAwesomeIcon icon="fa-solid fa-chevron-up" />
                    }</div>
                </div>
                <ul>
                    {menuClosed && category.children.map((child, index) => {
                        return (
                            <li key={index} className="ml-4">
                                <a href={child.link}>{child.name}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )



}