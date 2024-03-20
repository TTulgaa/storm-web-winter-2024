import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import menus from "../data/menus";

export default function Root() {
    return (
        <>
            <div className="mx-auto flex m-0 w-[1440px]">
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