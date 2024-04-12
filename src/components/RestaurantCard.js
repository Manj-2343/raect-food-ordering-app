import React from "react";
import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRatingString, slaString, locality } = resData.info;

  return (
    <>
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          src={CDN_URL + resData.info.cloudinaryImageId}
          alt="food"
          className="res-logo"
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRatingString} stars</h4>
        <h4>{locality}</h4>
        <h4>{slaString}</h4>
      </div>
    </>
  );
};
/*
Higher order Component
// input-Restaurant-Card => Restaurant-Card-Promoted
 export const withPromotedLabel = (RestaurantCard)=>{
  return (props)=>{
      return(
        <label>Promoted</label>
        <RestaurantCard {...props}/>
      )
  }
}

*/

export default RestaurantCard;
