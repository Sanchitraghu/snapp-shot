import React from "react";
import Image from "../Imagess/Image";
import "./Item.module.css";

const Item = (props) => {
  return (
    <div>
      <h1>{props.heading} Images</h1>
      <div>
        <Image data={props.data} />
      </div>
    </div>
  );
};

export default Item;
