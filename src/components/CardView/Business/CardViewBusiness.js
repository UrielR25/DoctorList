import React, { useState } from 'react';

const CardViewBusiness = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showModal, setShowModal] = useState(false);
    const Doctors = [
        {
            id: 1,
            name: "Dr. Strange",
            specialty: "Neurosurgeon",
            experience: "15 years",
            description: "Former neurosurgeon who became the Sorcerer Supreme. Specializes in mystical healing and interdimensional medicine.",
            location: "Sanctum Sanctorum",
            room: "Meditation Chamber",
            availability: "By appointment only",
            image: "https://www.clarin.com/img/2022/05/05/zrOSKM_Xk_2000x1500__1.jpg"
          },
          {
            id: 2,
            name: "Dr. House",
            specialty: "Diagnostician",
            experience: "20 years",
            description: "Brilliant diagnostician specializing in rare and complex cases. Known for unconventional methods and remarkable diagnostic skills.",
            location: "Princeton-Plainsboro Teaching Hospital",
            room: "Diagnostics Department",
            availability: "Mon-Fri, 10AM-4PM",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFFzELYTA1rmv-wR6q3BoNXGYPoyPQ35K7Pw&s"
          },
          {
            id: 3,
            name: "Dr. Octopus",
            specialty: "Nuclear Physics",
            experience: "25 years",
            description: "Pioneering scientist with revolutionary mechanical arms. Specializes in atomic research and experimental treatments.",
            location: "Advanced Science Laboratory",
            room: "Research Wing, Room 88",
            availability: "Tue-Thu, 8PM-2AM",
            image: "https://i.blogs.es/232d83/tritio1/450_1000.jpg"
          },
          {
            id: 4,
            name: "Dr. James Wilson",
            specialty: "Orthopedist",
            experience: "12 years",
            description: "Sports medicine specialist with expertise in joint replacement.",
            location: "Sports Medicine Center",
            room: "Room 508, Building D",
            availability: "Mon-Thu, 7AM-3PM",
            image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.1"
          },
          {
            id: 5,
            name: "Dr. Lisa Thompson",
            specialty: "Dermatologist",
            experience: "9 years",
            description: "Expert in skin conditions and cosmetic dermatology procedures.",
            location: "Skin Care Clinic",
            room: "Room 303, Building E",
            availability: "Wed-Sun, 9AM-5PM",
            image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.1"
          },
          {
            id: 6,
            name: "Dr. Robert Kim",
            specialty: "Psychiatrist",
            experience: "14 years",
            description: "Mental health specialist focusing on anxiety and depression treatment.",
            location: "Mental Health Center",
            room: "Room 404, Building F",
            availability: "Mon-Fri, 11AM-7PM",
            image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.1"
          },
        
    ]
    const handleBooking = (doctor) => {
      setSelectedDoctor(doctor);
      setShowModal(true);
  };
return{
    Doctors,
    selectedDoctor,
    setSelectedDoctor,
    showModal,
    setShowModal,
    handleBooking,
    }
}

export default CardViewBusiness;