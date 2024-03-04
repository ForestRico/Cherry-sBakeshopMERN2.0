import React from "react";
import classes from './checkoutPage.module.css'
import Title from "../../components/Title/Title";
import { useCart } from "../../hooks/useCart";
import { Link } from "react-router-dom";
import Price from "../../components/Price/Price";
export default function CheckoutPage() {
    const { cart } = useCart();
    return (
    <>
    
        <Title title="Order and Quote Form" margin="1.5rem 0 0 2.5rem" />
        
            <div className={classes.container}>
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
                            Quantity: {item.quantity}</div>
                            
                            <div className={classes.food_count_total}>
                            Total: $<Price price={item.price} /></div> 
                    
                        </li>
                       ))}
                        <li>
                            <div className={classes.food_total_price}>
                            Total Price: $    <Price price={cart.totalPrice} />
                            </div>
                        </li>
             
            </ul>
            </div>
        </>
        );
    }