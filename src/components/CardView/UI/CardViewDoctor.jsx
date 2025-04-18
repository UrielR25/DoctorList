import React, { useState } from 'react'
import CardViewBusiness from '../Business/CardViewBusiness'
import BookingModal from '../../BookingModal/UI/BookingModal'
import SpecialtyFilter from './SpecialtyFilter'
import AppointmentsView from '../../AppointmentsView/UI/AppointmentsView'

function CardViewDoctor() {
    const { Doctors, selectedDoctor, showModal, setShowModal, handleBooking } = CardViewBusiness();
    const [selectedSpecialty, setSelectedSpecialty] = useState('All');
    const [activeTab, setActiveTab] = useState('doctors'); // 'doctors' or 'appointments'

    const specialties = ['All', ...new Set(Doctors.map(doctor => doctor.specialty))];
    
    const filteredDoctors = selectedSpecialty === 'All' 
        ? Doctors 
        : Doctors.filter(doctor => doctor.specialty === selectedSpecialty);

    return (
        <div className="min-h-screen pb-12" style={{ backgroundColor: 'oklch(0.21 0.03 264.67 / 0)' }}>
            {/* Tab Navigation */}
            <div className="flex justify-center pt-6 pb-2">
                <div className="bg-gray-800 rounded-xl p-1 flex shadow-lg">
                    <button 
                        onClick={() => setActiveTab('doctors')}
                        className={`px-6 py-3 rounded-lg font-medium transition-all ${
                            activeTab === 'doctors' 
                            ? 'bg-blue-600 text-white' 
                            : 'text-gray-300 hover:text-white'
                        }`}
                    >
                        Doctors
                    </button>
                    <button 
                        onClick={() => setActiveTab('appointments')}
                        className={`px-6 py-3 rounded-lg font-medium transition-all ${
                            activeTab === 'appointments' 
                            ? 'bg-blue-600 text-white' 
                            : 'text-gray-300 hover:text-white'
                        }`}
                    >
                        My Appointments
                    </button>
                </div>
            </div>

            {activeTab === 'doctors' ? (
                <>
                    <SpecialtyFilter 
                        selectedSpecialty={selectedSpecialty}
                        onSpecialtyChange={setSelectedSpecialty}
                        specialties={specialties}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                        {filteredDoctors.map((doctor) => (
                            <div key={doctor.id} 
                                className="bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 hover:scale-105 border border-gray-700"
                                style={{
                                    boxShadow: '0 4px 20px rgba(0, 123, 255, 0.3)'
                                }}
                            >
                                <div className="bg-gray-800 p-6 border-b border-gray-700">
                                    <div className="flex justify-center">
                                        <img 
                                            className="w-32 h-32 rounded-full object-cover border-4 border-gray-700 shadow-lg"
                                            src={doctor.image}
                                            alt={`${doctor.name} profile`}
                                        />
                                    </div>
                                    <div className="text-center mt-4">
                                        <h3 className="text-xl font-bold text-white">{doctor.name}</h3>
                                        <p className="text-blue-400 font-medium">{doctor.specialty}</p>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span>📍</span>
                                        <span className="text-gray-300">{doctor.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span>🏥</span>
                                        <span className="text-gray-300">{doctor.room}</span>
                                    </div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <span>⏰</span>
                                        <span className="text-gray-300">{doctor.availability}</span>
                                    </div>

                                    <p className="text-gray-300 text-base mb-2">
                                        {doctor.description}
                                    </p>

                                    <div className="flex flex-col gap-2 mt-4">
                                        <button 
                                            onClick={() => handleBooking(doctor)}
                                            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                                        >
                                            Book Appointment
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <AppointmentsView />
            )}

            <BookingModal 
                doctor={selectedDoctor}
                isOpen={showModal}
                onClose={() => setShowModal(false)}
            />
        </div>
    )
}

export default CardViewDoctor