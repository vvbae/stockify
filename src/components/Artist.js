// we also need an artist page which should also make calls to spotify api but to our backend 
// as well with button 'sell' and 'buy'

import React, { useState } from "react";
import Logo from "../images/Logo.jpeg";
import Buy from "./Buy";
import Sell from "./Sell";

const Artist = (props) => {
    const [shareNums, setShareNums] = useState(10);
    const [myShares, setMyShares] = useState(0);

    getData = () => {
        // fetch my shares
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
            .then(data => setMyShares({ myShares: data.portfolio.shares}));

        // TODO
        // get artist profile pic + followers
        // some kind of graph here (??)
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
                <div>Your shares {myShares}</div>
                <input
                    style={textBox}
                    type="text"
                    placeholder="# of shares"
                    value={shareNums}
                    onChange={(e) => setShareNums(e.target.value)}
                />
                <Buy />
                <Sell />
            </div>
        </div>
    );
};

export default Artist;

  