import React from "react";

const Consult = () => {
  return (
    <div>
      <div className="bg-[#FFF7E2] min-h-screen pt-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="pb-20 text-4xl sm:text-5xl text-center text-[#3A643B] font-bold underline">
            What sets Ayurvedic consultations apart?
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {[
              {
                type: "text",
                title: "स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।",
                description:
                  "[ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. ]",
              },
              {
                type: "image",
                imageSrc: "Rectangle 4144.png",
              },
              {
                type: "text",
                title: "Precise Diagnosis",
                description:
                  "Ayurveda's core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment.",
              },
            ].map((item, index) =>
              item.type === "text" ? (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md p-6 text-center border-t-4 border-[#3A643B]"
                >
                  <h3 className="mt-4 text-lg sm:text-xl font-bold text-[#3A643B]">
                    {item.title}
                  </h3>
                  <p className="text-[#3A643B] mt-2 text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              ) : (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden"
                >
                  <img
                    src={item.imageSrc}
                    alt="Visual representation"
                    className="w-full h-full object-cover"
                  />
                </div>
              )
            )}
            </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 mt-4 pb-20">
            {[
              {
                type: "image",
                imageSrc: "Rectangle 4146.png",
              },
              {
                type: "text",
                title: "Zero side-effects",
                description:
                  "Ayurvedic treatments are devoid of chemicals, and are based completely on natural herbs",
              },
              {
                type: "image",
                imageSrc: "Rectangle 4148.png",
              },
              {
                type: "text",
                title: "Individual Treatment",
                description:
                  "all Treatments are personalized based on a person's unique constitution and health concerns.",
              },
            ].map((item, index) =>
              item.type === "text" ? (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md p-6 text-center border-t-4 border-[#3A643B]"
                >
                  <h3 className="mt-4 text-lg sm:text-xl font-bold text-[#3A643B]">
                    {item.title}
                  </h3>
                  <p className="text-[#3A643B] mt-2 text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              ) : (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden"
                >
                  <img
                    src={item.imageSrc}
                    alt="Visual representation"
                    className="w-full h-full object-cover"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consult;
