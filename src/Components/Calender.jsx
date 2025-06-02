import { ChevronLeft, ChevronRight } from "lucide-react";

const CalendarView = () => {
  const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const dates = [25, 26, 27, 28, 29, 30, 31];
  const timeSlots = {
    25: ['10:00', '11:00', '12:00'],
    26: ['08:00', '09:00', '10:00'],
    27: ['12:00', '13:00'],
    28: ['10:00', '11:00'],
    29: ['14:00', '16:00'],
    30: ['12:00', '14:00', '15:00'],
    31: ['09:00', '10:00', '11:00']
  };

  return (
    <div className="bg-[#f5f7ff] rounded-2xl p-6 sm:p-4 w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 sm:mb-4">
        <h2 className="text-lg sm:text-base font-semibold text-gray-700">October 2021</h2>
        <div className="flex items-center space-x-3">
          <ChevronLeft className="w-5 h-5 text-gray-500 cursor-pointer" />
          <ChevronRight className="w-5 h-5 text-gray-500 cursor-pointer" />
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 sm:grid-cols-4 xs:grid-cols-2 gap-4 sm:gap-3">
        {days.map((day, i) => {
          const date = dates[i];
          const isActive = date === 26;
          const isDisabled = day === 'Sun';

          return (
            <div key={i} className="text-center">
              <p className={`text-sm sm:text-xs mb-1 ${isDisabled ? 'text-gray-300' : 'text-gray-600'}`}>{day}</p>
              <div className={`flex flex-col items-center justify-center rounded-2xl p-2 ${isActive ? 'bg-white shadow-md' : ''}`}>
                <p className={`font-semibold text-base sm:text-sm mb-2 ${isDisabled ? 'text-gray-300' : 'text-gray-700'}`}>
                  {date}
                </p>

                {/* Times */}
                <div className="flex flex-col gap-2 sm:gap-1">
                  {(timeSlots[date] || []).map((time, index) => {
                    const isSelected = isActive && time === '09:00';
                    return (
                      <span
                        key={index}
                        className={`text-xs sm:text-[11px] px-3 py-1 rounded-full font-medium
                          ${isSelected ? 'bg-blue-700 text-white' :
                            isDisabled ? 'text-gray-300' :
                            'bg-blue-100 text-blue-700'}
                        `}
                      >
                        {time}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarView;
