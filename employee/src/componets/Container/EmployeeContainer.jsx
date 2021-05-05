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
                ...this.sortBy,
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


        this.setState({
employeeFilter:sortEmployee,
firstInstructions: {
    ...this.sortBy,
    [key]:"asc",
},
        });
    }
};
//based off input filter empolyees
employeeFilter = (userInput) => {
    if (userInput) {
      this.setState({
        searchFilter: this.state.employees.filter((employee) => {
          return (
            employee.name.first
              .toLowerCase()
              .concat(" ", employee.name.last.toLowerCase())
              .includes(userInput) ||
            employee.phone.includes(userInput) ||
            employee.phone.replace(/[^\w\s]/gi, "").includes(userInput) ||
            employee.email.includes(userInput) ||
            this.formatDate(employee.dob.date).includes(userInput)
          );
        }),
      });
    } else {
      this.setState({ searchFilter: this.state.employees });
    }
  };
// seting and formatting dates also joining to show birthday
//getting month in two digit in javascript date
formateDate = (date) => {
    date = new Date (date);
    let bday = [];
    bday.push ("0" + (this.getMonth() + 1)).slice(-2);
    bday.push ("0" + date.getDate()).slice(-2);
    bday.push (date.getFULLYear());

    //returing  bday
return bday.join("-");
};

render() {
    return (
      <div>
          <SearchBar
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          />
          <div className="conatiner mt -4">
              <EmployeeTable
              state={this.state}
              sortBy={this.sortBy}
              employeeFilter={this.employeeFilter}
              formateDate={this.formateDate}
              />
          </div>
      </div>
    );
}

}

export default EmployeeContainer;

