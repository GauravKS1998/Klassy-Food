import React from "react";
import "./home.css";
import klassy from "./assets/images/klassy1.jpg";

function Home() {
    return (
        <>
            <div id="home">
                <div className="home_left">
                    <span>
                        <h1>Klassy Cafe</h1>
                        <p>THE BEST EXPERIENCE</p>
                    </span>
                    <button>Make A Reservation</button>
                </div>
                <div className="home_right"></div>
            </div>
        </>
    );
}

export default Home;
