import React from "react";
import "./style.css";
import bannerImage from "./Images/zookiBanner-img.png";

function Banner() {
  return (
    <div className="mainHome">
      <div className="container homeContainer">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div>
              <h1 className="Heading homeTitle-1">Make Your Marketing Real</h1>
              <p className="subHeading homeTitle-2">
                Ut enim ad minima veniam quis nostrum exercitationem ullam
                corporis at suscipit laboriosam nisi ut aliquid a commodi
                consequatur Quis autem.
              </p>
              <button
                type="button"
                className="btn btn-warning float-start knowMorebtn"
              >
                Know More
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <img className="imgStyling mover-img" src={bannerImage}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
