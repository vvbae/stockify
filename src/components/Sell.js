// we also need an artist page which should also make calls to spotify api but to our backend 
// as well with button 'sell' and 'buy'

import React, { useState } from "react";
import Button from "./Button";
import Logo from "../images/Logo.jpeg";

const Sell = (props) => {
    getData = () => {
        // SELL
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ key: 'uname', value: 'testing_user' })
        };
        fetch('https://stockify-7gn2rioowq-uc.a.run.app/sell/3dBVyJ7JuOMt4GE9607Qin?uname=testing_user', requestOptions)
            .then(response => response.json())
            .then(
                (result) => {console.log("Successfully sold");},
                (error) => {console.log("You can't sell at the time");}
            )
    };

    componentWillMount() {
        getData();
    };

    return (
        <div style={container}>
            <Button text="Sell" />
        </div>
    );
};

export default Sell;
  