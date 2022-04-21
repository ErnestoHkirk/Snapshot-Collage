import React from "react";

class ImageListLoadMore extends React.Component {
  constructor(props) {
    super(props);
    this.buttonRef = React.createRef();

    this.state = { toggleLoadMore: false };
  }

  onUserClick = () => {
    this.props.load(this.state.toggleLoadMore);
    if (this.state.toggleLoadMore === false) {
      this.setState({ toggleLoadMore: true });
    } else {
      this.setState({ toggleLoadMore: false });
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  componentDidMount() {
    this.buttonRef.current.style.display = "none";
  }

  componentDidUpdate() {
    this.buttonRef.current.style.display = "block";
  }

  render() {
    return (
      <div ref={this.buttonRef}>
        <button className="big ui blue button" onClick={this.onUserClick}>
          Load More Results
        </button>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}
export default ImageListLoadMore;
