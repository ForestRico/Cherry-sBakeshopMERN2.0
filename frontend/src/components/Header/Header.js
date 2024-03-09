import React from 'react';
import { Link } from 'react-router-dom';
import classes from './header.module.css';
import { useCart } from '../../hooks/useCart';

export default function Header() {
    const { cart } = useCart();

    // const logout = () => {};

    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <Link to="/" className={classes.logo}>
                    <img src="/logo/logo.jpg" alt="Cherry's Bakeshop Logo" className="logo-img" />
                </Link>
                <nav>
                    <ul>
                        <li>
                            <Link to="/about us">About Us</Link>
                        </li>
                        <li>
                            <Link to="/faq">FAQ</Link>
                        </li>
                        <li>
                            <Link to="/log in">Log In</Link>
                        </li>
                        <li>
                            <Link to="/cart">
                                Cart
                                {cart.totalCount > 0 && (
                                    <span className={classes.cart_count}>{cart.totalCount}</span>
                                )}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
