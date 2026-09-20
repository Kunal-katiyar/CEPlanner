import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", // optional but recommended
  withCredentials: true, // to allow your API to set cookies on the browser
});

export default axiosInstance;