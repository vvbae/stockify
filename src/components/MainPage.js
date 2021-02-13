import React, { useState } from "react";
import Logo from "../images/Logo.jpeg";
import SearchBar from "./SearchBar";

const MainPage = (props) => {
    // TODO
    // featured artists

    return (
        <div style={container}>
            <div style={wrapper}>
            <img src={Logo} style={imgStyle} alt="logo" />
                <SearchBar />
            </div>
        </div>
    );
};

export default MainPage;