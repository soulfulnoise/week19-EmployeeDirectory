//importing react and css
import React from "react";
import "./style.css";

//Header

const Header = () => {
    return (
        <header>
            <h1 className="text-center">Employee Direcrory</h1>
            <p className="text-center">
                Use this page to Search for employees filter with search bar or Cloumns
            </p>
        </header>
    );
};

export default Header;
