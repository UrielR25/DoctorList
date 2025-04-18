import React, { useState } from 'react'

function AppointmentsSummary() {
    const [selectedSpecialty, setSelectedSpecialty] = useState('All');
    
    const appointments = [
        {
            id: 1,
            doctorName: "Dr. Sarah Johnson",
            specialty: "Cardiologist",
            rating: 4.8,
            dateTime: "2024-01-20 10:00 AM",
            location: "Medical Center Downtown",
            room: "Room 302, Building A",
            status: "Confirmed"
        },
        {
            id: 2,
            doctorName: "Dr. Michael Chen",
            specialty: "Neurologist",
            rating: 4.9,
            dateTime: "2024-01-22 2:00 PM",
            location: "Brain & Spine Institute",
            room: "Room 405, Building B",
            status: "Pending"
        }
    ];

    const specialties = ['All', 'Cardiologist', 'Neurologist', 'Pediatrician'];

    const filteredAppointments = selectedSpecialty === 'All' 
        ? appointments 
        : appointments.filter(app => app.specialty === selectedSpecialty);

    return (
        <div className="p-6 max-w-4xl mx-auto bg-gray-900">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-white">My Appointments</h2>
                <select 
                    value={selectedSpecialty}
                    onChange={(e) => setSelectedSpecialty(e.target.value)}
                    className="px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {specialties.map(specialty => (
                        <option key={specialty} value={specialty}>
                            {specialty}
                        </option>
                    ))}
                </select>
            </div>
            <div className="space-y-4">
                {filteredAppointments.map((appointment) => (
                    <div 
                        key={appointment.id}
                        className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-700"
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <div className="flex items-center gap-3">
                                    <h3 className="text-xl font-semibold text-blue-400">
                                        {appointment.doctorName}
                                    </h3>
                                    <div className="flex items-center text-yellow-500">
                                        <span>⭐</span>
                                        <span className="ml-1 text-gray-300">{appointment.rating}</span>
                                    </div>
                                </div>
                                <p className="text-gray-400 font-medium">
                                    {appointment.specialty}
                                </p>
                                <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold mt-2 ${
                                    appointment.status === 'Confirmed' 
                                        ? 'bg-green-900 text-green-300' 
                                        : 'bg-yellow-900 text-yellow-300'
                                }`}>
                                    {appointment.status}
                                </span>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-semibold text-gray-300">
                                    {new Date(appointment.dateTime).toLocaleDateString()}
                                </p>
                                <p className="text-blue-400 font-medium">
                                    {new Date(appointment.dateTime).toLocaleTimeString([], { 
                                        hour: '2-digit', 
                                        minute: '2-digit' 
                                    })}
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 text-gray-400">
                            <p className="flex items-center gap-2">
                                <span className="text-blue-400">📍</span> 
                                {appointment.location}
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="text-blue-400">🏥</span>
                                {appointment.room}
                            </p>
                        </div>
                        <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                            Cancel Appointment
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AppointmentsSummary