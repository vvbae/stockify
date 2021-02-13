import React, { useState } from "react";
import Button from "./Button";
import Logo from "../images/Logo.jpeg";

const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
                <input
                    style={textBox}
                    type="text"
                    placeholder="Username or Email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    style={textBox}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                />
                <Button text="Sign in" />
            </div>
        </div>
    );
};

export default LoginForm;