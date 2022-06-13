import React from "react";
import "./style.css"

// Yet to be use

function Card(){
    return(
        <div className="col-lg-4 col-md-4 col-sm-12 mt-1">
                <div className="card">
                  <div className="card-body cardbodyStyling">
                    <i class="fa fa-car fa-4x iconStyling "></i>
                    <h5 className="card-title mt-1">Creative Design</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.npm
                    </p>
                    <a href="#" className="text-decoration-none">
                      Know More
                    </a>
                    </div>
                </div>
              </div>
    );
}

export default Card;