import React from "react";
import myProfile from "../../assets/img/myProfile2.png";

const Home = () => {
  return (
    <div
      style={{ minHeight: "90vh" }}
      className="p-6 columns is-gapless"
      id="home"
    >
      <div className="column is-1 is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
        <div
          style={{ height: "40%" }}
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
          <a href="tel:+91-93985-66627">
            <span className="icon is-medium icon-color">
              <i className="ri-phone-line ri-2x"></i>
            </span>
          </a>
          <a href="mailto:bhargavtenali@gmail.com">
            <span className="icon is-medium icon-color">
              <i className="ri-mail-add-line ri-2x"></i>
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
            I am a Full Stack Web stack developer with excellent Problem Solving
            Skills and ability to perform well in a team. Passionate about
            Coding and enjoy building Web Applications.
          </p>
          <a
            href="tel:+91-93985-66627"
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
