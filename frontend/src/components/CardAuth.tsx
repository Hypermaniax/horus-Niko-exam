import type { children } from "../types";

const CardAuth = ({ children }: children) => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
      {children}
    </div>
  );
};

export default CardAuth;
