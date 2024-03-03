import React, { useEffect, useState } from "react";
import classes from './foodPage.module.css'
import { useParams } from "react-router-dom";
import { getByID } from "../../../services/foodService";



export default function FoodPage() {
    const [food, setFood] = useState({}); /* Initialising state variable 'food' using 'useState' */
    const {id} = useParams(); /* Extracts the 'id' parameter from the URL using the 'useParams' hook provided by ReactRouter. The 'id' parameter is used to identify the specific food item to fetch */

//'useEffect' hook is triggered when the 'id' parameter changes, it calls the 'getByID' function with the 'id' parameter to fetch the detaisl of the food item. When data is fetched it updates the 'food' state using the 'setFood' Function.
    useEffect(() => {
        getByID(id).then(setFood);
    }, [id]);
  return ( 
    <>
        { food && (
            <div className={classes.container}>
                <img
                    className={classes.image}
                    src={`/foods/${food.imageUrl}`}
                    alt={food.name}
                />

                <div className={classes.details}>
                    <div className={classes.header}>
                        <span className={classes.name}>{food.name}</span>
                        <span
                            className={`${classes.favourite}} ${
                                food.favourite ? '' : classes.not
                            }`}
                        >
                            ❤️
                        </span>
                    </div>
                </div>
            </div>
        )}
    </>
  );  
}