import type { JSX } from "react";
import LoginCard from "../components/LoginCard";
import AuthLayout from "../components/AuthLayout";

const LoginPages = (): JSX.Element => {
  return (
    <AuthLayout>
      <LoginCard />
    </AuthLayout>
  );
};

export default LoginPages;
