import React from "react";
import "./style.css";

function AboutUs() {
  return (
    <div className="container aboutBackgroundImage">
      <div className="row align-items-center">
        <div className="col-12">
          <h1 className="aboutUsStyling">About US</h1>
          <h1 className="aboutUsLine d-flex justify-content-center"> </h1>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <i
                    class="fa fa-pencil fa-4x iconStyling "
                    aria-hidden="true"
                  ></i>
                  <h5 className="card-title mt-1">Creative Design</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.npm
                  </p>
                  <a href="#" className="btn btn-warning">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <i class="fa fa-line-chart fa-4x iconStyling"></i>
                  <h5 className="card-title mt-1">Strategy</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.npm
                  </p>
                  <a href="#" className="btn btn-warning">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <i class="fa fa-hourglass-start fa-4x iconStyling"></i>
                  <h5 className="card-title mt-1">Dynamic Growth</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.npm
                  </p>
                  <a href="#" className="btn btn-warning">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
