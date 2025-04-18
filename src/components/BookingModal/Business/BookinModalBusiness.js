import { useState } from 'react';

const BookinModalBusiness = (doctor, onClose) => {
    const [selectedTime, setSelectedTime] = useState(null);

    const availableTimeSlots = {
        morning: ["9:00 AM", "10:00 AM", "11:00 AM"],
        afternoon: ["2:00 PM", "3:00 PM", "4:00 PM"],
        evening: ["5:00 PM", "6:00 PM", "7:00 PM"]
    };

    const handleConfirm = () => {
        if (!selectedTime) {
            alert('Please select a time slot');
            return;
        }

        // Create a new appointment
        const today = new Date();
        const appointment = {
            id: Date.now(), // Use timestamp as unique ID
            doctorName: doctor.name,
            doctorImage: doctor.image,
            specialty: doctor.specialty,
            location: doctor.location,
            room: doctor.room,
            date: today.toLocaleDateString(),
            time: selectedTime
        };

        // Get existing appointments from localStorage
        const existingAppointments = localStorage.getItem('doctorAppointments');
        let appointments = [];
        
        if (existingAppointments) {
            appointments = JSON.parse(existingAppointments);
        }
        
        // Add new appointment
        appointments.push(appointment);
        
        // Save back to localStorage
        localStorage.setItem('doctorAppointments', JSON.stringify(appointments));

        alert(`Appointment confirmed with ${doctor.name} at ${selectedTime}`);
        setSelectedTime(null);
        onClose();
    };

    return {
        handleConfirm,
        availableTimeSlots,
        selectedTime,
        setSelectedTime
    }
}

export default BookinModalBusiness;