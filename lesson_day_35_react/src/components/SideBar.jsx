import CategoryMenu from "./CategoryMenu"

export default function SideBar({menus}) {
    console.log(menus)
    return (
        <div>
            <h1>Side Bar</h1>
            {
                menus && menus.map((menu, index) => {
                    return (
                        <CategoryMenu key={index} category={menu} />
                    )
                })
            }
        </div>
    );



}