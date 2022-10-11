import React, { useState } from "react";
import "./project.scss";

const Project = () => {
  const data = [
    "/assets/portfolio.jpg",
    "/assets/portfolio.jpg",
    "/assets/portfolio.jpg",
    "/assets/portfolio.jpg",
    "/assets/portfolio.jpg",
    "/assets/portfolio.jpg",
    "/assets/portfolio.jpg",
    "/assets/portfolio.jpg",
    "/assets/portfolio.jpg",
    "/assets/portfolio.jpg",
    "/assets/portfolio.jpg",
    "/assets/portfolio.jpg",
  ];
  const inputData = [
    {
      id: "one",
      value: 1,
      description: "All",
      checked: true,
    },
    {
      id: "two",
      value: 2,
      description: "React",
    },
    {
      id: "three",
      value: 3,
      description: "Laravel",
    },
    {
      id: "four",
      value: 4,
      description: "Android Studio",
    },
  ];
  const [defaultInput, setDefaultInput] = useState(1);
  const onChangeInputHandler = (e) => {
    setDefaultInput(e.target.value);
  };
  return (
    <div id="project">
      <div className="grid-container">
        <div className="grid-title uppercase title-font">
          Projects
          <hr />
        </div>
        <div className="grid-title">
          {inputData.map((data, key) => (
            <input
              key={key}
              className="radio"
              id={data.id}
              value={data.value}
              onChange={onChangeInputHandler}
              name="group"
              type="radio"
            />
          ))}
          <div className="tabs about-tab-font">
            <label className="tab" id="one-tab" htmlFor="one">
              All
            </label>
            <label className="tab" id="two-tab" htmlFor="two">
              React
            </label>
            <label className="tab" id="three-tab" htmlFor="three">
              Laravel
            </label>
            <label className="tab" id="four-tab" htmlFor="four">
              Android Studio
            </label>
          </div>
        </div>
        {defaultInput == 1 ? (
          <div className="grid-content">
            {data.map((data, key) => (
              <div className="content-box" key={key}>
                <img src={data} className="img" />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Project;
