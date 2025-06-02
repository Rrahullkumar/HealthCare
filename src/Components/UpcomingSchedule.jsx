import { useState } from "react";

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow transition-shadow duration-200 flex-1 min-w-[150px]">
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-medium text-gray-800">{title}</h4>
          <p className="text-sm text-gray-500 mt-1">{time}</p>
        </div>
        <span className="text-2xl">{icon}</span>
      </div>
    </div>
  );
};

const UpcomingSchedule = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  
  return (
    <div className="bg-blue-50 rounded-2xl p-4 md:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
        <h2 className="text-lg md:text-xl font-semibold">The Upcoming Schedule</h2>
        
        {/* Tabs for mobile filtering */}
        <div className="flex bg-white rounded-lg p-1 border border-gray-200 max-w-max">
          <button 
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              activeTab === "upcoming" 
                ? "bg-blue-100 text-blue-600" 
                : "text-gray-500 hover:bg-gray-50"
            }`}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming
          </button>
          <button 
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              activeTab === "past" 
                ? "bg-blue-100 text-blue-600" 
                : "text-gray-500 hover:bg-gray-50"
            }`}
            onClick={() => setActiveTab("past")}
          >
            Past
          </button>
        </div>
      </div>

      {activeTab === "upcoming" ? (
        <div className="space-y-6">
          <div>
            <div className="flex items-center mb-3">
              <div className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                <span className="font-medium">T</span>
              </div>
              <h3 className="text-gray-600 font-medium">Thursday, June 6</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <SimpleAppointmentCard
                title="Health checkup complete"
                time="11:00 AM"
                icon="✅"
              />
              <SimpleAppointmentCard
                title="Ophthalmologist"
                time="2:00 PM"
                icon="👁️"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center mb-3">
              <div className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                <span className="font-medium">S</span>
              </div>
              <h3 className="text-gray-600 font-medium">Saturday, June 8</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <SimpleAppointmentCard
                title="Cardiologist"
                time="12:00 PM"
                icon="❤️"
              />
              <SimpleAppointmentCard
                title="Neurologist"
                time="4:00 PM"
                icon="🧠"
              />
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-3">
              <div className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                <span className="font-medium">M</span>
              </div>
              <h3 className="text-gray-600 font-medium">Monday, June 10</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <SimpleAppointmentCard
                title="Dermatologist"
                time="10:30 AM"
                icon="🔬"
              />
              <SimpleAppointmentCard
                title="Physical Therapy"
                time="3:15 PM"
                icon="💪"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div>
            <div className="flex items-center mb-3">
              <div className="bg-gray-100 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                <span className="font-medium">M</span>
              </div>
              <h3 className="text-gray-600 font-medium">Monday, June 3</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <SimpleAppointmentCard
                title="Dental Checkup"
                time="9:00 AM"
                icon="🦷"
              />
              <SimpleAppointmentCard
                title="Blood Test"
                time="11:30 AM"
                icon="💉"
              />
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-3">
              <div className="bg-gray-100 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                <span className="font-medium">T</span>
              </div>
              <h3 className="text-gray-600 font-medium">Tuesday, May 28</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <SimpleAppointmentCard
                title="Annual Physical"
                time="1:00 PM"
                icon="👨‍⚕️"
              />
              <SimpleAppointmentCard
                title="Eye Exam"
                time="3:45 PM"
                icon="👓"
              />
            </div>
          </div>
        </div>
      )}
      
      <button className="w-full mt-6 py-3 bg-white border border-blue-200 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
        View Full Calendar
      </button>
    </div>
  );
};

export default UpcomingSchedule;