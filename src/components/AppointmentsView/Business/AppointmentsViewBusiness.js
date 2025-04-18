import { useState, useEffect } from 'react';

const AppointmentsViewBusiness = () => {
    // In a real app, this would come from a database or API
    // For now, we'll use localStorage to persist appointments between sessions
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        // Load appointments from localStorage on component mount
        const savedAppointments = localStorage.getItem('doctorAppointments');
        if (savedAppointments) {
            setAppointments(JSON.parse(savedAppointments));
        }
    }, []);

    const cancelAppointment = (id) => {
        const updatedAppointments = appointments.filter(appointment => appointment.id !== id);
        setAppointments(updatedAppointments);
        
        // Save to localStorage
        localStorage.setItem('doctorAppointments', JSON.stringify(updatedAppointments));
    };

    return {
        appointments,
        cancelAppointment
    };
};

export default AppointmentsViewBusiness;