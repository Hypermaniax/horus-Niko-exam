import CardDashboard from "./CardDashboard";
import Table from "./Table";

const Dashboard = () => {
  return (
    <CardDashboard>
      <div className="space-y-5">
        <h1 className="font-bold text-2xl ">DASHBOARD PENGGUNA</h1>
        <Table />
      </div>
    </CardDashboard>
  );
};

export default Dashboard;
