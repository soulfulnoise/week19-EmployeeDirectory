import React from 'react';
import './App.css';
import Header from "./componets/Header";
import EmployeeContainer from "./componets/Container/EmployeeContainer";

const App = () => {
  return (
    <div>
      <Header/>
      <EmployeeContainer/>
    </div>
  )
}

export default App;
