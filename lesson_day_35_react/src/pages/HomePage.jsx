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
        <div>
            <div className="flex">
                {/* <SideBar menus={menus} /> */}
                <div className="flex flex-col items-center">
                    {/* <Header /> */}
                    <MainComponent>
                        <CategoryBlog />
                    </MainComponent>
                    {/* <Footer /> */}
                </div>
            </div>
        </div>
    )
}