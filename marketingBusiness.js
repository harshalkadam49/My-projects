import React from "react";
import "./style.css"
import marketingBusiness from "./Images/marketingBusiness.png"

function Marketing() {
    return(
        <div className="">
      <div className="container">
        <div className="col-12">
          <h1 className="m-5">Our Features</h1>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div>
              <h1 className="Heading featuresHeading">Marketing Performance</h1>
              <p className="subHeading">
                Temporibus autem quibusdam a aut officiis debitis rerum
                necessitatibus saepeeveniet ut et volupt.aut officiis debitis
                rerum necessitatibus saepeeveniet ut et volupt.busdam a aut
                officiis debitis rerum necessitatibus saepeeveniet ut et volupt.
              </p>
              <h2>
                <h3 className="subHeading">
                  Learn More{" "}
                  <a href="#" className="text-warning text-decoration-none">
                    Our Performance <span> </span>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </a>
                </h3>
              </h2>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
          {/* <img className="z-index-1 backgroundImages" src={performanceBackground}></img> */}
            
            <img className="" src={marketingBusiness}></img>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Marketing;