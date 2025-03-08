import item1 from "./assets/images/item1.jpg";
import item2 from "./assets/images/item2.jpg";
import item3 from "./assets/images/item3.jpg";
import video from "./assets/images/video.mp4";
import { FaPlay } from "react-icons/fa6";
import "./About.css";

function About() {
    return (
        <>
            <div id="about">
                <div className="about_left">
                    <h3>
                        <span></span>ABOUT US
                    </h3>
                    <h1>We Leave A Delicious Memory For You</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet reiciendis a quis obcaecati dolores animi nobis
                        minus incidunt, officia quasi molestias tempora, amet
                        aperiam cumque possimus debitis mollitia? Ratione
                        consectetur exercitationem sed modi perferendis minus
                        natus. Quae ratione beatae corrupti!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Porro nisi deleniti possimus veritatis fugiat omnis
                        corporis voluptas voluptatem blanditiis magnam?
                    </p>
                    <div>
                        <img src={item1} alt="item1" />
                        <img src={item2} alt="item2" />
                        <img src={item3} alt="item3" />
                    </div>
                </div>
                <div className="about_right">
                    <video src={video}></video>
                    <button id="play_video">
                        <FaPlay />
                    </button>
                </div>
            </div>
        </>
    );
}

export default About;
