import React from "react";
import DisplayCard from "./DisplayCard";
import "./DisplayList.css";

const DisplayList = (props) => {
  var id = 0;
  const images = props.images.map((image) => {
    ++id;
    if (image) {
      return <DisplayCard key={id} image={image} labelId={id} />;
    }
  });

  return (
    <div>
      <div className="display-list">{images}</div>
    </div>
  );
};

export default DisplayList;
