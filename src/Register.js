import React, { useState } from "react";
import axios from "axios";
import Card from "./components/card.js";
import "./styles/register.scss";

const registerUrl =
  "https://yaa991o726.execute-api.ap-south-1.amazonaws.com/prod/register";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      username.trim() === "" ||
      email.trim() === "" ||
      name.trim() === "" ||
      password.trim() === ""
    ) {
      setMessage("All fields are required");
      return;
    }
    setMessage(null);
    const requestConfig = {
      headers: {
        "x-api-key": "1K2PzrLWzq1lfcPbnk6q34KoeVMAANLQ6ije30Wp",
      },
    };
    const requestBody = {
      username: username,
      email: email,
      name: name,
      password: password,
    };
    axios
      .post(registerUrl, requestBody, requestConfig)
      .then((response) => {
        setMessage("Registeration Successful");
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setMessage(error.response.data.message);
        } else {
          setMessage(
            "sorry....the backend server is down!! please try again later"
          );
        }
      });
  };

  return (
    <div>
      <Card>
        <div style={{ width: "100%" }}>
          <form id="contact" onSubmit={submitHandler}>
            <h3>Create Account</h3>
            <fieldset>
              <input
                placeholder="Your name"
                type="text"
                tabIndex="1"
                required
                autoFocus
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Your Email Address"
                type="email"
                tabIndex="2"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </fieldset>
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
                type="password"
                tabIndex="4"
                required
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
                Register
              </button>
            </fieldset>
            {message && <p className="message">{message}</p>}
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Register;
