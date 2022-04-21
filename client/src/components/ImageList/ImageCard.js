import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0,
      isChecked: false,
      setChecked: false,
    };
    this.imageRef = React.createRef(); // instance variable, not state
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  componentDidUpdate() {
    if (this.props.clearSelected === true) {
      //console.log("i've been asked to clear");
      this.setState({ isChecked: false });
      this.setState({ setChecked: false });
      this.imageRef.current.style.border = null;
    } else {
      //console.log("no clear");
    }
  }

  setSpans = () => {
    // bounded callback
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 2);
    this.setState({ spans: spans });
  };

  onUserClick = (e) => {
    if (e.target.style.border) {
      //console.log("has border");
      e.target.style.border = null;
    } else {
      //console.log("no border");
      e.target.style.border = "6px solid #2fbcdf";
    }
  };

  handleOnChange = () => {
    if (this.state.isChecked) {
      //console.log("was checked");
      this.setState({ isChecked: false }, () => {
        this.setState({ setChecked: this.state.isChecked }, () => {
          this.props.onImageDeselect(this.props.image);
        });
      });
    } else {
      //console.log("was not checked");
      this.setState({ isChecked: true }, () => {
        this.setState({ setChecked: this.state.isChecked }, () => {
          this.props.onImageSelect(this.props.image);
        });
      });
    }
  };

  onClear = () => {
    if (this.props.clearSelected === true) {
      console.log("i've been asked to clear");
    } else {
      console.log("no clear");
    }
  };

  render() {
    return (
      <div
        className="cont-checkbox"
        style={{ gridRowEnd: `span ${this.state.spans}` }}
      >
        <input
          type="checkbox"
          id={`myCheckbox-${this.props.labelId}`}
          className="css-checkbox"
          checked={this.state.isChecked}
          onChange={this.handleOnChange}
        />
        <label
          htmlFor={`myCheckbox-${this.props.labelId}`}
          className="css-label"
        >
          <img
            onClick={this.onUserClick}
            ref={this.imageRef}
            alt={"imageResult"}
            src={this.props.image}
          />
        </label>
      </div>
    );
  }
}

export default ImageCard;
