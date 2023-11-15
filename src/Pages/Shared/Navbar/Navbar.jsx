import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { CiShoppingCart } from "react-icons/ci";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handelLogout = () => {
        logOut()
    }

    const NavLinks = <>
        <li className="text-white"><NavLink to={'/'}>Home</NavLink></li>
        <li className="text-white"><NavLink to={'/menu'}>Our Menu</NavLink></li>
        <li className="text-white"><NavLink to={'/order/salad'}>Our Order</NavLink></li>
        {
            user ? <li onClick={handelLogout} className="text-white"><NavLink>Log Out</NavLink></li> :
                <li className="text-white"><NavLink to={'/login'}>Login</NavLink></li>
        }
        <li className="">
            <button className="btn capitalize hover:text-white">
                <CiShoppingCart className="text-2xl" />
                <div className="badge badge-secondary">+99</div>
            </button>
        </li>

    </>
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar fixed z-10 bg-black bg-opacity-30">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2">Navbar Title</div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal space-x-2">
                            {NavLinks}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 ">

                </ul>
            </div>
        </div>
    );
};

export default Navbar;