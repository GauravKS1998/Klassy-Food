import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import ramen from "./assets/images/ramen.png";

function Footer() {
    return (
        <>
            <footer>
                <div className="footer_left">
                    <button>
                        <FaFacebookF />
                    </button>
                    <button>
                        <FaXTwitter />
                    </button>
                    <button>
                        <FaLinkedinIn />
                    </button>
                    <button>
                        <FaInstagram />
                    </button>
                </div>
                <div className="footer_logo">
                    <img src={ramen} alt="" />
                    <span>
                        <h1>Klassy</h1>
                        <p>SINCE 1990</p>
                    </span>
                </div>
                <div className="footer_copyright">
                    <p>
                        ©Copyright 2025 Klassy Cafe Co. <br />
                        All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
