// "use client";

// import React, { useState, useEffect } from "react";

// // Define the type for each testimonial
// interface Testimonial {
//   text: string;
//   clientName: string;
// }

// // Define the props for the carousel component
// interface TestimonialCarouselProps {
//   testimonials: Testimonial[];
//   speed: number;
// }

// const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
//   testimonials,
//   speed,
// }) => {
//   const [current, setCurrent] = useState(0);
//   const [fade, setFade] = useState(false);

//   useEffect(() => {
//     // Set up interval for cycling through testimonials
//     const interval = setInterval(() => {
//       setFade(true);
//       setTimeout(() => {
//         setCurrent((prev) => (prev + 1) % testimonials.length); // Loop through testimonials
//         setFade(false);
//       }, 700); // 700ms for fade-out transition
//     }, speed);

//     return () => clearInterval(interval); // Clean up interval on component unmount
//   }, [speed, testimonials.length]);

//   return (
//     <>
//       <section className="py-10 px-4 sm:px-6 lg:px-8">
// <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-10 text-center py-4 rounded-lg">
//   Testimonials
// </h2>
// {/* Line separator */}
// <div className="border-t border-black/50 my-8" />

//         <div className="h-[200px] w-full flex justify-center items-center text-center overflow-hidden relative rounded-lg bg-[#f9f9f9] py-[10em]">
//           <div
//             className={`absolute max-w-[500px] w-full h-full flex flex-col justify-center items-center gap-2 transition-transform duration-700 ${
//               fade
//                 ? "opacity-0 translate-y-[100%]"
//                 : "opacity-100 translate-y-0"
//             }`}
//           >
//             <p className="relative text-left text-sm leading-5 pl-6 font-medium text-[#626262] before:content-['“'] before:absolute before:left-[-15px] before:top-[-20px] before:text-[100px] before:text-[#d5d5d5] before:leading-none before:font-sans">
//               {testimonials[current].text}
//             </p>
//             <span className="text-sm font-bold">
//               {testimonials[current].clientName}
//             </span>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default TestimonialCarousel;

import React from "react";
import { testimonials } from "../data/data";

const TestimonialCards = () => {
  return (
    <>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-10 text-center py-4 rounded-lg">
        Testimonials
      </h2>
      {/* Line separator */}
      <div className="border-t border-black/50 my-8" />

      <div className="w-full px-4 mb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover-border-2 hover:border-[#2E2F5F] transition-all duration-300"
            // hover:bg-[#2E2F5F]/80 transition-all duration-300 hover:text-white
          >
            <div className="flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-4">{testimonial.text}</h3>
              <p className="text-gray-600 flex-grow ">
                {testimonial.clientName}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TestimonialCards;
