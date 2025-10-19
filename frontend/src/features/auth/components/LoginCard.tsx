import React, { useState, type JSX } from "react";
import CardAuth from "./CardAuth";
import Input from "../../../components/Input";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const LoginCard = (): JSX.Element => {
  const { handleLogin, loading } = useAuth();
  const [form, setForm] = useState({ username: "", password: "" });

  return (
    <CardAuth>
      <h1 className="text-center text-4xl pb-10 font-semibold">Login</h1>
      <form action="" className="space-y-5">
        <div className="space-y-2">
          <p>Username</p>
          <Input
            placeHolder="Enter your username"
            type="text"
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            value={form.username}
          />
        </div>
        <div className="space-y-2">
          <p>Password</p>
          <Input
            placeHolder="Enter your password"
            type="password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            value={form.password}
          />
        </div>
        <div className="flex gap-5 pt-5">
          <button
            disabled={loading}
            onClick={(e) => {
              e.preventDefault();
              handleLogin(form);
            }}
            className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition font-medium"
          >
            {loading ? "Loading..." : "Login"}
          </button>
          <Link
            to="/register"
            className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 text-center rounded-lg hover:bg-gray-300 transition font-medium"
          >
            Registrasi
          </Link>
        </div>
      </form>
    </CardAuth>
  );
};

export default LoginCard;
