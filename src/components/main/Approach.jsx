import React from "react";

const Approach = () => {
  return (
    <div>
      <div className="bg-base-200 min-h-screen pt-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl text-[#3A643B] text-center font-bold underline">
            Our Ayurvedic Approach
          </h1>
          <p className="py-8 text-center text-gray-700 pb-20">
            At Amrutam, we follow a unique and personalized approach to healing.
            Our expert practitioners begin each treatment process by conducting
            a thorough analysis of the patient’s body type, medical history, and
            current health conditions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: 1,
                title: "Make Appointment",
                description:
                  "You must make an appointment in advance, to choose the service and date.",
              },
              {
                number: 2,
                title: "Consultations",
                description:
                  "The next stage involves a thorough consultation with an Ayurveda practitioner.",
              },
              {
                number: 3,
                title: "Treatment Planning",
                description:
                  "The Ayurvedic practitioner creates a personalized treatment plan for you.",
              },
              {
                number: 4,
                title: "Maintenance",
                description:
                  "These visits allow for assessment of progress and adjustments to the treatment.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-yellow-50 rounded-2xl shadow-md p-6 text-center border-t-4 border-[#3A643B]"
              >
                <div className="relative w-20 h-20 mx-auto">
                  <div className="bg-[#7D9674] border border-black w-full h-full flex items-center justify-center rounded-full">
                    <h1 className="text-4xl font-bold text-white">
                      {step.number}
                    </h1>
                  </div>
                </div>
                <h3 className="mt-4 text-lg sm:text-xl font-semibold text-[#3A643B]">
                  {step.title}
                </h3>
                <p className="text-gray-500 mt-2 text-sm sm:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
