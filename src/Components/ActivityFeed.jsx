const ActivityFeed = () => {
  const activityData = [
    { day: 'Mon', height: 'h-4 sm:h-6', value: 30 },
    { day: 'Tues', height: 'h-8 sm:h-12', value: 60 },
    { day: 'Wed', height: 'h-6 sm:h-8', value: 40 },
    { day: 'Thurs', height: 'h-12 sm:h-16', value: 80 },
    { day: 'Fri', height: 'h-8 sm:h-10', value: 50 },
    { day: 'Sat', height: 'h-10 sm:h-14', value: 70 },
    { day: 'Sun', height: 'h-8 sm:h-12', value: 60 }
  ];

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold">Activity</h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-0">
            3 appointments this week • 12 hours active
          </p>
        </div>
        <div className="mt-2 sm:mt-0">
          <button className="text-xs sm:text-sm bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors">
            View Details
          </button>
        </div>
      </div>
      
      <div className="flex items-end justify-between h-28 sm:h-32 gap-1 sm:gap-2">
        {activityData.map((item, index) => (
          <div key={index} className="flex flex-col items-center w-full">
            <div className="relative w-full flex justify-center group">
              <div 
                className={`w-4/5 sm:w-8 bg-gradient-to-t from-cyan-400 to-blue-500 rounded-t-lg ${item.height} transition-all duration-300 ease-out hover:opacity-90`}
              ></div>
              <div className="absolute -top-6 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {item.value} mins
              </div>
            </div>
            <span className="text-xs text-gray-500 mt-2">{item.day}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-6 flex flex-wrap gap-2">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-cyan-400 mr-2"></div>
          <span className="text-xs text-gray-500">Walking</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
          <span className="text-xs text-gray-500">Running</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-indigo-500 mr-2"></div>
          <span className="text-xs text-gray-500">Cycling</span>
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;