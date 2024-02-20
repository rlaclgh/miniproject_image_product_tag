import axios from "axios";

export interface CustomError {
  code: string;
  message: string;
  status: number;
}

const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,

  headers: {
    Accept: "application/json, text/plain, */*",
  },
});

Axios.interceptors.request.use(async (config) => {
  return config;
});

Axios.interceptors.response.use((response) => {
  return response;
});

export default Axios;
