import axios from "axios";

const URL =""

export default {getEmployees: function() {return axios.get(URL)}};