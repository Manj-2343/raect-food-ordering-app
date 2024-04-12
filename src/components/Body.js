import React, { useState, useEffect, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/UseOnlineStatus";
import useRestaurantData from "../utils/useRestaurantData";
// import {withPromotedLabel} from "./RestaurantCard";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const {
    listOfRestaurants,
    setListOfRestaurants,
    filteredRestaurant,
    setFilteredRestaurant,
  } = useRestaurantData();
  const onLineStatus = useOnlineStatus();

  if (onLineStatus === false)
    return <h1>Looks Like You are Off line!! please check your internet </h1>;

  /**set the higher order component=>here the withPromotedLabel is the higher order component
   * const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
   */

  const { loggedInUser, setUserName } = useContext(UserContext);
  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="filter">
          <div className="search">
            <input
              type="text"
              className="search-box"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="search-button"
              onClick={() => {
                const filteredRestaurant = listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filteredRestaurant);
              }}
            >
              Search
            </button>
          </div>
          {/* Modify your context */}
          <div className="search">
            <input 
              className="search-box"
              placeholder="Search..."
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <button
            className="filter-btn"
            onClick={() => {
              filteredList = listOfRestaurants.filter(
                (res) => parseFloat(res?.info?.avgRatingString) > 4.5
              );
              setListOfRestaurants(filteredList);
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="res-container">
          {filteredRestaurant &&
            filteredRestaurant.map((restaurant) => (
              <Link
                to={"/restaurants/" + restaurant?.info?.id}
                key={restaurant.info.id}
                className="link-without-underline"
              >
                {/* if the restaurant is promoted then add a promoted label to it
                 *restaurant.info.promoted ? <RestaurantCardPromoted resData={restaurant} /> :  <RestaurantCard resData={restaurant} />
                 */}
                <RestaurantCard resData={restaurant} />
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default Body;
