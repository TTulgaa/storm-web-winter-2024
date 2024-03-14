import SideBar from "../components/SideBar"
import menus from "../data/menus"
import Header from "../components/Header"
import MainComponent from "../components/MainComponent"
import LifeStyle from "../list/LifeStyle"
import Footer from "../components/Footer"

export default function HomePage (){
 return (
    <div>
        <div className="flex">
            <SideBar menus={menus}/>
            <div>
            <Header/>
            <MainComponent>
                <LifeStyle/>
            </MainComponent>
            <Footer/>
            </div>
        </div>
    </div>
 )
}