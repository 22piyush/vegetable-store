import React from "react";
import "./FoodCard.css";
import { Theme } from "../../config/Data";

function FoodCard({imgUrl, title, description,price }) {
  return (
    <div className="main-cards" >
      <img src={imgUrl} className="main-image"/>
      <h2 style={{color:Theme.heading}} >{title}</h2>
      <p className="food-details" style={{color:Theme.tertiary}}>{description}</p>
         
      {
        price ?
        <p className="prices">Rs. {price}</p>
        : "NA"
      } 

      <button className="food-button">Buy Now</button>  

    </div>
  );
}

export default FoodCard;
