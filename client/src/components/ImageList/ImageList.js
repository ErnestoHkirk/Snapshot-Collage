import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  var id = 0;
  const images = props.images.map((image) => {
    ++id;
    if (image) {
      return (
        <ImageCard
          key={id}
          image={image}
          labelId={id}
          onImageSelect={onImageSelect}
          onImageDeselect={onImageDeselect}
          clearSelected={props.clearSelected}
        />
      );
    }
  });

  function onImageSelect(param) {
    props.onImageSelect(param);
  }

  function onImageDeselect(param) {
    props.onImageDeselect(param);
  }
  return (
    <div>
      <div className="image-list">{images}</div>
    </div>
  );
};

export default ImageList;
