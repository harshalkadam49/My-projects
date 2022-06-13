import React from "react";
import "./style.css"
import strategySolutions from "./Images/strategySolutions.png"

function Strategy(){
    return(
        <div className="">
      <div className="container">
        <div className="col-12">
          <h1 className="m-5">Our Performance</h1>
        </div>
        <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
            <img className="" src={strategySolutions} ></img>
          </div>
          <div className="col-lg-6 col-md-12">
            <div>
              <h1 className="Heading featuresHeading">
                Performancect Solution For Small Businesses
              </h1>
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
                    AboutUs<span> </span><i class="fa fa-angle-right" aria-hidden="true"></i>
                  </a>
                </h3>
              </h2>
            </div>
          </div>
          </div>
      </div>
    </div>
    );
}

export default Strategy;