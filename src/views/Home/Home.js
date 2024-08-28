import React from "react";
import "./Home.css";
import FoodCard from "../../component/FoodCard/FoodCard";
import { foods, TagLine, Theme } from "../../config/Data";
import { StoreName } from "../../config/Data";

function Home() {
  return (<>
    <div> 
      <h1 className="title" style={{color:Theme.heading}}>{StoreName}</h1>
      <p className="sub-title" style={{color:Theme.secondary}}>{TagLine}</p>
    <div className="component-container">
      {foods.map((foodItem)=>{
         return <FoodCard
         imgUrl={foodItem.imgUrl}
         title={foodItem.title}
         description={foodItem.description}
         price={foodItem.price}
       />
      })}
    </div>
    </div>
    </> );
}

export default Home;
