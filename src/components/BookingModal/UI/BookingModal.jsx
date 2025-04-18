import React from 'react'
import BookinModalBusiness from '../Business/BookinModalBusiness';

function BookingModal({ doctor, onClose, isOpen }) {
 
    if (!isOpen) return null;

    const {setSelectedTime, selectedTime, handleConfirm, availableTimeSlots} = BookinModalBusiness(doctor,onClose) 

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-gray-800 rounded-xl p-8 max-w-md w-full shadow-2xl border border-gray-700">
                <h2 className="text-2xl font-bold mb-6 text-white">Book Appointment with {doctor.name}</h2>
                
                <div className="space-y-6">
                    {Object.entries(availableTimeSlots).map(([period, times]) => (
                        <div key={period} className="space-y-3">
                            <h3 className="text-lg font-semibold text-gray-300 capitalize">
                                {period}
                            </h3>
                            <div className="grid grid-cols-3 gap-2">
                                {times.map((time) => (
                                    <button
                                        key={time}
                                        onClick={() => setSelectedTime(time)}
                                        className={`p-2 rounded-lg transition-all duration-200 ${
                                            selectedTime === time 
                                            ? 'bg-blue-600 text-white' 
                                            : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                                        }`}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 text-gray-400 hover:text-gray-200 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleConfirm}
                        className={`px-6 py-2 rounded-lg transition-colors shadow-md ${
                            selectedTime 
                            ? 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer' 
                            : 'bg-gray-600 text-gray-400 cursor-not-allowed opacity-50'
                        }`}
                        disabled={!selectedTime}
                    >
                        Confirm Booking
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BookingModal