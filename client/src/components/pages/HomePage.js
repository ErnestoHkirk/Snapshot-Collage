import React from "react";
import { useNavigate } from "react-router-dom";
import "../Homepage.css";
import library from "../images/TrinityLibrary.jpg";
import test from "../images/photographs.jpg";
import test2 from "../images/sample-collage.jpg";
import jurrasic from "../images/jurrasic-park-wide.jpg";
import { Link } from "react-router-dom";

function HomePage() {
  let navigate = useNavigate();

  function onButtonClick() {
    navigate("/image-search");
  }

  return (
    <div>
      <div
        className="ui inverted vertical masthead center aligned segment"
        style={{ backgroundImage: `url(${library})`, backgroundSize: "cover" }}
      >
        <div className="ui text container">
          <h1 className="ui inverted header">Snapshot Collage</h1>
          <h2>Rebuilding your past.</h2>
          <div className="ui huge primary button" onClick={onButtonClick}>
            Get Started <i className="right arrow icon"></i>
          </div>
        </div>
      </div>
      <div className="ui vertical stripe segment">
        <div className="ui middle aligned stackable grid container">
          <div className="row">
            <div className="nine wide left floated column">
              <img
                className="ui massive bordered rounded image"
                alt="sample collage"
                src={test}
              />
            </div>
            <div className="six wide column">
              <h1 className="ui header">What is Snapshot Collage?</h1>
              <p>
                Snapshot collage is a place to catalogue everything you've
                watched, read, or heard that you feel is worth remembering.
              </p>
              <br></br>
              <p>
                Life moves so fast; it's easy to let things you've experienced
                slip through the cracks of your mind.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="ui vertical stripe segment">
        <div className="ui middle aligned stackable grid container">
          <div className="row">
            <div className="six wide column">
              <h3 className="ui header">How does it work?</h3>
              <p>
                Perhaps you're interested in revisiting your favorite movies.
                Simply search for images, select the ones that speak most to
                you, then click "Add Images."
              </p>
              <br></br>
              <p>
                Continue searching and adding images until you feel you're ready
                to generate your collage. Then click "Generate Collage."
              </p>
            </div>
            <div className="nine wide right floated column">
              <img
                className="ui massive bordered rounded image"
                alt="sample collage"
                src={jurrasic}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="ui vertical stripe segment">
        <div className="ui middle aligned stackable grid container">
          <div className="row">
            <div className="nine wide left floated column">
              <img
                className="ui massive bordered rounded image"
                alt="sample collage"
                src={test2}
              />
            </div>
            <div className="six wide column">
              <h1 className="ui header">Your Collage</h1>
              <p>
                Success! You've created your collage. Now hit the download
                button to save the images to your computer.
              </p>
              <br></br>
              <p>
                You can now create a new collage by navigating back to the
                'Search' page, however doing so will remove your old collage
                from this website. So make sure that you have your old collage
                downloaded prior to creating a new one.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="center aligned column">
              <br></br>
              <div className="ui huge button" onClick={onButtonClick}>
                Build Your Collage
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ui vertical stripe segment">
        <div className="ui text container">
          <h3 className="ui header">Thanks for visiting this site!</h3>
          <p>
            If you would like to learn about how this site was made, feel free
            to click here.
          </p>
          <a
            className="ui large button"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ErnestoHkirk/Snapshot-Collage"
          >
            Github Repository
          </a>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
