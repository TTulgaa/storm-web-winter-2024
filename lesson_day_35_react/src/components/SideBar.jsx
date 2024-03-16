import CategoryMenu from "./CategoryMenu"

export default function SideBar({menus}) {
    console.log(menus)
    return (
        <div className="w-[348px] py-[40px] px-[45px]">
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