import AnatomySection from "./Anatomy";
import HealthStatusCards from "./HealthStatus";
import CalendarView from "./Calender";
import ActivityFeed from "./ActivityFeed";
import UpcomingSchedule from "./UpcomingSchedule";

const DashboardMainContent = () => {
  return (
    <div className="flex-1 bg-gray-50 p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <div className="text-sm text-gray-500">This Week</div>
        </div>
      </div>
      
      <div className="grid grid-cols-12 gap-6">
        {/* Left Section - Anatomy */}
        <div className="col-span-4 -mt-3">
          <AnatomySection />
        </div>
        
        {/* Middle Section - Health Cards */}
        <div className="col-span-3 -mt-3">
          <HealthStatusCards />
        </div>
        
        {/* Right Section - Calendar */}
        <div className="col-span-5 -mt-3 bg-blue-50">
          <CalendarView />
        </div>
        
        {/* Bottom Left - Activity */}
        <div className="col-span-7 -mt-3">
          <ActivityFeed />
        </div>
        
        {/* Bottom Right - Upcoming Schedule */}
        <div className="col-span-5 -mt-18 bg-blue-50">
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;
