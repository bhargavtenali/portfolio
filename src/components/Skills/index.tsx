import React, { Fragment } from "react";
import Progressbar from "../ProgressBar";

const Skills = () => {
  const frontendSkillSet = [
    { name: "HTML & CSS", completion: "90" },
    { name: "JavaScript & TypeScript", completion: "80" },
    { name: "React & React Hooks", completion: "80" },
    { name: "Redux & Redux Toolkit", completion: "70" },
    { name: "Bulma CSS", completion: "80" },
    { name: "Stencil.js (Web Components Development)", completion: "60" },
  ];
  const backendSkillSet = [
    { name: "Git", completion: "80" },
    { name: "Python", completion: "80" },
    { name: "Node & Express", completion: "70" },
    { name: "SQL & PostgreSQL & Elasticsearch", completion: "80" },
    { name: "DSA", completion: "80" },
  ];
  return (
    <div style={{ minHeight: "90vh" }} id="skills">
      <div className="section pb-0">
        <div className="columns is-centered has-text-centered">
          <div className="column is-2">
            <h1 className="title">My Skills</h1>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="columns px-6 pt-5">
          <div className="column is-5">
            <div className="is-flex is-flex-direction-row is-align-items-center mb-6">
              <span className="icon is-large mr-2 icon-color">
                <i className="ri-braces-fill ri-3x"></i>
              </span>
              <h1 className="is-size-3 has-text-weight-bold">Frontend</h1>
            </div>
            {frontendSkillSet.slice().map((item, index) => (
              <Fragment key={index}>
                <p className="is-size-5 has-text-weight-semibold">
                  {item.name}
                </p>
                <Progressbar done={item.completion} />
              </Fragment>
            ))}
          </div>
          <div className="column is-2"></div>
          <div className="column is-5">
            <div className="is-flex is-flex-direction-row is-align-items-center mb-6">
              <span className="icon is-large mr-2 icon-color">
                <i className="ri-database-2-fill ri-3x"></i>
              </span>
              <h1 className="is-size-3 has-text-weight-bold">Backend</h1>
            </div>
            {backendSkillSet.slice().map((item, index) => (
              <Fragment key={index}>
                <p className="is-size-5 has-text-weight-semibold">
                  {item.name}
                </p>
                <Progressbar done={item.completion} />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
