import type { JSX } from "react";
import type { children } from "../types";

const AuthLayout = ({ children }: children): JSX.Element => {
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      {children}
    </div>
  );
};

export default AuthLayout;
