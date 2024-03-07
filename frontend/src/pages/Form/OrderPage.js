import React, { useState } from 'react';
import axios from 'axios';

export default function OrderPage() {
    const [orderData, setOrderData] = useState({
        // Initialize form fields
        email: '',
        occasion: '',
        // Add more fields as needed
    });

    const handleChange = (e) => {
        setOrderData({ ...orderData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send form data to the backend
            const response = await axios.post('/', orderData); // Sending to root route
            console.log(response.data);
            // Handle response or redirect as needed
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="email"
                placeholder="Email"
                value={orderData.email}
                onChange={handleChange}
            />
            <input
                type="text"
                name="occasion"
                placeholder="Occasion"
                value={orderData.occasion}
                onChange={handleChange}
            />
            {/* Add more input fields for other form data */}
            <button type="submit">Submit</button>
        </form>
    );
}
