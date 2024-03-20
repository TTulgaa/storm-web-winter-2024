import SideBar from "../components/SideBar"
import menus from "../data/menus"
import Header from "../components/Header"
import MainComponent from "../components/MainComponent"
import LifeStyle from "../list/LifeStyle"
import Footer from "../components/Footer"
import category_blog from "../data/category_blog"
import CategoryBlog from "../components/CategoryBlog"

export default function HomePage() {
    console.log('home')
    return (
    
            <div className="flex mx-auto m-0 w-[982px] ">
                {/* <SideBar menus={menus} /> */}
                
                    {/* <Header /> */}
                    <MainComponent>
                        <CategoryBlog />
                    </MainComponent>
                    {/* <Footer /> */}
                
            </div>
        
    )
}