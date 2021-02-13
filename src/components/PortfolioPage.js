// we need a portfolio page which should display all the current logged-in users' transactions and holdings. 
// this will only make calls to the backend

import React, { useState } from "react";
import Logo from "../images/Logo.jpeg";
import PortfolioDisplay from "./PortfolioDisplay";

const Portfolio = (props) => {
    const [portfolioList, setPortfolioList] = useState([]);
    
    getData = () => {
        // fetch my portfolio
        const requestOptions = {
            method: 'GET',
            headers: { "key": "Content-Type",
                        "type": "text",
                        "value": "application/json",
                        "disabled": true },
            body: JSON.stringify({ key: 'uname', value: 'testing_user' })
        };
        fetch('https://stockify-7gn2rioowq-uc.a.run.app/portfolio?uname=testing_user', requestOptions)
            .then(response => response.json())
            .then(data => setPortfolioList({data.portfolio}));
    };

    componentWillMount() {
        getData();
    };

    const container = {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
    };
    const wrapper = {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        textAlign: "center",
        justifyContent: "space-between",
    };
    const imgStyle = {
        width: '400px',
        margin: '20px auto'
    }
    const textBox = {
        width: "300px",
        outline: "none",
        padding: "10px",
        margin: "10px auto",
    };

    return (
        <div style={container}>
            <div style={wrapper}>
            <img src={Logo} style={imgStyle} alt="logo" />
            {portfolioList.map((portfolio, index) => (
                <PortfolioDisplay
                    key={index}
                    id={index}
                    artist={portfolio.artist}
                    shares={portfolio.shares}
                />
            ))}
            </div>
        </div>
    );
};

export default Portfolio;