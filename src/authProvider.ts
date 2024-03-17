import { AuthBindings } from "@refinedev/core";
import axios from 'axios';

export const TOKEN_KEY = "refine-auth";

export const authProvider: AuthBindings = {
  login: async ({ username, email, password }) => {

    const response = await axios.post("http://localhost:5000/login", { email, password });
  
    

    if(response.data == "Credentials are incorrect.") {
      return {
        success: false,
        error: {
          name: "LoginError",
          message: "Invalid username or password",
        },
      };
    }

    else{
      
        localStorage.setItem('role',response.data.data.role)
         localStorage.setItem(TOKEN_KEY, response.data.token);
      return {
        success: true,
        redirectTo: "/",
      };
    }
    

   
  },
  logout: async () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem('role');
    return {
      success: true,
      redirectTo: "/login",
    };
  },
  check: async () => {
    const token = localStorage.getItem(TOKEN_KEY);

   
    if (token) {
      return {
        authenticated: true,
      };
    }

    return {
      authenticated: false,
      redirectTo: "/login",
    };
  },
  getPermissions: async () => null,
  getIdentity: async () => {
    const token = localStorage.getItem(TOKEN_KEY);

    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };

    const response = await axios.post("http://localhost:5000/currentUser", { },config);

    if (token) {
      return {
        id: 1,
        name: response.data.data.fullname,

      };
    }
    return null;
  },
  onError: async (error) => {
    console.error(error);
    return { error };
  },
};
