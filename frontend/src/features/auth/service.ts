import axios from "axios";
import type {
  LoginData,
  LoginResult,
  RegisterData,
  RegisterResult,
} from "./types";

const api = import.meta.env.VITE_API_AUTH;

const axiosInstance = axios.create({
  baseURL: api,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export const login: LoginResult = async (data: LoginData) => {
  const res = await axiosInstance.post(`${api}/login`, data);
  return res.data;
};

export const register: RegisterResult = async (data: RegisterData) => {
  const res = await axiosInstance.post(`${api}/register`, data);
  return res.data;
};
