import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import DashboardMainContent from "./Components/MainDashBoard";

const App = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
};

export default App;
