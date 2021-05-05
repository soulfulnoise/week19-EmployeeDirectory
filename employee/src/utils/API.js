import axios from "axios";
// pulling in api for 5000 employees and us based work group
const URL ="https://randomuser.me/api/?results=5000&nat=us"

export default {getEmployees: function() {return axios.get(URL)}};