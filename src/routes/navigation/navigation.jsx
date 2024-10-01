import { Link, NavLink } from "react-router-dom";
import './navigation.css';
import { useMediaQuery } from "react-responsive";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import sidebarData from './SidebarData.json';

const Navigation = () => {

    const [sideBar, setSideBar] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: "769px" });

    const handleToggleNav = () => setSideBar(!sideBar);

    const webNavLinks = () => {
        return (
                <div className="links-container"> 
                    {
                        sidebarData.map((navItem) => {
                            return (
                                <NavLink key={navItem.id}
                                         id={navItem.cName} 
                                         to={navItem.path} 
                                         className={({isActive}) => isActive ? "active" : ""}
                                         onClick={isMobile && handleToggleNav}>
                                    {navItem.title}
                                </NavLink>
                            )
                        })
                    }
                </div>
        )
    }

    const mobileNavLinks = () => {
        return (
            <>
                <div className="navbar">
                    <Link to='#' className='menu-bars'>
                        <CiMenuFries size={25} onClick={handleToggleNav} />
                    </Link>
                </div>
                <nav className={sideBar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items" onClick={handleToggleNav}>
                        <li className="navbar-toggle">
                            <Link to='#' className='menu-bars'>
                                <IoCloseOutline className="icon" onClick={handleToggleNav} size={30} />
                            </Link>
                            {webNavLinks()}
                        </li>
                    </ul>
                </nav>
            </>
        )
    }

    return (
        <>
            <div className="navigation inline-flex place-content-between">
                <div className="logo-container">
                    <p className="logo">The</p>
                    <p className="logo">Butterfly</p>
                    <p className="logo">Movement</p>
                </div>

                {/* {isMobile ? (
                    <div className="links-container">
                        {
                            sideBar ? mobileNavLinks() : <CiMenuFries size={25} onClick={handleToggleNav} />
                        }
                    </div>
                ) : (
                    webNavLinks()
                )} */}

                {isMobile ? (
                    mobileNavLinks()
                ) : (
                    webNavLinks()
                )}
            </div>
        </>
      )
}

export default Navigation;