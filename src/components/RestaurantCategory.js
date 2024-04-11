import React, { useState, useEffect, useRef } from "react";
import ItemList from "./ItemList";
export default function RestaurantCategory({ data, toggle, setShowIndex }) {
  // const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();
  const refHeight = useRef();

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  const toggleState = () => {
    setShowIndex(!toggle);
  };

  const handleContentClick = () => {
    console.log("Content area clicked");
  };
  return (
    <div className="accordion">
      <button onClick={toggleState} className="accordion-visible">
        <span>
          {data.title}({data.itemCards?.length})
        </span>
        <span className={toggle && "active"}>🔽</span>
      </button>
      <div
        className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
        style={{ height: toggle ? `${heightEl}` : "0px" }}
        ref={refHeight}
        onClick={handleContentClick}
      >
        <ItemList items={data?.itemCards} />
      </div>
    </div>
  );
}
