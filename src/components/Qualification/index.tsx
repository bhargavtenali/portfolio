import React from "react";
import { Chrono } from "react-chrono";
import graduation from "../../assets/img/graduation.png";

const data = [
  {
    title: "2011-2013",
    cardTitle: "Intermediate (Class XII)",
    cardSubtitle: `Sri Chaitanya Junior College - Vijayawada`,
    cardDetailedText: "Completed Class XII with 93.9% in AP State Board",
  },
  {
    title: "2013-2017",
    cardTitle: "B.Tech in Electronics",
    cardSubtitle: "Indian Institute of Technology (BHU) - Varanasi",
    cardDetailedText: "Graduated with 6.63 CGPA",
  },
  {
    title: "2017-2019",
    cardTitle: "Assistant Manager - Production",
    cardSubtitle: "Bharat Dynamics Limited - Government of India",
    cardDetailedText: `The Visakhapatnam Unit being a new one was having the challenge of less manpower. Hence, I made my team work effectively. It resulted in completion of all production orders within time (effective utilization of available man power)
    Ensured outsourcing of initial stage activities. Hence, I managed to decrease the Man-hour cost and improved productivity`,
  },
  {
    title: "2019-2022",
    cardTitle: "Assistant Manager - Purchase",
    cardSubtitle: "Bharat Dynamics Limited - Government of India",
    cardDetailedText: `Properly communicated with Senior Management so that right
    decisions are taken in right time
    Developed alternate vendors for critical items resulting in Cost cutting and decreased Lead Time
    Ensured Outsourced Assemblies have reached BDL On-Time thereby no delays to Assembly Activities. Resulting in decline in LDs incurred on Sales Orders.`,
  },
  {
    title: "2021-2022",
    cardTitle: "Full Stack Development Trainee with MERN Specialization",
    cardSubtitle: "NxtWave Disruptive Technologies - Hyderabad",
    cardDetailedText: `Built several impressive Static, Dynamic and Responsive Website using JS, React and Express
    Solved several problems using Python covering concepts like Functions and Recursion, Strings, Lists, Dictionaries, Sets and Tuples`,
  },
  {
    title: "2022-Present",
    cardTitle: "Full Stack Developer",
    cardSubtitle: "Kayrros",
    cardDetailedText: `Working on Migration of Millions of Data.
    Working on developing Modern Frontend Web Apps.`,
  },
];

const Qualification = () => {
  return (
    <div style={{ minHeight: "90vh" }} id="qualification">
      <div className="section pb-0">
        <div className="columns is-centered has-text-centered">
          <div className="column">
            <h1 className="title">Education & Experience</h1>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="columns px-6 pt-5">
          <div className="column">
            <div style={{ width: "100%" }}>
              <Chrono
                theme={{
                  primary: "#6643b5",
                  secondary: "#e7eaf6",
                  // cardBgColor: "yellow",
                  // cardForeColor: "violet",
                  // titleColor: "black",
                  // titleColorActive: "red",
                }}
                useReadMore={false}
                items={data}
                mode="VERTICAL_ALTERNATING"
                cardHeight={130}
                slideShow
                slideItemDuration={1500}
              >
                <div className="chrono-icons">
                  <img src={graduation} alt="graduation" />
                  <img src={graduation} alt="graduation" />
                  <img
                    src="https://img.icons8.com/ios-filled/100/000000/briefcase.png"
                    alt="work"
                  />
                  <img
                    src="https://img.icons8.com/ios-filled/100/000000/briefcase.png"
                    alt="work"
                  />
                  <img
                    src="https://img.icons8.com/ios-filled/100/000000/briefcase.png"
                    alt="work"
                  />
                  <img
                    src="https://img.icons8.com/ios-filled/100/000000/briefcase.png"
                    alt="work"
                  />
                  <img
                    src="https://img.icons8.com/ios-filled/100/000000/briefcase.png"
                    alt="work"
                  />
                </div>
              </Chrono>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
