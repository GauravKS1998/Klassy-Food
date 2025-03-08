import "./Week.css";
import sunrise from "./assets/images/sunrise.png";
import sun from "./assets/images/sun.png";
import sunset from "./assets/images/sunset.png";
import Week_menus from "./Week_menus";

function Week() {
    return (
        <>
            <div id="week">
                <div className="week_head">
                    <h3>KLASSY WEEK</h3>
                    <h1>This Week's Special Meal Offers</h1>
                </div>
                <div className="week_btns">
                    <span id="active">
                        <img src={sunrise} alt="" />
                        <h4>Breakfast</h4>
                    </span>
                    <span>
                        <img src={sun} alt="" />
                        <h4>Lunch</h4>
                    </span>
                    <span>
                        <img src={sunset} alt="" />
                        <h4>Dinner</h4>
                    </span>
                </div>
                <div className="week_menus">
                    <Week_menus />
                </div>
            </div>
        </>
    );
}

export default Week;
