import React from "react";
import myProfileAbout from "../../assets/img/profileAbout.jpg";
import Resume from "../../assets/pdf/resume.pdf";

const About = () => {
  return (
    <div style={{ minHeight: "90vh" }} id="about">
      <div className="section pb-0">
        <div className="columns is-centered has-text-centered">
          <div className="column is-2">
            <h1 className="title">About Me</h1>
            <p className="subtitle">My introduction</p>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="columns is-gapless p-6">
          <div
            style={{
              borderRadius: "20px",
            }}
            className="column is-5 box is-flex is-flex-direction-column is-justify-content-center is-align-items-center"
          >
            <img
              style={{
                borderRadius: "20px",
                width: "100%",
                height: "100%",
              }}
              src={myProfileAbout}
              alt="profile-about"
            />
          </div>
          <div className="column is-2"></div>
          <div className="column is-5">
            <div
              style={{ height: "100%" }}
              className="is-flex is-flex-direction-column is-justify-content-center is-align-items-stretch"
            >
              <p className="is-size-5 has-text-weight-semibold has-text-centered mb-6 has-text-grey">
                I’m currently working as Full Stack Developer <br />
                I’m looking to collaborate on Frontend and Backend
              </p>
              <div className="is-flex is-flex-direction-row is-justify-content-space-between mb-6">
                <div className="has-text-centered">
                  <h1 className="is-size-3 has-text-weight-bold">01+</h1>
                  <p className="is-size-6 has-text-weight-bold has-text-grey">
                    Years <br /> Web Development Exp.
                  </p>
                </div>
                <div className="has-text-centered">
                  <h1 className="is-size-3 has-text-weight-bold">04+</h1>
                  <p className="is-size-6 has-text-weight-bold has-text-grey">
                    Years <br /> Managerial Exp.
                  </p>
                </div>
                <div className="has-text-centered">
                  <h1 className="is-size-3 has-text-weight-bold ">30+</h1>
                  <p className="is-size-6 has-text-weight-bold has-text-grey">
                    Completed <br /> Web Projects
                  </p>
                </div>
                <div className="has-text-centered">
                  <h1 className="is-size-3 has-text-weight-bold ">20+</h1>
                  <p className="is-size-6 has-text-weight-bold has-text-grey">
                    Web Development <br /> Certifications
                  </p>
                </div>
              </div>
              <div className="is-flex is-flex-direction-row is-justify-content-center is-align-items-center">
                <a href={Resume} download="Bhargav-Resume" target="_blank">
                  <button
                    className="is-size-5 button is-align-self-flex-start is-rounded"
                    style={{
                      backgroundColor: "#705edc",
                      color: "white",
                      borderRadius: "10px",
                    }}
                  >
                    <span>Download CV</span>
                    <span className="icon">
                      <i className="ri-download-2-line"></i>
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
