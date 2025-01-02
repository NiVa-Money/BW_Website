"use client";

import React from "react";
import { motion } from "framer-motion";

const FullScreenGradientAnimation: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden ">
      {/* Top Right Circle */}
      <motion.div
        className="absolute top-0 right-0 -z-10 m-auto h-[400px] w-[400px] rounded-full bg-[#387D8C]/40 blur-[150px]"
        animate={{
          x: ["0%", "50%", "0%", "-50%", "0%"], // Horizontal movement: center -> right -> center -> left -> center
          y: ["0%", "-30%", "0%", "30%", "0%"], // Vertical movement: center -> up -> center -> down -> center
        }}
        transition={{
          duration: 8, // Smooth animation duration
          repeat: Infinity, // Infinite looping
          ease: "easeInOut", // Smooth transitions
        }}
      ></motion.div>

      {/* Bottom Left Circle */}
      <motion.div
        className="absolute bottom-0 left-0 -z-10 m-auto h-[400px] w-[400px] rounded-full bg-[#8AE0C1]/50 blur-[150px]"
        animate={{
          x: ["0%", "-50%", "0%", "50%", "0%"], // Horizontal movement: center -> left -> center -> right -> center
          y: ["0%", "30%", "0%", "-30%", "0%"], // Vertical movement: center -> down -> center -> up -> center
        }}
        transition={{
          duration: 10, // Different duration for variation
          repeat: Infinity, // Infinite looping
          ease: "easeInOut", // Smooth transitions
        }}
      ></motion.div>
    </div>
  );
};

export default FullScreenGradientAnimation;
