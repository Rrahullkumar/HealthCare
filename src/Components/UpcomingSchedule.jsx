import SimpleAppointmentCard from "./AppointmentCard";

const UpcomingSchedule = () => {
  return (
    <div className="bg-blue-50 rounded-2xl p-6">
      <h2 className="text-lg font-semibold mb-6">The Upcoming Schedule</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-gray-600 font-medium mb-3">On Thursday</h3>
          <div className="flex gap-3">
            <SimpleAppointmentCard
              title="Health checkup complete"
              time="11:00 AM"
              icon="✅"
            />
            <SimpleAppointmentCard
              title="Ophthalmologist"
              time="14:00 PM"
              icon="👁️"
            />
          </div>
        </div>


        <div>
          <h3 className="text-gray-600 font-medium mb-3">On Saturday</h3>
          <div className="flex gap-3">
            <SimpleAppointmentCard
              title="Cardiologist"
              time="12:00 AM"
              icon="❤️"
            />
            <SimpleAppointmentCard
              title="Neurologist"
              time="16:00 PM"
              icon="🧠"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default UpcomingSchedule