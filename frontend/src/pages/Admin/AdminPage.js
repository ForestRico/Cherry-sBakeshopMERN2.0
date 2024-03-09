import React, { useEffect, useState } from "react";
import classes from './adminPage.module.css';
import Title from "../../components/Title/Title";
import NotFound from "../../components/NotFound/NotFound";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const links = ['Forms']

export default function AdminPage() {

    return (
        <>
            <Title title="Admin Panel" margin="24px 12px" />
            <Navbar links={links}/>
            <Outlet />
        </>
    )
}