import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  if (!items) {
    return <div>No items to display</div>;
  }
  return (
    <div>
      <div>
        {items.map((item) => {
          return (
            <div className="item-container" key={item?.card?.info?.id}>
              <div className="container">
                <div className="left">
                  <span>{item?.card?.info?.name} - </span>
                  <span>Rs. {item?.card?.info?.price / 100}.00</span>
                  <div>
                    <p>{item?.card?.info?.description}</p>
                  </div>
                </div>
                <div className="right">
                  <button className="image-button">Add + </button>
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
      </div>
    </div>
  );
};

export default ItemList;
