import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Pages/routes";
import { GlobalStyle } from "./Global/globalStyles";
import Header from './Components/Header/HeaderLogout'
function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;
