// imported React and my CSS
import React from "react";
import "./style.css"

//Creating Employee Table 
const EmployeeTable =(props) => {
    return (
        < table className="table table-striped table-borded table table-sortable text-center">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col" data-field="name" data-sortable="true">
                        <span onClick={() => props.sortBy("Employee name", "last", "first")}>
                            Employee Name
                        </span>
                    </th>
                    <th scope="col">
                        <span onClick={() => props.sortBy("Work phone")}>
                            Work Phone
                        </span>
                    </th>
                    <th scope="col">
                        <span onClick={() => props.sortBy("bday", "date")}>
                            Birthday
                        </span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {props.state.employeeFilter.map((employee) => {
                    const { first, last } = employee.name;
                    const fullName = `${first} ${last}`;

                    const dob = props.formatDate(employee.dob.date);

                    return(
                        <tr key={employee.login.uuid}>
                            <td>
                                <img src={employee.picture.thumbnail} alt={fullName} />
                            </td>
                            <td className="align-middle">{fullName}</td>
                            <td className="align-middle">
                                <a href={`tel:1${employee.phone}`}> {employee.phone}</a>
                            </td>
                            <td className="align-middle">{dob}</td>
                        </tr>
                    );
                })}
            </tbody>
            </table>

    );

};

export default EmployeeTable;