

"use client";

import React from "react";
import useMouseMovement from "../hooks/useMouseMovement";

const GradientAnimation: React.FC = () => {
  const { topRightCircle, bottomLeftCircle } = useMouseMovement();

  return (
    <div className="absolute inset-0 -z-10  overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      {/* Top Right Circle */}
      <div
        className="absolute top-0 right-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#9A83DB]/40 blur-[100px]"
        style={{
          transform: `translate(${topRightCircle.x}px, ${topRightCircle.y}px)`,
        }}
      ></div>

      {/* Bottom Left Circle */}
      <div
        className="absolute bottom-[100px] left-10 -z-10 m-auto h-[300px] w-[300px] rounded-full bg-[#9A83DB]/50 blur-[100px]"
        style={{
          transform: `translate(${bottomLeftCircle.x}px, ${bottomLeftCircle.y}px)`,
        }}
      ></div>
    </div>
  );
};

export default GradientAnimation;
