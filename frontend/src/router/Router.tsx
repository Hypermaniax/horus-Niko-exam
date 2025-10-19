import { Route, Routes } from "react-router-dom";
import LoginPages from "../views/LoginPages";
import RegisterPages from "../views/RegisterPages";
import ProtectedRoutes from "../components/ProtectedRoutes";
import DashboardPages from "../views/DashboardPages";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPages />} />
      <Route path="/register" element={<RegisterPages />} />
      <Route element={<ProtectedRoutes />}>
        <Route index element={<DashboardPages />} />
      </Route>
    </Routes>
  );
};

export default Router;
