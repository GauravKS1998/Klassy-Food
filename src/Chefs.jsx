import "./Chefs.css";
import chef1 from "./assets/images/chef1.jpg";
import chef2 from "./assets/images/chef2.jpg";
import chef4 from "./assets/images/chef4.jpg";

function Chefs() {
    return (
        <>
            <div id="chefs">
                <div className="chef_head">
                    <h3>OUR CHEFS</h3>
                    <h1>Some of the best chefs in the world</h1>
                </div>
                <div className="chef_list">
                    <div className="chef">
                        <img src={chef1} alt="" />
                        <span>
                            <h3>Randy Walker</h3>
                            <p>Pastry Chef</p>
                        </span>
                    </div>
                    <div className="chef">
                        <img src={chef2} alt="" />
                        <span>
                            <h3>David Martin</h3>
                            <p>Cookie Chef</p>
                        </span>
                    </div>
                    <div className="chef">
                        <img src={chef4} alt="" />
                        <span>
                            <h3>Peter Brown</h3>
                            <p>Head Chef</p>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Chefs;
