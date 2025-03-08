import "./Menu.css";
import Menu_body from "./Menu_body";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Menu() {
    return (
        <>
            <div id="menu">
                <div className="menu_head">
                    <h3>
                        <span></span>OUR MENU
                    </h3>
                    <h1>
                        Our Selection of Cakes <br /> With Quality Taste
                    </h1>
                </div>
                <div className="menu_body">
                    <Menu_body />
                </div>
                <div className="menu_scroll_btn">
                    <IoIosArrowBack id="scroll_left" />
                    <IoIosArrowForward id="scroll_right" />
                </div>
            </div>
        </>
    );
}

export default Menu;
