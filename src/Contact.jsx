import "./Contact.css";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";

function Contact() {
    return (
        <>
            <div id="contact">
                <div className="contact_left">
                    <div className="contact_head">
                        <h3>
                            <span></span>CONTACT US
                        </h3>
                        <h1>
                            Here You Can Make A Resevation Or Just walking to
                            our Cafe
                        </h1>
                    </div>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Officia quisquam cum nam fuga magnam, deleniti
                        vitae eos adipisci voluptatem, dicta perferendis,
                        incidunt consequuntur unde iste perspiciatis ipsa minus
                        exercitationem eius.
                    </p>
                    <div className="contact_way">
                        <div className="contact_box">
                            <span>
                                <FaPhone />
                            </span>
                            <div>
                                <h3>Phone Numbers</h3>
                                <span>
                                    <p>765-708-3894</p>
                                    <p>637-194-1456</p>
                                </span>
                            </div>
                        </div>
                        <div className="contact_box">
                            <span>
                                <FaEnvelope />
                            </span>
                            <div>
                                <h3>Emails</h3>
                                <span>
                                    <p>hello@company.com</p>
                                    <p>info@company.com</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact_right">
                    <form action="">
                        <h1>Table Reservation</h1>
                        <div>
                            <span>
                                <input type="text" placeholder="Your Name" />
                                <input type="email" placeholder="Your Email" />
                            </span>
                            <span>
                                <input type="tel" placeholder="Phone Number" />
                                <input
                                    type="number"
                                    placeholder="Number of Guests"
                                />
                            </span>
                            <span>
                                <input type="date" placeholder="Date" />
                                <input type="time" placeholder="Time" />
                            </span>
                            <textarea
                                name="message"
                                id="message"
                                rows={7}
                                placeholder="Message"
                            ></textarea>
                        </div>
                        <button>Make A Reservation</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;
