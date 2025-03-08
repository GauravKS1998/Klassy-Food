import "./Week.css";
import fruit_salad from "./assets/images/fruit_salad.jpg";
import chicken_salad from "./assets/images/chicken_salad.jpg";
import veg_soup from "./assets/images/veg_soup.jpg";
import dosa from "./assets/images/dosa.jpeg";
import samosa from "./assets/images/samosa.jpg";
import orange from "./assets/images/orange.jpg";

let weekMenu = [
    {
        name: "Fresh Fruit Salad",
        price: 5.99,
        desc: "A mix of fresh seasonal fruits.",
        img: fruit_salad,
    },
    {
        name: "Chicken Salad",
        price: 7.99,
        desc: "A mix of chicken, vegetables, and fruits.",
        img: chicken_salad,
    },
    {
        name: "Vegetable Soup",
        price: 4.99,
        desc: "A mix of seasonal vegetables.",
        img: veg_soup,
    },
    {
        name: "Dosa",
        price: 6.99,
        desc: "A traditional South Indian dish.",
        img: dosa,
    },
    {
        name: "Samosa",
        price: 5.99,
        desc: "A traditional Indian snack.",
        img: samosa,
    },
    {
        name: "Orange Juice",
        price: 3.99,
        desc: "A refreshing glass of orange juice.",
        img: orange,
    },
];

function Week_menus() {
    return weekMenu.map((item) => {
        return (
            <>
                <div className="item_box">
                    <img src={item.img} alt="" />
                    <span>
                        <h3>{item.name}</h3>
                        <p>{item.desc}</p>
                    </span>
                    <span>
                        <h3>${item.price}</h3>
                    </span>
                </div>
            </>
        );
    });
}

export default Week_menus;
