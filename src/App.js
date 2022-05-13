import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import CreateApplication from "./CreateApplication";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import Navbar from "./components/navbar";
import React, { useState, useEffect } from "react";
import {
  getUser,
  getToken,
  setUserSession,
  resetUserSession,
} from "./service/AuthService";
import axios from "axios";

const verifyTokenAPIURL =
  "https://gzcxszjnze.execute-api.us-east-1.amazonaws.com/prod/verify";

function App() {
  const [isAuthenicating, setAuthenicating] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (
      token === "undefined" ||
      token === undefined ||
      token === null ||
      !token
    ) {
      return;
    }

    const requestConfig = {
      headers: {
        "x-api-key": "OkhIJdHFMomDeRVUXGfa1EXWiGBAWpdakg7ZRCFf",
      },
    };
    const requestBody = {
      user: getUser(),
      token: token,
    };

    axios
      .post(verifyTokenAPIURL, requestBody, requestConfig)
      .then((response) => {
        setUserSession(response.data.user, response.data.token);
        setAuthenicating(false);
      })
      .catch(() => {
        resetUserSession();
        setAuthenicating(false);
      });
  }, []);

  const token = getToken();
  if (isAuthenicating && token) {
    return <div className="content">Authenicating...</div>;
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <PublicRoute path="/register" component={Register} />
          <PublicRoute path="/login" component={Login} />
          <PrivateRoute
            path="/create-application"
            component={CreateApplication}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
