// we need a portfolio page which should display all the current logged-in users' transactions and holdings. 
// this will only make calls to the backend

import React, { useState } from "react";
import Logo from "../images/Logo.jpeg";

const GetPortfolio = (props) => {
    return (
        <div className="portfolio">
          <h1>{props.artist}</h1>
          <p>{props.shares}</p>
        </div>
      );
};

export default PortfolioDisplay;