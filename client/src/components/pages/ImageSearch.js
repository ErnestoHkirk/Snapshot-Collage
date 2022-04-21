import React from "react";
import SearchBar from "../ImageList/SearchBar";
import ImageList from "../ImageList/ImageList";
import ImageListLoadMore from "../ImageList/ImageListLoadMore";
import ImageListButtons from "../ImageList/ImageListButtons";
import ImageInfo from "../ImageList/ImageInfo";
// import axios from "axios";
// import Image from "../images/transparent.png";

class ImageSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      images2: [],
      imageBuffer: [],
      addedImages: [],
      clearSelected: false,
    };
  }
  // componentDidMount() {
  //   console.log("page loaded");
  //   this.onSearchSubmit("frogs");
  // }

  createTermWithProxy(term) {
    term = term.replace(/\s/g, "+");
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const urlp1 = "https://www.qwant.com/?t=images&q=";
    const urlp2 = "&size=medium";
    const fullurl = proxy + urlp1 + term + urlp2;

    return fullurl;
  }

  onSearchSubmit = async (term) => {
    console.log("Attempting to search..");
    const url = "/fetch_image/?search=" + term;
    console.log(url);

    // axios
    //   .get(url)
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error.response.data);
    //   });

    //var proxyURL = this.createTermWithProxy(term);

    const response = await fetch(url);
    const text = await response.text();

    var parser = new DOMParser();
    var doc = parser.parseFromString(text, "text/html");

    var imageElement = doc.getElementsByClassName(
      "Images-module__ImagesGridItem___1W4Bs"
    );

    var imageArray = [];
    for (var i = 0; i < 20; i++) {
      imageArray.push(imageElement[i].children[0].children[0].src);
    }
    this.setState({ images: imageArray });

    var imageArray2 = [];
    for (var y = 20; y < 40; y++) {
      imageArray2.push(imageElement[y].children[0].children[0].src);
    }
    this.setState({ images2: imageArray2 });
  };

  onLoadMore = (param) => {
    var tempArray = [];
    tempArray = this.state.images;

    if (param === true) {
      this.setState({ images: this.state.images2 });
      this.setState({ images2: tempArray });
    } else {
      this.setState({ images: this.state.images2 });
      this.setState({ images2: tempArray });
    }
    this.onClearSelections();
  };

  onImageSelect = (param) => {
    var exists = false;

    for (var i = 0; i <= this.state.imageBuffer.length; ++i) {
      if (this.state.imageBuffer[i] === param) {
        // console.log("already added");
        exists = true;
        break;
      }
    }

    if (!exists) {
      //console.log("image(s) did not exist, adding now..");
      this.setState({ imageBuffer: [...this.state.imageBuffer, param] }, () => {
        //console.log(this.state.imageBuffer);
      });
    }
  };

  onImageDeselect = (param) => {
    const index = this.state.imageBuffer.indexOf(param);
    if (index > -1) {
      this.state.imageBuffer.splice(index, 1);
    }
  };

  onAddImages = (ref) => {
    ref.current.innerText = "+" + this.state.imageBuffer.length;
    ref.current.style.opacity = "1";
    setTimeout(() => {
      ref.current.style.opacity = "0";
    }, 1000);

    this.setState(
      { addedImages: this.state.addedImages.concat(this.state.imageBuffer) },
      () => {
        this.onClearSelections();
      }
    );
  };

  onClearSelections = () => {
    //console.log("on clear selections");
    var emptyArray = [];

    this.setState({ imageBuffer: emptyArray }, () => {
      //console.log(this.state.imageBuffer);
    });

    this.setState({ clearSelected: true }, () => {
      this.setState({ clearSelected: false });
    });
  };

  onGenerate = () => {
    console.log("success!");
    this.props.onGenerate(this.state.addedImages);
  };

  myConsolelog = () => {
    console.log("image buffer: ");
    console.log(this.state.imageBuffer);

    console.log("added images: ");
    console.log(this.state.addedImages);

    // console.log("imageRefs: ");
    // console.log(this.state.imageRefs);
    // <button className="simple button" onClick={this.myConsolelog}>
    //       console.log
    // </button>
  };

  render() {
    //const { totalReactPackages } = this.state;
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageListButtons
          onAddImages={this.onAddImages}
          onClearSelections={this.onClearSelections}
          onGenerate={this.onGenerate}
        />
        <ImageList
          images={this.state.images}
          onImageSelect={this.onImageSelect}
          onImageDeselect={this.onImageDeselect}
          clearSelected={this.state.clearSelected}
        />
        <ImageListLoadMore load={this.onLoadMore} />
        <ImageInfo />
      </div>
    );
  }
}

export default ImageSearch;
