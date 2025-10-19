import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Navigate, Outlet } from "react-router-dom";
import type { AuthData } from "../types";
import { getMe } from "../services/auth";

const ProtectedRoutes = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [auth, setAuth] = useState<AuthData | null>(null);

  useEffect(() => {
    const fetchAuth = async () => {
      try {
        const user = await getMe();
        setAuth(user);
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.log(error.response?.data);
          const msg = error.response?.data.message || "AUTHORIZATION";
          toast.error(msg);
        }
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchAuth();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (!auth) return <Navigate to="/login" />;

  return <Outlet />;
};

export default ProtectedRoutes;
