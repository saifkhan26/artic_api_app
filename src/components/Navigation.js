import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return(
        <header className="main__header py-6">
            <div className="container">
                <nav className="flex justify-between gap-3 items-center">
                    <p>Art Institut of Chicago</p>
                    <ul className="flex gap-3">
                        <li> <NavLink to="/">Home</NavLink> </li>
                        <li> <NavLink to="search">Search</NavLink> </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navigation