import chicken_salad from "./assets/images/chicken_salad.jpg";
import fruit_salad from "./assets/images/fruit_salad.jpg";
import orange from "./assets/images/orange.jpg";
import egg from "./assets/images/egg.jpg";
import veg_soup from "./assets/images/veg_soup.jpg";
import cheese from "./assets/images/cheese.jpg";
import "./Menu.css";
import { IoIosArrowDown } from "react-icons/io";

function Menu_body() {
    let menu = [
        {
            name: "Klassy Cup Cake",
            price: "$ 8.50",
            details:
                "A delicious cup cake with a hint of vanilla and a sprinkle of sugar.",
            img: chicken_salad,
        },
        {
            name: "Klassy Fruit Salad",
            price: "$ 6.50",
            details: "A mix of fruits with a hint of honey.",
            img: fruit_salad,
        },
        {
            name: "Klassy Orange Juice",
            price: "$ 4.50",
            details: "A glass of freshly squeezed orange juice.",
            img: orange,
        },
        {
            name: "Klassy Egg Bread",
            price: "$ 7.50",
            details:
                "A slice of egg bread. dolor sit amet consectetur , adipisicing elit. Nihil, officia.",
            img: egg,
        },
        {
            name: "Klassy Veg Soup",
            price: "$ 5.50",
            details:
                "A bowl of veg soup. dolor sit amet consectetur , adipisicing elit. Nihil, officia.",
            img: veg_soup,
        },
        {
            name: "Klassy Cheese",
            price: "$ 9.50",
            details: "A slice of cheese. Magni numquam eaque quae!",
            img: cheese,
        },
    ];
    return menu.map((item) => {
        return (
            <>
                <div className="menu_item">
                    <span>
                        <h4>{item.price}</h4>
                    </span>
                    <img src={item.img} alt="" />
                    <div className="menu_details">
                        <h4>{item.name}</h4>
                        <p>{item.details}</p>
                        <button>
                            Make Reservation
                            <IoIosArrowDown />
                        </button>
                    </div>
                </div>
            </>
        );
    });
}

export default Menu_body;
