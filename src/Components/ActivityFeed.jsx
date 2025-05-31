const ActivityFeed = () => {
  const activityData = [
    { day: 'Mon', height: 'h-6' },
    { day: 'Tues', height: 'h-12' },
    { day: 'Wed', height: 'h-8' },
    { day: 'Thurs', height: 'h-16' },
    { day: 'Fri', height: 'h-10' },
    { day: 'Sat', height: 'h-14' },
    { day: 'Sun', height: 'h-12' }
  ];

  return (
    <div className="bg-white rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Activity</h2>
        <p className="text-sm text-gray-500">3 appointments on this week</p>
      </div>
      
      <div className="flex items-end justify-between space-x-4 h-32">
        {activityData.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <div className={`w-8 bg-gradient-to-t from-cyan-400 to-blue-500 rounded-t ${item.height}`}></div>
            <span className="text-xs text-gray-500">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;