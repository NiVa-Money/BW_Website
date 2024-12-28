import React from "react";
import Link from "next/link";
import { Tag } from "../components";

const caseStudies = [
  {
    id: 1,
    title: "Case Study 1",
    description: "Description of the first case study...",
    link: "#",
  },
  {
    id: 2,
    title: "Case Study 2",
    description: "Description of the second case study...",
    link: "#",
  },
  // Add more case studies as needed
];

const CaseStudiesPage: React.FC = () => {
  return (
    <section className="relative py-18 px-6 lg:px-8 overflow-hidden w-full mb-0">
      <div className="flex justify-center items-center mt-12">
        <Tag className="text-center">Case Studies</Tag>
      </div>
      <main className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <h2 className="text-2xl font-semibold mb-4">{caseStudy.title}</h2>
              <p className="text-gray-700 mb-4">{caseStudy.description}</p>
              <Link
                href={caseStudy.link}
                className="text-green-600 hover:text-green-800 font-semibold"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default CaseStudiesPage;
