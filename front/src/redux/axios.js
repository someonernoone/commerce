import axios from "axios";


let token = localStorage.getItem("token")

if (!token) {
  token= ""
}

const instance = axios.create({
  baseURL:
    "https://bdf234ab-03c7-480f-a3b6-32225498aff8-00-4c39s4wmvyba.janeway.replit.dev/api/v1",
  headers: {
    Cookies: `token=${token}`
  }
});

export default instance;
