import React, { useState } from "react";
import axios from "axios";
import classes from './formPage.module.css'
import Title from "../../components/Title/Title";
import { useCart } from "../../hooks/useCart";
import { Link } from "react-router-dom";
import Price from "../../components/Price/Price";

export default function FormPage() {
    const { cart } = useCart();
    const [formData, setFormData] = useState({
        email: "",
        address: "",
        occasion: "",
        firstName: "",
        lastName: "",
        message: "",
        pickUpDate: "",
        pickUpTime: "",
        phoneNumber: "",
        items: [] // Array to store food item details
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Add food item details to formData
            const updatedFormData = { ...formData, items: cart.items };
            
            // sends form data to the backend
            const response = await axios.post("/api/orders", updatedFormData);
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
                            <li>
                                <div className={classes.food_total_price}>
                                Total Price: $    <Price price={cart.totalPrice} />
                                </div>
                            </li>
                        </li>
                    </ul>
                
                    <div className={classes.submissionbox}>
                        {/* Remaining form fields */}
                    </div>
                    <button type="submit">Submit Order</button>
                </form>
            </div>
        </>
    );
}
