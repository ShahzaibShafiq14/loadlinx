import { useState } from "react"
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const defaultContactFormData = {
    username: "",
    email: "",
    message: "",
}

export const Contact = () => {
    const [contact, setContact] = useState(defaultContactFormData);

    const [userData, setUserData] = useState(true);

    const { user } = useAuth();

    if (userData && user) {
        setContact({
            username: user.username,
            email: user.email,
            message: "",
        });

        setUserData(false);
    }

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContact({
            ...contact,
            [name]: value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/form/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contact),
            });
            if (response.ok) {
                setContact(defaultContactFormData);
                toast.success("Message sent successfully.");
            }
        }
        catch (error) {
            toast.error("Message not sent.");
            console.log(error);
        }
    };

    return (
        <>
            <section className="section-contact">
                <div className="contact-content container">
                    <h1 className="main-heading">Contact Us</h1>
                </div>

                <div className="container grid grid-two-cols">
                    <div className="contact-img">
                        <img src="/images/support.png" alt="we are always ready to help" />
                    </div>

                    <section className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">username</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    autoComplete="off"
                                    value={contact.username}
                                    onChange={handleInput}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email">email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="off"
                                    value={contact.email}
                                    onChange={handleInput}
                                    required
                                />

                            </div>
                            <div>
                                <label htmlFor="message">message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    autoComplete="off"
                                    value={contact.message}
                                    onChange={handleInput}
                                    required
                                    cols="30"
                                    rows="6"
                                ></textarea>

                            </div>
                            <div>
                                <button type="submit">submit</button>
                            </div>
                        </form>
                    </section>
                </div>
                <section className="mb-3">

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13823.144258986607!2d-97.14418965121513!3d29.985577684961587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86448034fb49da21%3A0xa19743e9aa36ba4f!2sColorado%2C%20TX%2078957%2C%20USA!5e0!3m2!1sen!2s!4v1713870227533!5m2!1sen!2s"
                        width="100%"
                        height="450"
                        allowfullscreen
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </section>
            </section>
        </>
    );
};


