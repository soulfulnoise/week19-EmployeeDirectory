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
        employeesFilter:[],
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


}