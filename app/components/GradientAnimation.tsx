"use client";

import React from "react";
import { motion } from "framer-motion";

const GradientAnimation: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      {/* Top Right Circle */}
      <motion.div
        className="absolute top-0 right-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#387D8C]/40 blur-[100px]"
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
        className="absolute bottom-[100px] left-10 -z-10 m-auto h-[300px] w-[300px] rounded-full bg-[#8AE0C1]/50 blur-[100px]"
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

export default GradientAnimation;
