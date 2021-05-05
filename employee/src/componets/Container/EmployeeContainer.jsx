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
// Filter employees by name
handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({ search:value });
    this.employeeFilter(value.toLowerCase().trim());
};

//calling preventDefault
handleFormSubmit= (event) => {
    event.preventDefualt();
};

//sorting by first and last
//sort by last name first the first name
sortBy = (key, first = 0, second = 0) => {
    let sortEmployee = this.state.employeeFilter;
    if (this.state.sortInstructions[key]) {
        this.setState({
            employeeFilter:sortEmployee.reverse(),
            sortInstructions: {
                ...this.sortInstructions,
                [key]: this.state.sortInstructions[key] === "asc"? "desc" : "asc",
            },
        });
    } else {
        sortEmployee = this.state.employeeFilter.sort((a, b) => {
            a = a[key];
            b = b[key];

        // using second child (firstname) to search id there is a exact match on the (first) last name.
        //input method locale to compare strings in locale.
        if(first) {
            if(second && a[first] === b[first]) {
                return a[second].localeCompare(b[second]);
            }
            return a[first].localeCompare(b[first]);
        } else {
            return a.localeCompare(b);
        }
        });
    }

}


}

