import axios from 'axios'
const requesting=axios.create({
    baseURL:'http://localhost:5000'
});
 export const Login = async (formData)=>await requesting.post('users/signup',formData)
  export const Signin = async (formData)=>await requesting.post('users/signin',formData)
 