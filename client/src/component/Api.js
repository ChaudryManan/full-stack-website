import axios from "axios";

const Api = axios.create({
baseURL: "http://railway-production-ea24.up.railway.app/api/v1/users",
    withCredentials: true,

  headers: {
    "Content-Type": "application/json",
  },
});


// Example: Signup request
export const signup = (formData) => Api.post("/signup", formData);

export default Api;
