import React from "react";

const DownloadPlay = () => {
  return (
    <div>
      <div className="bg-[#FFF7E2] min-h-[80vh] pt-20 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="mobile.png" className="max-w-2xl" />
            <div>
              <h2 className="text-4xl text-[#3A643B] font-bold">Amrutam Home App</h2>
              <p className="py-6 text-sm">
                The Amrutam Home App is your one stop app for all things
                Ayurveda! Apart from mimicking the significant characteristics
                of our website, this app offers a wide range of additional
                features.
              </p>
              <h3 className="text-3xl font-bold pb-10">
                Get a diet & lifestyle consultation with ayurvedic experts
                across the globe{" "}
              </h3>

              <h4 className="text-3xl font-bold pb-4">Get the App now</h4>
             <div className="flex gap-4">
             <img src="image 67.png" alt="download" className="w-48 cursor-pointer"/>
             <img src="image 68.png" alt="download" className="w-48 cursor-pointer"/>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPlay;
