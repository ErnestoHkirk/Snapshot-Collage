import React from "react";

class DisplayCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0,
      isChecked: false,
      setChecked: false,
    };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1);
    this.setState({ spans: spans });
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
        />
        <label
          htmlFor={`myCheckbox-${this.props.labelId}`}
          className="css-label"
        >
          <img ref={this.imageRef} alt={"imageResult"} src={this.props.image} />
        </label>
      </div>
    );
  }
}

export default DisplayCard;
