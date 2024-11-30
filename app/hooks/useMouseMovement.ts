'use client';

import { useState, useEffect } from "react";

type Position = { x: number; y: number };

const useMouseMovement = (): { topRightCircle: Position; bottomLeftCircle: Position } => {
  const [topRightCircle, setTopRightCircle] = useState<Position>({ x: 0, y: 0 });
  const [bottomLeftCircle, setBottomLeftCircle] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // Randomly vary the positions for more dynamic animation
      const randomFactorX = Math.random() * 10; // Random factor for X axis
      const randomFactorY = Math.random() * 10; // Random factor for Y axis

      // Calculate random positions for the circles based on mouse coordinates
      setTopRightCircle({
        x: (clientX / 30) + randomFactorX, // Apply random offset for variation
        y: (clientY / 30) + randomFactorY,  // Apply random offset for variation
      });

      setBottomLeftCircle({
        x: (-clientX / 40) + randomFactorX, // Apply random offset for variation
        y: (-clientY / 40) + randomFactorY, // Apply random offset for variation
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return { topRightCircle, bottomLeftCircle };
};

export default useMouseMovement;
