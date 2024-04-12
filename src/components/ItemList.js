import React, { useEffect } from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handelAddItem = (item) => {
    dispatch(addItems(item));
  };
  if (!items) {
    return <div>No items to display</div>;
  }
  return (
    <>
      {items.map((item) => {
        return (
          <div className="item-container" key={item?.card?.info?.id}>
            <div className="container">
              <div className="left">
                <span>{item?.card?.info?.name} - </span>
                <span>
                  Rs.{" "}
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                  .00
                </span>
                <div>
                  <p>{item?.card?.info?.description}</p>
                </div>
              </div>
              <div className="right">
                <button
                  className="image-button"
                  onClick={() => handelAddItem(item)}
                >
                  Add +
                </button>
                <img
                  src={CDN_URL + item?.card?.info?.imageId}
                  alt="my image"
                  className="image"
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ItemList;
