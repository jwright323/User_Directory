// Got table logic from https://getbootstrap.com/docs/4.6/content/tables/
// Here is the JSON layout from randomuser.me
import React from "react";
import "./style.css"

function EmployeeTable(props) {
    return (
        <table className="table table-striped table-sortable text-center">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col" data-field="name" data-sortable="true">
                        <span onClick={() => props.sortBy("name", "last", "first")}>
                          Name
                        </span>
                    </th>
                    <th scope="col">
                        <span onClick={() => props.sortBy("phone")}>Phone</span>
                    </th>
                    <th scope="col">
                        <span onClick={() => props.sortBy("email")}>Email</span>
                    </th>
                    <th scope="col">
                        <span onClick={() => props.sortBy("dob", "date")}>DOB</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {props.state.filteredEmployees.map((employee) => {
                    const { first, last } = employee.name;
                    const fullName = `${first} ${last}`;

                  // Format date
                    const dob = props.formatDate(employee.dob.date);

                    return (
                        <tr key={employee.login.uuid}>
                          <td>
                              <img src={employee.picture.thumbnail} alt={fullName} />
                          </td>
                          <td className="align-middle">{fullName}</td>
                          <td className="align-middle">{employee.phone}</td>
                          <td className="align-middle">{employee.email}</td>
                          <td className="align-middle">{dob}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default EmployeeTable;