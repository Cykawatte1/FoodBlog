import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import {Outlet} from "react-router-dom";

export default function Homepage() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}