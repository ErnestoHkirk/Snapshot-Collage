//import "./ImageList.css";
import React, { useState } from "react";

const NameCollection = (props) => {
  let info = React.createRef();

  var [collectionName, setName] = useState([]);

  function submit(event) {
    event.preventDefault();
    console.log("yes");
    info.current.style.display = "none";
    props.name(collectionName);
  }

  return (
    <div>
      <div ref={info} className="ui segment" style={{ background: "#F7B733" }}>
        <form className="ui medium form" onSubmit={submit}>
          <label>Name your collection</label>
          <div className="field">
            <input
              type="text"
              placeholder="My Collection"
              value={collectionName}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NameCollection;
