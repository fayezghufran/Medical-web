import React from "react";

const MeetOurExperts = () => {
  const experts = [
    {
      name: "Dr. Vaishali Sharma",
      specialization: "Ayurveda Practitioner (BAMS, MD)",
      experience: "25 years of experience",
      skill: "Skin Specialist",
      rating: 4.5,
      imgUrl: "card.png",
    },
    {
      name: "Dr. Vaishali Sharma",
      specialization: "Ayurveda Practitioner (BAMS, MD)",
      experience: "25 years of experience",
      skill: "Skin Specialist",
      rating: 4.5,
      imgUrl: "card.png",
    },
    {
      name: "Dr. Vaishali Sharma",
      specialization: "Ayurveda Practitioner (BAMS, MD)",
      experience: "25 years of experience",
      skill: "Skin Specialist",
      rating: 4.5,
      imgUrl: "card.png",
    },
  ];

  return (
    <div className="bg-base-200 min-h-screen py-10 pt-20">
      <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl sm:text-5xl pb-10 font-bold underline text-center text-[#3A643B] mb-6">
        Meet Our Ayurveda Experts
      </h2>
      <div className="flex justify-center space-x-4">
        {experts.map((expert, index) => (
          <div
            key={index}
            className="bg-[#FDF7E8] rounded-2xl shadow-lg p-5 w-80 border"
          >
            <img
              src={expert.imgUrl}
              alt={expert.name}
              className="w-24 h-24 rounded-full mx-auto mb-3"
            />
            <h3 className="text-center font-bold text-lg mb-1">
              {expert.name}
            </h3>
            <p className="text-center text-sm text-gray-500 mb-2">
              {expert.specialization}
            </p>
            <p className="text-center text-sm text-gray-800 mb-2">
              {expert.experience}
            </p>
            <div className="text-center text-sm mb-2">
              <span className="bg-[#E7E5CE] text-[#3A643B] px-3 py-1 rounded-full">
                {expert.skill}
              </span>
            </div>
            <div className="text-center mb-3">
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-gray-500"> {expert.rating}</span>
            </div>
            <button className="block w-full bg-[#3A643B] text-white py-2 rounded-md">
              Book a session
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button className="text-[#3A643B] border-b-2 border-[#375c32] text-lg">
          Find more experts &rarr;
        </button>
      </div>
      </div>
    </div>
  );
};

export default MeetOurExperts;
