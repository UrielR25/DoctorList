import React from 'react'

function SpecialtyFilter({ selectedSpecialty, onSpecialtyChange, specialties }) {
    return (
        <div className="p-6 flex justify-end items-center gap-4">
            <h2 className="text-2xl font-bold text-white">Filter Doctors</h2>
            <select 
                value={selectedSpecialty}
                onChange={(e) => onSpecialtyChange(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            >
                {specialties.map(specialty => (
                    <option key={specialty} value={specialty}>
                        {specialty}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default SpecialtyFilter