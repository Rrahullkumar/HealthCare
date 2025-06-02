import AnatomySection from "./Anatomy";
import HealthStatusCards from "./HealthStatus";
import CalendarView from "./Calender";
import ActivityFeed from "./ActivityFeed";
import UpcomingSchedule from "./UpcomingSchedule";

const DashboardMainContent = () => {
  return (
    <div className="flex-1 bg-gray-50 p-4 sm:p-5 md:p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <div className="text-sm text-gray-500">This Week</div>
        </div>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
        {/* Anatomy Section */}
        <div className="lg:col-span-4 sm:col-span-2 col-span-1">
          <AnatomySection />
        </div>

        {/* Health Cards */}
        <div className="lg:col-span-3 sm:col-span-2 col-span-1">
          <HealthStatusCards />
        </div>

        {/* Calendar */}
        <div className="lg:col-span-5 sm:col-span-2 col-span-1 bg-blue-50">
          <CalendarView />
        </div>

        {/* Activity Feed */}
        <div className="lg:col-span-7 sm:col-span-2 col-span-1">
          <ActivityFeed />
        </div>

        {/* Upcoming Schedule */}
        <div className="lg:col-span-5 sm:col-span-2 col-span-1 bg-blue-50">
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;

