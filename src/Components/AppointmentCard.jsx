const SimpleAppointmentCard = ({ title, time, icon, color = 'bg-gray-100', textColor = 'text-gray-800' }) => {
  return (
    <div className={`${color} p-3 rounded-xl flex items-center justify-between`}>
      <div>
        <h4 className={`font-medium ${textColor}`}>{title}</h4>
        <p className={`text-sm ${textColor === 'text-white' ? 'text-white opacity-90' : 'text-gray-600'}`}>{time}</p>
      </div>
      <div className="text-xl">{icon}</div>
    </div>
  );
};

export default SimpleAppointmentCard;