import React from "react";
import { CiHospital1 } from "react-icons/ci";

const Feature = () => {
  return (
    <div>
      <div className="bg-[#FFF7E2] min-h-32 border-b-2 border-yellow-300">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-6">
            {[
              "Convenient Online & In-Clinic Consultations",
              "Expert Doctors at Your Service",
              "Seamless Appointment Scheduling",
              "Comprehensive Health Solutions",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-white rounded-lg shadow-sm border border-yellow-300 p-4"
              >
                <span className="text-[#2E37A4]">
                  <CiHospital1 className="bg-[#F7F7FC] w-14 h-14 p-2 rounded-full border border-black" />
                </span>
                <div>
                  <p className="font-bold text-sm sm:text-md">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
