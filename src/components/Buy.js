// we also need an artist page which should also make calls to spotify api but to our backend 
// as well with button 'sell' and 'buy'

import React, { useState } from "react";
import Button from "./Button";
import Logo from "../images/Logo.jpeg";

const Buy = (props) => {

    getData = () => {
        // BUY
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch('https://stockify-7gn2rioowq-uc.a.run.app/buy/3dBVyJ7JuOMt4GE9607Qin?uname=testing_user', requestOptions)
            .then(response => response.json())
            .then(
                // TODO
                // change log to a pop up window or something
                (result) => {console.log("Successfully purchased");},
                (error) => {console.log("You can't make a purchase at the time");}
            )
    };

    componentWillMount() {
        getData();
    };

    return (
        <div style={container}>
            <Button text="Buy" />
        </div>
    );
};

export default Buy;

  