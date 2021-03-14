import axios from "axios";
const url = 'https://randomuser.me/api/?results=200';

// Export the object with a "search" method that searches the Random User API for the query
export default {
    getEmployees: function(query) {
        return axios.get(url);
    }
};