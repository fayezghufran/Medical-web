import React from "react";

const CustomerStories = () => {
  const testimonials = [
    {
      title: "Consulted for Skin",
      name: "Sophie Moore",
      location: "Chennai",
      date: "17/02/24",
      rating: 5,
      feedback: "One of a kind service",
      description:
        "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipiscing.",
    },
    {
      title: "Consulted for Hair",
      name: "Sophie Moore",
      location: "Mumbai",
      date: "17/02/24",
      rating: 5,
      feedback: "One of a kind service",
      description:
        "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipiscing.",
    },
    {
      title: "Consulted for Hair",
      name: "Sophie Moore",
      location: "Chennai",
      date: "17/02/24",
      rating: 5,
      feedback: "One of a kind service",
      description:
        "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipiscing.",
    },
  ];

  return (
    <div className="bg-[#FDF7E8] min-h-[90vh] py-10 pt-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="pb-10 text-4xl sm:text-5xl underline font-bold text-center text-[#3A643B]">
          Stories from our valued customers!
        </h2>
        <div className="mt-6 flex justify-center space-x-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg w-80 border"
            >
              <h3 className="text-lg font-semibold bg-[#ECE7FF] p-4 rounded-t-lg">
                {testimonial.title}
              </h3>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center mb-4">
                    <img
                      src="/BG  .png"
                      alt="Profile Picture"
                      className="w-12 h-12 rounded-full object-cover border border-gray-200"
                    />
                    <div className="ml-3">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
                <div className="flex items-center mb-2">
                  {Array(testimonial.rating)
                    .fill()
                    .map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">
                        ★
                      </span>
                    ))}
                </div>
                <p className="font-bold mb-2">{`"${testimonial.feedback}"`}</p>
                <p className="text-sm text-gray-500">
                  {testimonial.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerStories;
