import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import menus from "../data/menus";

export default function Root() {
    return (
        <>
            <div className="flex">
                <SideBar menus={menus} />
                <div>
                    <Header />
                    <Outlet />
                    <Footer />
                </div>

            </div>

        </>
    );
}