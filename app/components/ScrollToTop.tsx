"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { useScrollVisibility } from "../hooks/useScrollVisibility";
import { ArrowUp } from "../../public/assets";
import Image from "next/image";

const ScrollToTop: FC = () => {
  const isVisible = useScrollVisibility(300);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="flex items-center justify-center size-10 rounded-full duration-100 delay-75"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={ArrowUp}
            alt="Scroller"
            width={121}
            height={54}
            priority
          />
        </motion.button>
      )}
    </div>
  );
};

export default ScrollToTop;
