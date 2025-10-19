import { useState, type JSX } from "react";
import CardAuth from "./CardAuth";
import Input from "./Input";
import useAuth from "../hooks/useAuth";

const RegisterCard = (): JSX.Element => {
  const { handleRegister, loading } = useAuth();
  const [form, setform] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });

  return (
    <CardAuth>
      <h1 className="text-center text-2xl pb-10 font-semibold">
        Registrasi Akun
      </h1>
      <form action="" className="space-y-4">
        <div className="space-y-2">
          <p>Username</p>
          <Input
            placeHolder="Enter your username"
            type="text"
            value={form.username}
            onChange={(e) => setform({ ...form, username: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <p>Email</p>
          <Input
            placeHolder="Enter your username"
            type="email"
            value={form.email}
            onChange={(e) => setform({ ...form, email: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <p>Name</p>
          <Input
            placeHolder="Enter your username"
            type="text"
            value={form.name}
            onChange={(e) => setform({ ...form, name: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <p>Password</p>
          <Input
            placeHolder="Enter your username"
            type="password"
            value={form.password}
            onChange={(e) => setform({ ...form, password: e.target.value })}
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleRegister(form);
          }}
          disabled = {loading}
          className="w-full mt-3 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition font-medium"
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </CardAuth>
  );
};

export default RegisterCard;
