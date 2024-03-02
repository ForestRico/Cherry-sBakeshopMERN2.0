import React from "react";
import { Link } from "react-router-dom";
import classes from "./thumbnails.module.css";
import StarRating from "../StarRating/StarRating";
// PropTypes help catch errors related to incorrect proptypes or missing props.
// import PropTypes from "prop-types";

export default function Thumbnails({ foods }) {
  return (
    <ul className={classes.list}>
      {foods.map(food => (
        <li key={food.id}> 
          <Link to={`/food/${food.id}`}>
            <img 
              className={classes.image}
              src={`/foods/${food.imageUrl}`} 
              alt={food.name}
            />
          </Link>
          <div className={classes.content}>
            <div className={classes.name}>{food.name}</div>
            <span 
              className={`${classes.favourite} ${
                food.favourite ? '': classes.not
              }`}
            >
              ❤
            </span>
            <div className={classes.stars}>
              <StarRating stars={food.stars} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

// Thumbnails.propTypes = {
//   foods: PropTypes.array.isRequired,
// };

// By adding PropTypes, you ensure that the foods prop is required and must be an array. This can help catch potential issues during development.
// Double-check how Thumbnails is used in the HomePage component and ensure that the data is being passed correctly.
