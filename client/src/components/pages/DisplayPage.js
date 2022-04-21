import React, { useState } from "react";
import DisplayList from "../DisplayImages/DisplayList";
import NameCollection from "../DisplayImages/NameCollection";
import JSZip from "jszip";
import JSZipUtils from "jszip-utils";
import { saveAs } from "file-saver";

function DisplayPage(props) {
  let info = React.createRef();

  var [collectionName, setName] = useState("");

  // function myConsole() {
  //   console.log(props.images);
  // }
  // <button onClick={myConsole}></button>

  function onSubmit(param) {
    info.current.style.padding = "50px";
    setName("My " + param + " collage");
  }

  function download() {
    //console.log("downloading..");

    // var urls = [
    //   "https://cors-anywhere.herokuapp.com/https://s2.qwant.com/thumbr/474x422/c/0/34ad27f38ae93c3494720b3c94b0b84488f82101f1e1293a5eac1f004ccad7/th.jpg?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.bWN7-RzjOnrHVNgfuDWUjQHaGm%26pid%3DApi&q=0&b=1&p=0&a=0.png",
    //   "https://cors-anywhere.herokuapp.com/https://pngimage.net/wp-content/uploads/2018/06/react-icon-png-7.png",
    // ];
    var urls2 = props.images;
    var urls = [];

    urls = urls2.map(
      (name, index) =>
        (urls[
          index
        ] = `https://snapshot-collage-cors-proxy.herokuapp.com/${name}.png`)
    );

    var nombre = "Zip_img";

    compressed_img(urls, nombre);
    function compressed_img(urls, nombre) {
      var zip = new JSZip();
      var count = 0;
      var name = nombre + ".zip";
      urls.forEach(function (url) {
        JSZipUtils.getBinaryContent(url, function (err, data) {
          if (err) {
            throw err;
          }
          var filename = url.replace(/.*\//g, "");
          filename = count + ".png";
          zip.file(filename, data, { binary: true, createFolders: true });
          count++;

          if (count === urls.length) {
            zip
              .generateAsync({
                type: "blob",
              })
              .then(function (content) {
                saveAs(content, name);
              });
          }
        });
      });
    }
  }

  return (
    <div className="ui container">
      <br></br>
      <NameCollection name={onSubmit} />
      <div ref={info} className="title">
        {collectionName}
      </div>
      <div style={{ padding: "20px" }}>
        <button onClick={download}>Download All</button>
      </div>
      <DisplayList images={props.images} />
      <div className="fullscreen" />
    </div>
  );
}

export default DisplayPage;
