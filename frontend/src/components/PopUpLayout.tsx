import type { children } from "../types";

const PopUpLayout = ({ children }: children) => {
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center p-4 z-50">
      {children}
    </div>
  );
};

export default PopUpLayout;
