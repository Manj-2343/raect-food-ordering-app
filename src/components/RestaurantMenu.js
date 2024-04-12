import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  if (resInfo === null || resInfo === undefined) return <Shimmer />;
  const { name, city, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="menu">
      <h1 className="headingName">{name}</h1>
      <h2 className="headingName">{city}</h2>
      <h5 className="cuisines">
        {cuisines.join(" , ")} - {costForTwoMessage}
      </h5>
      <h2 className="menuItem">Menu</h2>
      <ul className="accordion">
        {categories.map((category, index) => {
          return (
            <React.Fragment key={index}>
              <RestaurantCategory
                data={category?.card?.card}
                toggle={index === showIndex && true}
                setShowIndex={() => setShowIndex(index)}
              />
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
