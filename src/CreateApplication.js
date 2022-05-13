import React from "react";
import { getUser, resetUserSession } from "./service/AuthService";
import "./styles/createApplication.scss";

const CreateApplication = (props) => {
  const user = getUser();
  const name = user !== "undefined" && user ? user.name : "";

  const logoutHandler = () => {
    resetUserSession();
    props.history.push("login");
  };
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right top, #511b73, #6c2990, #8838af, #a648ce, #c557ed)",
        height: "100vh",
      }}
    >
      <div className="containerApplication">
        <h4>
          Hello {name}! You have been logged In!! Welcome to the Meta Keep
          Developer console!
        </h4>
      </div>
    </div>
  );
};

export default CreateApplication;
