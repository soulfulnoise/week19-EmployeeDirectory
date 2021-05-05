// imported React and my CSS
import React from "react";
import "./stley.css"

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

    )

}