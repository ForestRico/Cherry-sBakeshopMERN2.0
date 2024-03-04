import React from 'react';
import { Link } from 'react-router-dom';
import classes from './header.module.css';
import { useCart } from '../../hooks/useCart';

export default function Header() {
    const { cart } = useCart();

    const logout = () => {};

    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <Link to="/" className={classes.logo}>
                    Cherry's Bakeshop
                </Link>
                <nav>
                    <ul>
                        {/* Link to Profile page */}
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                        {/* Link to Orders page */}
                        <li>
                            <Link to="/orders">Orders</Link>
                        </li>
                        {/* Logout */}
                        <li>
                            <a onClick={logout}>Logout</a>
                        </li>
                        {/* Link to Cart */}
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
