import React from "react";

const AyurvedaPage = () => {
  return (
    <div className="bg-white min-h-screen mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl underline font-bold text-[#3A643B] mb-4 pt-4 pb-4">
            Discover Ayurveda's Magic With Us
          </h1>
          <p className="text-gray-700">
            Ayurvedic treatment aims to balance your body and mind, bringing
            harmony and vitality. It's like a journey to better health using
            ancient wisdom, a totally effective approach for a better life.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Left Side Content */}
          <div className="space-y-8 w-full md:w-1/2">
            <div className="flex items-center space-x-6">
              <div className="flex-1 text-right">
                <h3 className="text-md font-semibold">Personalized Wellness</h3>
                <p className="text-gray-600 text-sm">
                  Get treatments made just for you based on your individual
                  doshas (body type).
                </p>
              </div>
              <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center">
                <img src="Frame1.png" alt="icon" className="w-full h-full" />
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex-1 text-right">
                <h3 className="text-md font-semibold">Focus on Prevention</h3>
                <p className="text-gray-600 text-sm">
                  Stop problems even before they start.
                </p>
              </div>
              <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center">
                <img src="Frame2.png" alt="icon" className="w-full h-full" />
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex-1 text-right">
                <h3 className="text-md font-semibold">Holistic Healing</h3>
                <p className="text-gray-600 text-sm">
                  Fix the root problem for long-lasting health.
                </p>
              </div>
              <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center">
                <img src="Frame3.png" alt="icon" className="w-full h-full" />
              </div>
            </div>
          </div>

          {/* Center Image */}
          {/* Center Image */}
          <div className="flex justify-center items-center w-full">
            <img
              src="/Ayurveda.png"
              alt="Ayurveda Illustration"
              className="w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem] rounded-full"
            />
          </div>

          {/* Right Side Content */}
          <div className="space-y-8 w-full md:w-1/2">
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center">
                <img src="Frame4.png" alt="icon" className="w-full h-full" />
              </div>
              <div className="flex-1">
                <h3 className="text-md font-semibold">Natural Remedies</h3>
                <p className="text-gray-600 text-sm">
                  Using herbs and natural therapies for healing.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center">
                <img src="Frame5.png" alt="icon" className="w-full h-full" />
              </div>
              <div className="flex-1">
                <h3 className="text-md font-semibold">Mind-Body Connection</h3>
                <p className="text-gray-600 text-sm">
                  Keep your mind and body in sync for a happy life.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center">
                <img src="Frame6.png" alt="icon" className="w-full h-full" />
              </div>
              <div className="flex-1">
                <h3 className="text-md font-semibold">Boosting Immunity</h3>
                <p className="text-gray-600 text-sm">
                  Stay strong and healthy for life, not just for today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AyurvedaPage;
