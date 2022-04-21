import "./ImageList.css";
import React, { useEffect, useRef } from "react";

const ImageInfo = () => {
  let info = React.createRef();

  const didMountRef = useRef(false);
  useEffect(() => {
    if (didMountRef.current) {
      info.current.style.display = "none";
    } else {
      didMountRef.current = true;
    }
  });

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  var ideas = [
    'Search for something fun, like "Scooby Doo!"',
    '"Yu-gi-oh." Look into it.',
    "Lemurs are cute. Just a thought.",
  ];

  return (
    <div ref={info} style={{ display: "block" }}>
      <div className="fullscreen" />
      <div
        className="ui segment"
        style={{ textAlign: "center", opacity: "0.5" }}
      >
        <div className="ui icon header">
          <i className="search icon"></i>
          {ideas[getRandomInt(3)]}
        </div>
      </div>
    </div>
  );
};

export default ImageInfo;
