import React, { useState, useEffect } from "react";
import "./style.css";
import Brand_Image from "./Images/zookiBrandImage.png"

function Header(props) {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
    <nav 
      class={
        scroll
          ? "change-bg navbar sticky-top  navbar-expand-lg primaryBackGroundColor"
          : "navbar sticky-top  navbar-expand-lg primaryBackGroundColor"
      }
    >
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src={Brand_Image}></img>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                Services
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link " href="#">
                Contact Us
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">
                Features
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
