import React from "react";
import { FaArrowRight } from "react-icons/fa";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-yellow-50 rounded-2xl border border-gray-300 shadow-md p-6 text-center">
      {/* Doctor Image */}
      <div className="relative w-24 h-24 mx-auto">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full rounded-full object-cover"
        />
        <div className="absolute bottom-0 right-0 bg-black text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
          {doctor.rating} ⭐
        </div>
      </div>

      {/* Doctor Details */}
      <h3 className="mt-4 text-xl font-semibold text-gray-800">
        {doctor.name}
      </h3>
      <p className="text-sm text-gray-500 mt-1">{doctor.specialization}</p>
      <p className="text-sm text-gray-500 mt-1 font-semibold">
        {doctor.experience} years of Experience
      </p>
      <p className="text-sm text-gray-500 mt-1">
        Speaks: {doctor.languages.join(", ")}
      </p>

      {/* Consultation Options */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        <button className="w-full py-2 border-2 border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-100">
          Video Consultation{" "}
          <span className="text-green-500">₹{doctor.videoConsultationFee}</span>
        </button>
        <button className="w-full py-2 border-2 border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-100">
          Chat Consultation{" "}
          <span className="text-green-500">{doctor.chatConsultationFee}</span>
        </button>
      </div>

      {/* Actions */}
      <div className="mt-4 space-y-2">
        <button className="w-full py-3 border border-[#3A643B] text-sm text-[#3A643B] hover:bg-[#3A643B] hover:text-white rounded-lg transition-all duration-300">
          View Profile
        </button>
        <button className="mt-6 w-full bg-[#3A643B] text-white py-3 rounded-lg hover:bg-green-700 transition-all duration-300">
          Book a consultation
        </button>
      </div>
    </div>
  );
};

const DoctorList = () => {
  const doctors = [
    {
      image: "/card.png",
      name: "Dr. Prerna Narang",
      specialization: "Male-Female Infertility",
      experience: 7,
      languages: ["English", "Hindi", "Marathi"],
      rating: 4.5,
      videoConsultationFee: 800,
      chatConsultationFee: "Free",
    },
    {
      image: "/card.png",
      name: "Dr. Prerna Narang",
      specialization: "Male-Female Infertility",
      experience: 7,
      languages: ["English", "Hindi", "Marathi"],
      rating: 4.5,
      videoConsultationFee: 800,
      chatConsultationFee: "Free",
    },
    {
      image: "/card.png",
      name: "Dr. Prerna Narang",
      specialization: "Male-Female Infertility",
      experience: 7,
      languages: ["English", "Hindi", "Marathi"],
      rating: 4.5,
      videoConsultationFee: 800,
      chatConsultationFee: "Free",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-green-100 border-b">
        <div className="max-w-6xl mx-auto p-6 py-10 text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Find Expert Doctors For An In-Clinic Session Here
          </h1>
          <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <select className="select select-bordered w-full sm:max-w-xs">
              <option disabled selected>
                Select Location
              </option>
              <option>New Delhi</option>
              <option>Greater Noida</option>
            </select>
            <label className="input input-bordered flex items-center gap-2 w-full sm:w-1/3">
              <input
                type="text"
                className="grow"
                placeholder="eg. Doctor, specialization, clinic name"
              />
              <FaArrowRight className="cursor-pointer" />
            </label>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {["Expertise", "Gender", "Fees", "Languages", "All Filters"].map(
            (filter, index) => (
              <div key={index} className="relative w-full sm:w-auto">
                <select
                  className="bg-gray-200 text-gray-700 py-2 px-4 text-left rounded-lg text-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 w-full"
                  defaultValue=""
                >
                  <option value="" disabled>
                    {filter}
                  </option>
                  {/* Add dynamic options here */}
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
            )
          )}
        </div>

        <div className="border-t-2 border-gray-200 my-6"></div>

        {/* Active Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {["Hair care", "Female", "Rs.0-Rs.500", "Hindi"].map(
            (filter, index) => (
              <span
                key={index}
                className="bg-green-100 text-green-600 py-2 px-4 rounded-full text-sm flex items-center gap-2"
              >
                {filter}{" "}
                <button className="text-green-600 hover:text-green-800">
                  ×
                </button>
              </span>
            )
          )}
        </div>
      </div>

      {/* Doctor Cards */}
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
