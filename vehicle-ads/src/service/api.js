import axios from "axios";

export default axios.create({
  baseURL: "https://api-vehicleads.herokuapp.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
