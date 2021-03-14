import React from "react";
import "./style.css";

function Header() {
    return (
        <header>
            <div className="container">
                <h1 className="text-center">Employee Directory</h1>
                <p className="text-center">
                    Use search box to filter or click on column headers to sort.
                </p>
            </div>
        </header>
    );
};

export default Header;