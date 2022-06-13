import React from "react";
import "./style.css";
import blogImage_1 from "./Images/blogImages-1.jpg";
import blogImage_2 from "./Images/blogImages-2.jpg";
import blogImage_3 from "./Images/blogImages-3.jpg";

function Blogs() {
  return (
    <section className="container">
      <div className="col-12">
        <h1 className="m-5">Our Features</h1>
      </div>
      <div className="card-group row">
        <div className="card col-lg-4 col-md-4 col-sm-12 p-2 m-2">
          <img
            className="card-img-top"
            src={blogImage_1}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
            <button type="button" class="btn btn-outline-primary rounded-5">
              Visit Page
            </button>
          </div>
        </div>
        <div className="card col-lg-4 col-md-4 col-sm-12 p-2 m-2">
          <img
            className="card-img-top"
            src={blogImage_2}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.mhddjsakjdk akhak akssakj aqwqwoi.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
            <button type="button" class="btn btn-outline-primary rounded-5">
              Visit Page
            </button>
          </div>
        </div>
        <div className="card col-lg-4 col-md-4 col-sm-12 p-2 m-2">
          <img
            className="card-img-top"
            src={blogImage_3}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
            <button type="button" class="btn btn-outline-primary rounded-5">
              Visit Page
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
