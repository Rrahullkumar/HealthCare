const SimpleAppointmentCard = ({
  title,
  time,
  icon,
  color = 'bg-gray-100',
  textColor = 'text-gray-800'
}) => {
  return (
    <div
      className={`${color} p-3 sm:p-2 rounded-xl flex items-center justify-between sm:flex-col sm:items-start gap-2`}
    >
      <div>
        <h4 className={`font-medium ${textColor} text-base sm:text-sm`}>{title}</h4>
        <p
          className={`text-sm sm:text-xs ${
            textColor === 'text-white' ? 'text-white opacity-90' : 'text-gray-600'
          }`}
        >
          {time}
        </p>
      </div>
      <div className="text-xl sm:text-lg">{icon}</div>
    </div>
  );
};

export default SimpleAppointmentCard;
