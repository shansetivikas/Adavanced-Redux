import { Link, NavLink } from "react-router-dom"
import { UseAuth } from "./Auth"


export const Navbar = () => {
    const auth = UseAuth();
    return (
        <nav className="primary-nav">
            {/* <Link to="/">Home</Link>
            <Link to="/about">About</Link> */}
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            {
                !(auth.user) && (<NavLink to="/login">Login</NavLink>)
            }
        </nav>
    )
}