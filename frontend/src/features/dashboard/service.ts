import axios from "axios";
import type { TableResult } from "./types";

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

export const getMe = async () => {
  const res = await axiosInstance.get(`${api}/me`);
  return res.data.user;
};

export const getAll = async () => {
  const res = await axiosInstance.get(`${api}`);
  return res.data.result;
};

export const deleteById = async (id: number | null) => {
  const res = await axiosInstance.delete(`${api}/${id}`);
  return res.data.message;
};

export const updateById = async (data: TableResult) => {
  const updateData = {
    name:data.nama,
    email:data.email,
    username: data.username
  }
  const res = await axiosInstance.put(`${api}/${data.id}`, updateData);
  return res.data.message;
};
