import axios from "axios";
// pulling in api for 500 employees and us based work group
const URL ="https://randomuser.me/api/?results=300&nat=us"

export default {getEmployees: function() {return axios.get(URL)}};