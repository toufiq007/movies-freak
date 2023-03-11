import React from "react";
import { Link,NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
    return (
        <section className="header-section">
            <nav>
                <div className="logo-area">
                    <Link to="/">
                        <img src={logo} className="logo" alt="" />
                    </Link>
                </div>
                <ul className="menu-area">
                    <li>
                        <NavLink to="movies/popular">Popular</NavLink>
                    </li>
                    <li>
                        <NavLink to="movies/top_rated">Top Rated</NavLink>
                    </li>
                    <li>
                        <NavLink to="movies/upcoming">Upcoming</NavLink>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default Header;
