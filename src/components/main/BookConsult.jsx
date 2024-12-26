import React from "react";

const BookConsult = () => {
  return (
    <div>
      <div
        className="hero min-h-[80vh]"
        style={{
          backgroundImage: "url(/BookConsult.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl text-[#FFF7E2] leading-tight font-bold pb-4">
              Ready to restore harmony in your mind, body and spirit?
            </h1>
            <button className="btn bg-[#3A643B] px-10 text-lg shadow-lg text-white hover:bg-green-700 border-none">
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookConsult;
