import type { children } from "../types";

const CardDashboard = ({ children }: children) => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-7xl">
      {children}
    </div>
  );
};

export default CardDashboard;
