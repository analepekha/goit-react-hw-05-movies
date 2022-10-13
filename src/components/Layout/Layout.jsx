import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";


export const Layout = () => {
    return (
        <>
        <nav>
            <NavLink to='/' end >Home</NavLink>
            <NavLink to='/movies'>Movies</NavLink>
        </nav>
        <Outlet />
        </>
    )
}