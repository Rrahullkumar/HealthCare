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
    <div className="space-y-4">
      {healthCards.map((card, index) => (
        <div key={index} className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">{card.icon}</div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{card.title}</h3>
              <p className="text-sm text-gray-500">{card.date}</p>
            </div>
          </div>
          <div className={`w-full h-2 rounded-full mt-3 ${card.color}`}></div>
        </div>
      ))}
      <div className="text-center mt-4">
        <button className="text-blue-600 text-sm font-medium">Details →</button>
      </div>
    </div>
  );
};

export default HealthStatusCards 