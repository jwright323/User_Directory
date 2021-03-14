import React from "react";
import "./style.css";

function SearchBar(props) {
    // Using Bootstrap NavBar/Form for Search.
    // https://getbootstrap.com/docs/4.1/components/navbar/

    return (
        <nav className="navbar navbar-light bg-light justify-content-center">
            <form className="form-inline m-2" onSubmit={props.handleFormSubmit}>
                <input
                    className="form-control"
                    value={props.value}
                    name="search"
                    onChange={props.handleInputChange}
                    type="search"
                    placeholder="Enter Name"
                />
            </form>
        </nav>
    );
};

export default SearchBar;