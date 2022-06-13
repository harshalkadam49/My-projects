import React from "react";
import "./style.css";
import Card from "./cardComponent";

function Services() {
  return (
    <div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <h1 className="aboutUsStyling">Our Services</h1>
            <h1 className="aboutUsLine d-flex justify-content-center"> </h1>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 mt-1">
                <div className="card">
                  <div className="card-body cardbodyStyling">
                    <i class="fa fa-comment fa-4x iconStyling "></i>
                    <h5 className="card-title mt-1">Awesome Support</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.npm
                    </p>
                    <a href="#" className="text-decoration-none">
                      Know More<span> </span>
                      <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12 mt-1">
                <div className="card">
                  <div className="card-body cardbodyStyling">
                    <i class="fa fa-eyedropper iconStyling "></i>
                    <h5 className="card-title mt-1">Unlimited Colors</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.npm
                    </p>
                    <a href="#" className="text-decoration-none">
                      Know More<span> </span>
                      <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12 mt-1">
                <div className="card">
                  <div className="card-body cardbodyStyling">
                    <i class="fa  fa-signal  fa-4x iconStyling "></i>
                    <h5 className="card-title mt-1">Strategy Solutions</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.npm
                    </p>
                    <a href="#" className="text-decoration-none">
                      Know More<span> </span>
                      <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12 mt-1">
                <div className="card">
                  <div className="card-body cardbodyStyling">
                    {/* <i class="fa fa-drafting-compass fa-4x iconStyling "></i> */}
                    <i class="fa fa-television fa-4x iconStyling"></i>
                    <h5 className="card-title mt-1">Digital Design</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.npm
                    </p>
                    <a href="#" className="text-decoration-none knowMore">
                      Know More<span> </span>
                      <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12 mt-1">
                <div className="card">
                  <div className="card-body cardbodyStyling">
                    <i class="fa fa-american-sign-language-interpreting fa-4x iconStyling "></i>
                    <h5 className="card-title mt-1">Easy to customize</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.npm
                    </p>
                    <a href="#" className="text-decoration-none">
                      Know More
                    </a><span> </span>
                      <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12 mt-1">
                <div className="card">
                  <div className="card-body cardbodyStyling">
                    <i class="fa fa-arrows fa-4x iconStyling "></i>
                    <h5 className="card-title mt-1">Multipurpose</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.npm
                    </p>
                    <a href="#" className="text-decoration-none">
                      Know More<span> </span>
                      <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
