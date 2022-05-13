import React from "react";
import "../styles/card.scss";
function Card(props) {
  return (
    <div className="cardContainer">
      <div className="card-container">
        <div className="float-layout">
          <div className="card-image">
            <img
              src={require("../assets/reg_background.png").default}
              alt="registration"
            />
            <div className="card">
              <div className="card-desc">{props.children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
