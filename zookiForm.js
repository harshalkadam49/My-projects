import React from "react";
import "./style.css";

function Forms() {
  return (
    <section className="container bg- text-align-center">
      <form className="">
        <div className="col-12">
          <h1 className="mt-2">Our Features</h1>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="row mt-2 justify-content-start ">
              <div className="col-md-6">
                <label for="inputEmail4"></label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="E-mail"
                />
              </div>
              <div className="col-md-6">
                <label for="inputPassword4"></label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="row justify-content-start">
              <div className="form-group justify-content-center col-md-12">
                <label for="inputAddress"></label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Subject"
                />
              </div>
            </div>

            <div className="row justify-content-start">
              <div className="form-group mt-4 justify-content-center col-md-12">
                <div class="input-group">
                  <textarea
                    class="form-control"
                    aria-label="With textarea"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3">
            <button
              type="submit"
              className="btn btn-warning text-dark mt-2 justify-content-start d-flex knowMorebtn"
            >
              Send Messsage
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
export default Forms;
