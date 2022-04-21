import React from "react";
import { useNavigate } from "react-router-dom";

const FinishAdding = (props) => {
  let navigate = useNavigate();

  function onButtonClick() {
    navigate("/display-collection");
    props.onGenerate();
  }

  return (
    <div>
      <button className="big grey ui button" onClick={onButtonClick}>
        <i className="check square outline"></i>
        Generate Collage
      </button>
    </div>
  );
};

export default FinishAdding;
