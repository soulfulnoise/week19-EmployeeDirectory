//importing components and Api
import React, { Component } from "react";
import SearchBar from "../SearchBar";
import EmployeeTable from "../Employee Table";
import API from"../../utils/API";

class EmployeeContainer extends Component {
    state = {
        search:"",
        employees:[],
        employeesFilter:[],
        sortInstructions:this.firstInstructions,
    };
}