import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, slaString, costForTwo } = resData.info;

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
        <h4>{avgRating}stars</h4>
        <h4>₹{costForTwo / 100}for Two</h4>
        <h4>{slaString}</h4>
      </div>
    </>
  );
};

export default RestaurantCard;
