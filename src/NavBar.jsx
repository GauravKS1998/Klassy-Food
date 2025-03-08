import react from "react";
import ramen from "./assets/images/ramen.png";
import { IoIosArrowDown } from "react-icons/io";
import "./NavBar.css";

function NavBar() {
    return (
        <>
            <nav>
                <div className="logo">
                    <img src={ramen} alt="Logo" />
                    <span>
                        <h1>Klassy</h1>
                        <p>SINCE 1990</p>
                    </span>
                </div>
                <div className="links">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Menu</a>
                    <a href="#">Chefs</a>
                    <span>
                        <a href="#">Features</a>
                        <IoIosArrowDown />
                    </span>
                    <a href="#">Contact Us</a>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
