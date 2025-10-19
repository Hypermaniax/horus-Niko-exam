import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { login, register } from "../services/auth";
import type {
  HandleLogin,
  HandleRegister,
  LoginData,
  RegisterData,
} from "../types";

const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogin: HandleLogin = async (data: LoginData) => {
    try {
      setLoading(true);
      const loginUser = await login(data);
      toast.success(loginUser.message || "succes");
      navigate("/");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const msg = error.response?.data?.message || "Login failed FE";
        toast.error(msg);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRegister: HandleRegister = async (data: RegisterData) => {
    try {
      setLoading(true);
      const registerUser = await register(data);
      toast.success(registerUser.message || "succes");
      navigate("/login");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const msg = error.response?.data?.message || "failled FE";
        toast.error(msg);
      }
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, loading, handleRegister };
};

export default useAuth;
