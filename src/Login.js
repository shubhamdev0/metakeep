import React, { useState } from "react";
import axios from "axios";
import { setUserSession } from "./service/AuthService";
import Card from "./components/card.js";
import "./styles/register.scss";
const loginAPIUrl =
  "https://yaa991o726.execute-api.ap-south-1.amazonaws.com/prod/login";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      setErrorMessage("Both username and password are required");
      return;
    }
    setErrorMessage(null);
    const requestConfig = {
      headers: {
        "x-api-key": "1K2PzrLWzq1lfcPbnk6q34KoeVMAANLQ6ije30Wp",
      },
    };
    const requestBody = {
      username: username,
      password: password,
    };

    axios
      .post(loginAPIUrl, requestBody, requestConfig)
      .then((response) => {
        setUserSession(response.data.user, response.data.token);
        props.history.push("/create-application");
      })
      .catch((error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage(
            "sorry....the backend server is down. please try again later!!"
          );
        }
      });
  };

  return (
    <div>
      <Card>
        <div style={{ width: "100%" }}>
          <form id="contact" onSubmit={submitHandler}>
            <h3>Login Account</h3>
            <fieldset>
              <input
                placeholder="Please enter Username"
                tabIndex="3"
                required
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Password"
                tabIndex="4"
                required
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </fieldset>
            <fieldset>
              <button
                name="submit"
                type="submit"
                id="contact-submit"
                data-submit="...Sending"
              >
                Login
              </button>
              {errorMessage && <p className="message">{errorMessage}</p>}
            </fieldset>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Login;
