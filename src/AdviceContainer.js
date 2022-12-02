import React, { useState } from "react";

const AdviceContainer = () => {
  const [adviceText, setAdviceText] = useState("Click the Button for Advice!");

  const handleFetch = () => {
    return fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setAdviceText(data.slip.advice);
        console.log(data.slip);
      })
      .catch((err) => {
        setAdviceText("Sorry, unable to fetch quote at this time");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFetch();
  };

  return (
    <div className="advice-container-main">
      <div className="advice-text-container">
        <span className="advice-text">{adviceText}</span>
      </div>
      <button onClick={handleSubmit} className="btn">
        Give Me Advice!
      </button>
    </div>
  );
};

export default AdviceContainer;
