import React from "react";
import "./style.css";
import seniorManagement from "./Images/seniorManagement.jpg"

function Testimony() {
  return (
    <section className="">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <h1 className="heading-1">Our Testimony</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row text-start">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="card mt-5 mb-4">
               <img className="testimonyImageStyling" src={seniorManagement}></img> 
              <div className="card-body">
                <h5 className="card-title">Senior Management</h5>
                {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="card-link">
                  <i
                    class="fa fa-facebook-square cardIcons"
                    aria-hidden="true"
                  ></i>
                  <i class="fa fa-github cardIcons" aria-hidden="true"></i>
                  <i
                    class="fa fa-google-plus-official cardIcons"
                    aria-hidden="true"
                  ></i>
                  <i class="fa fa-twitter cardIcons" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="card mt-5 mb-4">
               <img className="testimonyImageStyling" src={seniorManagement}></img> 
              <div className="card-body">
                <h5 className="card-title">Developer</h5>
                {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="card-link">
                  <i
                    class="fa fa-facebook-square cardIcons"
                    aria-hidden="true"
                  ></i>
                  <i class="fa fa-github cardIcons" aria-hidden="true"></i>
                  <i
                    class="fa fa-google-plus-official cardIcons"
                    aria-hidden="true"
                  ></i>
                  <i class="fa fa-twitter cardIcons" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="card mt-5 mb-4">
               <img className="testimonyImageStyling" src={seniorManagement}></img> 
              <div className="card-body">
                <h5 className="card-title">Graphic Designer</h5>
                {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="card-link">
                  <i
                    class="fa fa-facebook-square cardIcons"
                    aria-hidden="true"
                  ></i>
                  <i class="fa fa-github cardIcons" aria-hidden="true"></i>
                  <i
                    class="fa fa-google-plus-official cardIcons"
                    aria-hidden="true"
                  ></i>
                  <i class="fa fa-twitter cardIcons" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimony;
