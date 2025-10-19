import type { JSX } from "react";
import AuthLayout from "../../../app/layout/AuthLayout";
import RegisterCard from "../components/RegisterCard";

const RegisterPages = (): JSX.Element => {
  return (
    <AuthLayout>
      <RegisterCard />
    </AuthLayout>
  );
};

export default RegisterPages;
