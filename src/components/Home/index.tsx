import React from "react";
import myProfile from "../../assets/img/myProfile2.png";

const Home = () => {
  return (
    <div
      style={{ height: "90vh" }}
      className="p-6 columns is-gapless"
      id="home"
    >
      <div className="column is-1 is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
        <div
          style={{ height: "20%" }}
          className="is-flex is-flex-direction-column is-justify-content-space-between"
        >
          <a href="https://www.linkedin.com/in/bhargavtenali/" target="_blank">
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
      <div className="column is-1"></div>
      <div className="column is-5 is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
        <div
          style={{ height: "60%" }}
          className="is-flex is-flex-direction-column is-justify-content-space-between"
        >
          <h1 className="is-size-1 has-text-weight-bold">Hi, I am Bhargav</h1>
          <p className="is-size-2 has-text-grey">Full Stack Web Developer</p>
          <p className="is-size-4 has-text-weight-medium has-text-grey-dark">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            quisquam at nemo totam nihil suscipit asperiores corrupti culpa
            error laborum.
          </p>
          <a
            href="#contact-me"
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
          </a>
        </div>
      </div>
      <div className="column is-1"></div>
      <div className="column is-4 is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
        <img
          style={{ width: "300px", height: "300px" }}
          src={myProfile}
          alt="profile-pic"
        />
      </div>
    </div>
  );
};

export default Home;
