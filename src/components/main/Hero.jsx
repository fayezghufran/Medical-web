import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-[90vh]"
        style={{
          backgroundImage: "url(Hero.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-neutral-content text-left">
          <div className="max-w-full mx-auto px-4 sm:px-6">
            {/* Use flexbox or custom margins to shift content */}
            <div className="w-full text-left mr-4 sm:mr-52"> {/* Added left margin */}
              <h3 className="mb-5 text-2xl text-[#FFF7E2]">
                Namaste, Welcome to Amrutam
              </h3>
              <h1 className="mb-5 text-5xl font-bold leading-tight text-white">
                Step into Holistic Healing with{" "}
                <span className="underline">Ayurveda</span>
                <br />
                Book Consultation with certified Experts.
              </h1>
              <p className="mb-5">
                Dive into the world of Ayurveda and experience personalized
                health solutions and <br /> holistic guidance from trusted
                Ayurvedic doctors anytime, anywhere.
              </p>
              <button className="btn bg-[#3A643B] px-8 text-md uppercase text-white hover:bg-green-700 border-none">
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
