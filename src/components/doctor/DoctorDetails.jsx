import React, { useState } from "react";
import {
  CiFacebook,
  CiInstagram,
  CiYoutube,
  CiTwitter,
  CiHospital1,
} from "react-icons/ci";
import { FaHeartbeat } from "react-icons/fa";

const DoctorDetails = () => {
  const [selectedSession, setSelectedSession] = useState("Video");
  const [selectedDate, setSelectedDate] = useState("Mon, 10 Oct");
  const [selectedTime, setSelectedTime] = useState("11:00 AM");

  const handleSessionSelect = (type) => {
    setSelectedSession(type);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section */}
        <div className="space-y-6">
          {/* About Section */}
          <div className="bg-white rounded-lg border border-gray-300">
            <div className="bg-gradient-to-r from-[#E0E8E2] to-[#FAFAFA] p-4 rounded-t-lg">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">A Little About Me</h2>
                <button className="text-[#3A643B] font-medium border border-[#3A643B] px-3 py-1 rounded-lg hover:bg-green-100">
                  Follow +
                </button>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 mt-3">
                Hello! I am Dr. Bruce Willis, a Gynaecologist at Sanjivni
                Hospital, Surat. I love to work with all my hospital staff and
                senior doctors. Completed my graduation in Gynaecologist
                Medicine from the
              </p>
              <div className="flex w-full flex-col">
                <a className="link divider divider-end">Read More</a>
              </div>
              <div className="mt-4 flex flex-wrap items-center space-x-4">
                <h3 className="text-sm font-semibold text-gray-800">
                  Language Spoken
                </h3>
                <div className="flex space-x-2">
                  {["English", "Hindi", "Telugu"].map((lang, index) => (
                    <span
                      key={index}
                      className="text-sm bg-gray-100 px-3 py-1 rounded-lg"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4 mt-4 text-gray-500">
                <CiFacebook className="bg-gray-100 w-10 h-10 p-2 rounded-full cursor-pointer border border-gray-300 hover:bg-blue-100 hover:border-blue-500 hover:text-blue-500 transition-all duration-300" />
                <CiInstagram className="bg-gray-100 w-10 h-10 p-2 rounded-full cursor-pointer border border-gray-300 hover:bg-pink-100 hover:border-pink-500 hover:text-pink-500 transition-all duration-300" />
                <CiYoutube className="bg-gray-100 w-10 h-10 p-2 rounded-full cursor-pointer border border-gray-300 hover:bg-red-100 hover:border-red-500 hover:text-red-500 transition-all duration-300" />
                <CiTwitter className="bg-gray-100 w-10 h-10 p-2 rounded-full cursor-pointer border border-gray-300 hover:bg-sky-100 hover:border-sky-500 hover:text-sky-500 transition-all duration-300" />
              </div>
            </div>
          </div>

          {/* Specializations */}
          <div className="bg-white rounded-lg border border-gray-300">
            <h2 className="text-lg font-semibold bg-gradient-to-r from-[#E0E8E2] to-[#FAFAFA] p-4 rounded-t-lg">
              I Specialize In
            </h2>
            <div className="p-6">
              <div className="grid grid-cols-4 gap-4 mt-4">
                {["Women's Health", "Skin Care", "Immunity", "Hair Care"].map(
                  (item, index) => (
                    <div key={index} className="flex flex-col items-center">
                      {/* Square Box */}
                      <div className="w-16 h-16 bg-[#FFFBF2] border border-gray-200 rounded-lg flex items-center justify-center">
                        <div className="w-10 h-10 bg-[#E0E8E2] rounded-full border-4 border-white flex items-center justify-center">
                          {/* Add your icon here */}
                          <FaHeartbeat className="text-[#147A36] text-lg" />
                        </div>
                      </div>
                      {/* Text Outside */}
                      <p className="mt-2 text-sm font-medium text-center">
                        {item}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Concerns */}
          <div className="bg-white rounded-lg border border-gray-300">
            <h2 className="text-lg font-semibold bg-gradient-to-r from-[#E0E8E2] to-[#FAFAFA] p-4 rounded-t-lg">
              The Concerns I Treat
            </h2>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "Skin Treatment",
                  "Pregnancy",
                  "Period Doubts",
                  "Endometriosis",
                  "Pelvic Pain",
                  "Ovarian Cysts",
                  "+ 5 More",
                ].map((concern, index) => (
                  <span
                    key={index}
                    className={`text-sm px-3 py-1 rounded-lg ${
                      concern === "+ 5 More"
                        ? "bg-transparent border border-gray-300 text-gray-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {concern}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="bg-white rounded-lg border border-gray-300">
            <h2 className="text-lg font-semibold bg-gradient-to-r from-[#E0E8E2] to-[#FAFAFA] p-4 rounded-t-lg">
              My Work Experience
            </h2>
            <div className="p-6">
              <p className="text-sm text-[#3A643B] uppercase mt-2">
                I have been in practice for: <strong>7+ years</strong>
              </p>
              <hr className="mt-4 bg-gray-300" />
              <ul className="mt-4 space-y-4">
                {[
                  { place: "Midtown Medical Clinic", period: "2016-Present" },
                  { place: "Midtown Medical Clinic", period: "2010-2015" },
                ].map((experience, index) => (
                  <li key={index} className="flex justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-[#2E37A4]">
                        {/* Replace with your desired icon */}
                        <CiHospital1 className="bg-[#F7F7FC] w-10 h-10 p-2 rounded-md cursor-pointer" />
                      </span>
                      <div>
                        <p className="font-medium">{experience.place}</p>
                        <p className="text-sm text-gray-500">Senior doctor</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">
                      {experience.period}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Featured Reviews (102) */}
          <div className="bg-white rounded-lg border border-gray-300">
            <h2 className="text-lg font-semibold bg-gradient-to-r from-[#E0E8E2] to-[#FAFAFA] p-4 rounded-t-lg">
              Featured Reviews (102)
            </h2>
            <div className="p-6">
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <div className="flex items-center mb-4">
                  <img
                    src="/profile_pic.png"
                    alt="Profile Picture"
                    className="w-12 h-12 rounded-full object-cover border border-gray-200"
                  />
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Alicent Hightower
                    </h3>
                    <p className="text-sm text-gray-500">
                      Consulted for Skin care
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <p className="text-yellow-500 font-bold mr-2"></p>
                  <div className="flex">
                    {Array.from({ length: 5 }, (_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ${
                          index < 4 ? "text-yellow-400" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.905c.969 0 1.371 1.24.588 1.81l-3.975 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.975-2.89a1 1 0 00-1.176 0l-3.975 2.89c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.49 9.1c-.783-.57-.38-1.81.588-1.81h4.905a1 1 000.95-.69l1.518-4.674z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Customer Feedback */}
                <p className="text-gray-600 mb-4 italic">
                  "Might be bit early to confirm but yes I can see noticeable
                  difference in my hairfall. will write again after using it for
                  longer periods"
                </p>
              </div>

              <div className="bg-gray-100 rounded-lg p-4">
                <div className="flex items-center mb-4">
                  <img
                    src="/profile_pic.png"
                    alt="Profile Picture"
                    className="w-12 h-12 rounded-full object-cover border border-gray-200"
                  />
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Alicent Hightower
                    </h3>
                    <p className="text-sm text-gray-500">
                      Consulted for Skin care
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <p className="text-yellow-500 font-bold mr-2"></p>
                  <div className="flex">
                    {Array.from({ length: 5 }, (_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ${
                          index < 5 ? "text-yellow-400" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.905c.969 0 1.371 1.24.588 1.81l-3.975 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.975-2.89a1 1 0 00-1.176 0l-3.975 2.89c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.49 9.1c-.783-.57-.38-1.81.588-1.81h4.905a1 1 000.95-.69l1.518-4.674z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Customer Feedback */}
                <p className="text-gray-600 mb-4 italic">
                  "Might be bit early to confirm but yes I can see noticeable
                  difference in my hairfall. will write again after using it for
                  longer periods"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          {/* Appointment Details */}
          <div className="bg-white rounded-lg border border-gray-300 p-6">
            <div className="flex justify-between items-center p-4 border border-gray-300 rounded-lg">
              <h2 className="text-lg font-semibold">Appointment Fee</h2>
              <p className="text-[#3A643B] font-medium text-xl mt-0">₹699.00</p>
            </div>

            <div className="flex w-full flex-col">
              <h3 className="mt-6 text-md font-semibold divider divider-start">
                Select your mode of session
              </h3>
            </div>
            <div className="flex space-x-2 mt-3">
              {[
                { type: "In-Clinic", duration: "45 Mins" },
                { type: "Video", duration: "45 Mins", selected: true },
                { type: "Chat", duration: "10 Mins" },
              ].map((session, index) => (
                <div
                  key={index}
                  onClick={() => handleSessionSelect(session.type)}
                  className={`p-3 border rounded-lg cursor-pointer ${
                    selectedSession === session.type
                      ? "border-[#3A643B] bg-green-50"
                      : "border-gray-300"
                  }`}
                >
                  <p className="text-sm font-medium">{session.type}</p>
                  <p className="text-xs text-gray-500">{session.duration}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-6 text-md font-semibold divider divider-start">
              Pick a time slot
            </h3>
            <div className="flex space-x-4 mt-4">
              {["Mon, 10 Oct", "Tue, 11 Oct", "Wed, 12 Oct"].map(
                (date, index) => (
                  <div
                    key={index}
                    onClick={() => handleDateSelect(date)}
                    className={`p-3 border rounded-lg cursor-pointer ${
                      selectedDate === date
                        ? "border-[#3A643B] bg-green-50"
                        : "border-gray-300"
                    }`}
                  >
                    <p className="text-sm font-medium">{date}</p>
                    <p className="text-xs text-gray-500">
                      {index === 0
                        ? "10 slots"
                        : index === 1
                        ? "02 slots"
                        : "05 slots"}
                    </p>
                  </div>
                )
              )}
            </div>

            <h3 className="mt-6 text-md font-semibold">Morning</h3>
            <div className="grid grid-cols-4 gap-2 mt-3">
              {[
                "09:00 AM",
                "09:30 AM",
                "10:00 AM",
                "10:15 AM",
                "10:45 AM",
                "11:00 AM",
              ].map((time, index) => (
                <button
                  key={index}
                  onClick={() => handleTimeSelect(time)}
                  className={`px-3 py-2 rounded-lg ${
                    selectedTime === time
                      ? "bg-[#3A643B] text-white"
                      : "border border-gray-300"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>

            <h3 className="mt-6 text-md font-semibold">Evening</h3>
            <div className="grid grid-cols-4 gap-2 mt-3">
              {["04:00 PM", "04:15 PM", "04:30 PM", "04:45 PM", "05:15 PM"].map(
                (time, index) => (
                  <button
                    key={index}
                    onClick={() => handleTimeSelect(time)}
                    className={`px-3 py-2 rounded-lg ${
                      selectedTime === time
                        ? "bg-[#3A643B] text-white"
                        : "border border-gray-300"
                    }`}
                  >
                    {time}
                  </button>
                )
              )}
            </div>

            <button className="btn mt-6 w-full bg-[#3A643B] text-white py-3 rounded-lg hover:bg-green-700">
              Make An Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
