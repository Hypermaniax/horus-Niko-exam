import type { JSX } from "react";
import type { children } from "../types";

const MainLayout = ({ children }: children): JSX.Element => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">{children}</div>
    </div>
  );
};

export default MainLayout;
