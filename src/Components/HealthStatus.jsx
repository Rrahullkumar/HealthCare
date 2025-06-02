const HealthStatusCards = () => {
  const healthCards = [
    {
      icon: '🫁',
      title: 'Lungs',
      date: 'Check: 16 Oct, 2025',
      status: 'normal',
      color: 'bg-red-500'
    },
    {
      icon: '🦷',
      title: 'Teeth',
      date: 'Check: 16 Oct, 2025',
      status: 'normal',
      color: 'bg-yellow-500'
    },
    {
      icon: '🦴',
      title: 'Bone',
      date: 'Check: 16 Oct, 2025',
      status: 'normal',
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="space-y-4 sm:space-y-3">
      {healthCards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-4 sm:p-3 border border-gray-100"
        >
          <div className="flex items-center space-x-3 sm:space-x-2">
            <div className="text-2xl sm:text-xl">{card.icon}</div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 text-base sm:text-sm">
                {card.title}
              </h3>
              <p className="text-sm sm:text-xs text-gray-500">{card.date}</p>
            </div>
          </div>
          <div className={`w-full h-2 sm:h-1.5 rounded-full mt-3 ${card.color}`}></div>
        </div>
      ))}
      <div className="text-center mt-4 sm:mt-3">
        <button className="text-blue-600 text-sm sm:text-xs font-medium">
          Details →
        </button>
      </div>
    </div>
  );
};

export default HealthStatusCards;
