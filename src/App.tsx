import React from "react";
import "./App.css";
import "bulma/css/bulma.min.css";
import Navbar from "./components/Navbar";
import myProfile from "./assets/img/myProfile2.png";
import blob from "./assets/img/blob.svg";

function App() {
  return (
    <div className="bg-container">
      <div className="app-container">
        <Navbar />
        <div
          style={{ height: "90vh" }}
          className="is-flex is-flex-direction-row p-6"
          id="home"
        >
          <div className="is-flex is-flex-direction-column is-justify-content-center mr-6 ml-5">
            <div
              style={{ height: "20%" }}
              className="is-flex is-flex-direction-column is-justify-content-space-between"
            >
              <a
                href="https://www.linkedin.com/in/bhargavtenali/"
                target="_blank"
              >
                <span className="icon is-medium icon-color">
                  <i className="ri-linkedin-fill ri-2x"></i>
                </span>
              </a>
              <a href="https://github.com/bhargavtenali" target="_blank">
                <span className="icon is-medium icon-color">
                  <i className="ri-github-line ri-2x"></i>
                </span>
              </a>
            </div>
          </div>
          <div
            style={{ maxWidth: "50%" }}
            className="is-flex is-flex-direction-column is-justify-content-center mr-5 ml-5"
          >
            <div
              style={{ height: "70%" }}
              className="is-flex is-flex-direction-column is-justify-content-space-between"
            >
              <h1 className="is-size-1 has-text-weight-bold">
                Hi, I am Bhargav
              </h1>
              <p className="is-size-2 has-text-grey">
                Full Stack Web Developer
              </p>
              <p className="is-size-3 has-text-grey-dark">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                quisquam at nemo totam nihil suscipit asperiores corrupti culpa
                error laborum.
              </p>
              <button
                className="is-size-4 button is-align-self-flex-start is-rounded"
                style={{
                  backgroundColor: "#705edc",
                  color: "white",
                  borderRadius: "10px",
                }}
              >
                <span>Contact Me</span>
                <span className="icon">
                  <i className="ri-arrow-right-s-line"></i>
                </span>
              </button>
            </div>
          </div>
          <div className="is-flex is-flex-direction-column is-justify-content-center ml-6 pl-6">
            <div className="is-flex is-flex-direction-column is-justify-content-space-between">
              <img
                style={{ width: "300px", height: "300px" }}
                src={myProfile}
                alt="profile-pic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
