"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: StaticImageData | string;
  title: string;
  description : string;
  iconAlt?: string;
}

const BenefitCard: React.FC<FeatureCardProps> = ({ icon, title, iconAlt, description }) => {
  return (
    <div className="flex overflow-hidden flex-col flex-1 shrink justify-center self-stretch p-px my-auto rounded-xl shadow-lg basis-0 min-w-[300px] h-[200px]">
      <motion.div
        className="relative w-full h-full"
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.6 }}
        style={{
          transformStyle: "preserve-3d",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Slight shadow for depth
        }}
      >
        {/* Front of the card */}
        <motion.div
          className="absolute w-full h-full flex justify-center items-center bg-white p-6 hover:border-2 hover:border-[#387D8C]/65 rounded-lg"
          style={{
            backfaceVisibility: "hidden",
            display: "flex", // Center the content inside the card
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            loading="lazy"
            src={icon}
            alt={iconAlt || "Icon"}
            width={24} // Match original image size
            height={24}
            className="object-contain"
          />
          <div className="text-center font-semibold text-xl">{title}</div>
        </motion.div>

        {/* Back of the card */}
        <motion.div
          className="absolute w-full h-full flex justify-center items-center bg-gray-300 p-6 border-4 border-[#387D8C]/65 rounded-lg"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="text-center font-semibold text-xl text-gray-700">
             {description}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BenefitCard;
