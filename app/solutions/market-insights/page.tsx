"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { solutions } from "../../data/solution";
import HeroSection from "../../components/HeroSection";

// Dynamically import the component
const SolutionSection = dynamic(() => import("../../components/SolutionCard"));

const MarketInsightsPage: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Render nothing on the server-side
  }

  // Find the solution data by matching the href in the solutions array to the current route
  const solutionData = solutions.find((solution) => solution.href === pathname);

  if (!solutionData) {
    return (
      <div className="text-center py-10">No data found for this solution.</div>
    );
  }

  return (
    <div>
      {/* Render HeroSection once */}
      <HeroSection />

      <SolutionSection
        title={solutionData.details[0].title}
        description={solutionData.details[0].description}
        details={solutionData.details}
      />
    </div>
  );
};

export default MarketInsightsPage;
