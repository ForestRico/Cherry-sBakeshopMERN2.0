import React, { useEffect } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import classes from './loginPage.module.css'
import Title from "../../components/Title/Title";

export default function LoginPage() {
  const {
    handleSubmit, // responsible for calling the submit function when there is no validation error
    register,
    formState: { errors },
  } = useForm();

  // after successful login, navigate users to another path
// ***** REVISE ALL THIS CODE *****
  const navigate = useNavigate();
  const { user, login } = useAuth();
  const [params] = useSearchParams();
  const returnUrl = params.get('returnUrl');

  // inside the useEffect there is a handler and its first line we'll check if the user is null or undefined, but if the user is not null 
  // if we have a return url inside the query string of the path then we need to navigate to the 'returnUrl' and with no returnUrl it will navigate to the homepage ('/')
  // this prevents users from seeing the log in page when they are already logged in. 
    useEffect (() => {
      if (!user) return;
      returnUrl ? navigate(returnUrl) : navigate('/');
    }, [user]);

    const submit = async ({ email, password }) => {
      await login(email, password);
    };

  return ( 
    <div className={classes.container}>
      <div className={classes.details}>
        <Title title="Login" />
      </div>  
    </div>
  );
}
