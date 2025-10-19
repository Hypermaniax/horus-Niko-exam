import "../App.css";
import { Route, Routes } from "react-router-dom";
import LoginPages from "../features/auth/pages/LoginPages";
import RegisterPages from "../features/auth/pages/RegisterPages";
import { ToastContainer } from "react-toastify";
import ProtectedRoutes from "./ProtectedRoutes";
import DashboardPages from "../features/dashboard/pages/DashboardPages";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<LoginPages />} />
        <Route path="/register" element={<RegisterPages />} />
        <Route element={<ProtectedRoutes />}>
          <Route index element={<DashboardPages />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
