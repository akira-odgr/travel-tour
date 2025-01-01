import { useState } from "react";
import { NavbarLink } from "./NavbarLink";

import "./Navbar.scss";

const NavListData = [
    {
        link: "#home",
        title: "Home",
    },
    {
        link: "#about",
        title: "About",
    },
    {
        link: "#packages",
        title: "Packages",
    },
    {
        link: "#contact",
        title: "Contact",
    },
];

export const Navbar = () => {
    const [menuBtn, setMenuBtn] = useState("nav__menu-btn");
    const [navLinks, setNavLinks] = useState("nav__links");

    const toggleEvent = () => {
        setMenuBtn((prevBtn) =>
            prevBtn === "nav__menu-btn" ? "nav__menu-btn open" : "nav__menu-btn"
        );
        setNavLinks((prevLinks) =>
            prevLinks === "nav__links" ? "nav__links open" : "nav__links"
        );
    };

    const removeEvent = () => {
        setMenuBtn("nav__menu-btn");
        setNavLinks("nav__links");
    };

    return (
        <nav className="nav">
            <div className="nav__header">
                <div className="nav__logo">
                    <a href="#">
                        Travel<span>Toor</span>
                    </a>
                </div>
                <button className={menuBtn} onClick={toggleEvent}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <ul className={navLinks} onClick={removeEvent}>
                {NavListData.map((data, index) => (
                    <NavbarLink
                        key={index}
                        link={data.link}
                        title={data.title}
                    />
                ))}
            </ul>
            <div className="nav__btn">
                <button className="btn">Register</button>
            </div>
        </nav>
    );
};
