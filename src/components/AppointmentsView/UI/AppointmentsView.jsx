import React from 'react'
import AppointmentsViewBusiness from '../Business/AppointmentsViewBusiness'

function AppointmentsView() {
    const { appointments, cancelAppointment } = AppointmentsViewBusiness();

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">My Reserved Appointments</h2>
            
            {appointments.length === 0 ? (
                <div className="bg-gray-800 rounded-xl p-8 text-center border border-gray-700">
                    <p className="text-gray-300 text-lg">You don't have any appointments scheduled yet.</p>
                    <p className="text-blue-400 mt-2">Book an appointment with one of our doctors!</p>
                </div>
            ) : (
                <div className="grid gap-6">
                    {appointments.map((appointment) => (
                        <div 
                            key={appointment.id}
                            className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg hover:shadow-xl transition-all"
                        >
                            <div className="flex flex-col md:flex-row justify-between">
                                <div className="flex items-start gap-4">
                                    <img 
                                        src={appointment.doctorImage} 
                                        alt={appointment.doctorName}
                                        className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                                    />
                                    <div>
                                        <h3 className="text-xl font-semibold text-blue-400">
                                            {appointment.doctorName}
                                        </h3>
                                        <p className="text-gray-300 font-medium">
                                            {appointment.specialty}
                                        </p>
                                        <div className="mt-2 text-gray-400">
                                            <p className="flex items-center gap-2">
                                                <span>📍</span> 
                                                {appointment.location}
                                            </p>
                                            <p className="flex items-center gap-2">
                                                <span>🏥</span>
                                                {appointment.room}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mt-4 md:mt-0 text-right">
                                    <div className="bg-gray-700 rounded-lg p-3 inline-block">
                                        <p className="text-white font-semibold">
                                            {appointment.date}
                                        </p>
                                        <p className="text-blue-300">
                                            {appointment.time}
                                        </p>
                                    </div>
                                    <button 
                                        onClick={() => cancelAppointment(appointment.id)}
                                        className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors block ml-auto"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default AppointmentsView