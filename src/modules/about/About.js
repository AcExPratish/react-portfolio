import React, { useState } from "react";
import "./about.scss";

const About = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const inputData = [
    {
      id: "one",
      value: 1,
      description: "All",
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
    <section id="about-section">
      <div className="grid-container">
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

          {/* <div className="tabs">
          {inputData.map((data, key) => <label className="tab" id={data.id+'tab'} htmlFor={data.id}>{data.description}</label>)}
        </div> */}
          <div className="tabs">
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
                {data} <br />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default About;
