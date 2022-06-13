import React from "react";
import "./style.css";

function Footer(){
    return(
        <section className="">
  {/* <!-- Footer --> */}
  <footer className="bg-secondary text-white text-center text-md-start">
    {/* <!-- Grid container --> */}
    <div className="container p-4">
      {/* <!--Grid row--> */}
      <div className="row">
        {/* <!--Grid column--> */}
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase">About Us</h5>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
            molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
            aliquam voluptatem veniam, est atque cumque eum delectus sint!
          </p>
        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">COMPANY</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white text-decoration-none">Monitoring Grader</a>
            </li>
            <li>
              <a href="#!" className="text-white text-decoration-none footerLinkStyle">Job Opening</a>
            </li>
            <li>
              <a href="#!" className="text-white text-decoration-none footerLinkStyle">Customers</a>
            </li>
            <li>
              <a href="#!" className="text-white text-decoration-none footerLinkStyle">Privacy</a>
            </li>
          </ul>
        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-0">SUPPORT</h5>

          <ul className="list-unstyled">
            <li>
              <a href="#!" className="text-white text-decoration-none footerLinkStyle">Get Started</a>
            </li>
            <li>
              <a href="#!" className="text-white text-decoration-none footerLinkStyle">Blog</a>
            </li>
            <li>
              <a href="#!" className="text-white text-decoration-none footerLinkStyle">Knowledge Base</a>
            </li>
            
          </ul>
        </div>
        {/* <!--Grid column--> */}
      </div>
      {/* <!--Grid row--> */}
    </div>
    {/* <!-- Grid container --> */}
    {/* social Icon container */}
    <div className="d-flex justify-content-center">
    <a href="#" className="card-link">
                  <i
                    className="fa fa-facebook-square cardIcons me-5"
                    aria-hidden="true"
                  ></i>
                  <i className="fa fa-github cardIcons me-5" aria-hidden="true"></i>
                  <i
                    className="fa fa-google-plus-official cardIcons me-5"
                    aria-hidden="true"
                  ></i>
                  <i className="fa fa-twitter cardIcons me-5" aria-hidden="true"></i>
                </a>
    </div>

    {/* <!-- Copyright --> */}
    <div className="text-center p-3">
      © 2020 Copyright:
      <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
    {/* <!-- Copyright --> */}
  </footer>
  {/* <!-- Footer --> */}
</section>
    );
}

export default Footer;