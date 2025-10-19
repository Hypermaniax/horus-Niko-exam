import type { JSX } from "react";
import AuthLayout from "../../../app/layout/AuthLayout";
import LoginCard from "../components/LoginCard";

const LoginPages = (): JSX.Element => {
  return (
    <AuthLayout>
      <LoginCard />
    </AuthLayout>
  );
};

export default LoginPages;
