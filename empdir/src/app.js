import React from "react";
import "./App.css";
import Header from "./components/Header/index.js";
import EmployeesContainer from "./components/Container/EmployeesContainer.js";

function App() {
    return (
        <div>
            <Header />
            <EmployeesContainer />
        </div>
    );
};

export default App;