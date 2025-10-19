import type { JSX } from "react";
import RegisterCard from "../components/RegisterCard";
import AuthLayout from "../components/AuthLayout";

const RegisterPages = (): JSX.Element => {
  return (
    <AuthLayout>
      <RegisterCard />
    </AuthLayout>
  );
};

export default RegisterPages;
