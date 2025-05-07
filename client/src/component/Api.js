import axios from "axios";

const Api = axios.create({
  baseURL: "https://backend-eight-rho-81.vercel.app/api/v1/users", 
    withCredentials: true,

  headers: {
    "Content-Type": "application/json",
  },
});


// Example: Signup request
export const signup = (formData) => Api.post("/signup", formData);

export default Api;
