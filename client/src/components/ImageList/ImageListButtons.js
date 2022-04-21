import "./ImageList.css";
import React from "react";
import FinishAdding from "./ImageListFinish";

class ImageListButtons extends React.Component {
  constructor(props) {
    super(props);
    this.buttonAddImageRef = React.createRef();
    this.buttonRef = React.createRef();
  }

  componentDidMount() {
    this.buttonRef.current.style.display = "none";
  }

  componentDidUpdate() {
    this.buttonRef.current.style.display = "block";
  }

  onAddImages = (event) => {
    event.preventDefault();
    console.log("clicked.");
    this.props.onAddImages(this.buttonAddImageRef);
  };

  onClearSelections = (event) => {
    event.preventDefault();
    console.log("clicked.");
    this.props.onClearSelections();
  };

  onGenerate = () => {
    this.props.onGenerate();
  };

  render() {
    return (
      <div ref={this.buttonRef}>
        <br></br>
        <div className="inputs">
          <div className="add images">
            <button className="big ui green button" onClick={this.onAddImages}>
              <i className="plus icon"></i>
              Add Images
            </button>
            <span
              ref={this.buttonAddImageRef}
              className="mybadge"
              style={{ opacity: 0 }}
            >
              0
            </span>
          </div>
          <button className="big ui button" onClick={this.onClearSelections}>
            <i className="sync alternate icon"></i>
            Clear Selections
          </button>
          <FinishAdding onGenerate={this.onGenerate} />
        </div>
        <br></br>
      </div>
    );
  }
}
export default ImageListButtons;
