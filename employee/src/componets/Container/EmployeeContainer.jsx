//importing components and Api
import React, { Component } from "react";
import SearchBar from "../SearchBar";
import EmployeeTable from "../Employee Table";
import API from"../../utils/API";

//Setting State
class EmployeeContainer extends Component {
    state = {
        search:"",
        employees:[],
        employeeFilter:[],
        sortInstructions:this.firstInstructions,
    };

//pulling in sortInstructions
get firstInstructions(){
    return {
        name:"",
        phone:"",
        email:"",
        dob:"",
    };
} 

//using the  api to load employees
componentDidMount() {
    API.getEmployees()
    .then((res) => 
    this.setState({
        employees:res.data.results,
        employeeFilter: res.data.results,
    }))
    .catch((err) => console.log(err));
}

}

