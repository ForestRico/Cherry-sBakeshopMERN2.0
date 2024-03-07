import React, { useState } from "react";
import axios from "axios";
import classes from './checkoutPage.module.css'
import Title from "../../components/Title/Title";
import { useCart } from "../../hooks/useCart";
import { Link } from "react-router-dom";
import Price from "../../components/Price/Price";

export default function CheckoutPage() {
    const { cart } = useCart();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        typeOfOccasion: "",
        firstName: "",
        lastName: "",
        message: "",
        pickUpDate: "",
        pickUpTime: "",
        phoneNumber: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // sends form data to the backend
            const response = await axios.post("/api/orders", formData);
            console.log(response.data);
            // Display confirmation message or redirect to a thank you page
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <>
            <Title title="Order and Quote Form" margin="1.5rem 0 0 2.5rem" />
            <div className={classes.container}>
                <form onSubmit={handleSubmit}>
                    <ul className={classes.list}>
                        {cart.items.map(item => (
                            <li key={item.food.id}>
                                <div>
                                    <img src={`/foods/${item.food.imageUrl}`} alt={item.food.name} />
                                </div>

                                <div>
                                    <Link to={`/food/${item.food.id}`}>{item.food.name}</Link>
                                </div>

                                <div className={classes.food_count}>
                                    Quantity: {item.quantity}
                                </div>
                                
                                <div className={classes.food_count_total}>
                                    Total: $<Price price={item.price} />
                                </div> 
                            </li>
                        ))}
                        <li>
                            {/* Render total price */}
                        </li>
                    </ul>
                
                    <div className={classes.submissionbox}>
                        <div className={classes.occasion}>
                            <label htmlFor="typeOfOccasion">Any Occasion?</label>
                            <input
                                type="text"
                                name="typeOfOccasion"
                                id="typeOfOccasion"
                                value={formData.typeOfOccasion}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={classes.email_container}>
                            <label htmlFor="email">Email Address</label>
                            <input
                                className={classes.emailinput}
                                type="text"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={classes.first_name_container}>
                            <div className={classes.first_name}>
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    className={classes.firstinput}
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={classes.last_name_container}>
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    className={classes.lastinput}
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className={classes.message}>
                            <label htmlFor="message">Notes</label>
                            <textarea
                                className={classes.messageinput}
                                name="message"
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={classes.completepickup}>
                            <div className={classes.pickupevent}>
                                <label htmlFor="pickUpDate">Date of Pick Up</label>
                                <input
                                    className={classes.dateinput}
                                    type="date"
                                    name="pickUpDate"
                                    id="pickUpDate"
                                    value={formData.pickUpDate}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={classes.time}>
                                <label htmlFor="pickUpTime">Time of Pick Up</label>
                                <input
                                    className={classes.timeinput}
                                    type="time"
                                    name="pickUpTime"
                                    id="pickUpTime"
                                    value={formData.pickUpTime}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className={classes.phone}>
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input
                                type="text"
                                name="phoneNumber"
                                id="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit">Submit Order</button>
                    </div>
                </form>
            </div>
        </>
    );
}
