"use client";
import React, { useState, useRef, useEffect } from "react";
import { jobListings } from "../../data/data";
import { Tag } from "../../components";
import ApplicationForm from "../../components/ApplicationForm";

const categories = [
  "View all",
  "Development",
  "Design",
  "Marketing",
  "Customer Service",
  "Operations",
  "Finance",
  "Management",
];

const Careers: React.FC = () => {
  const [filteredCategory, setFilteredCategory] = useState<string>("View all");
  const [showForm, setShowForm] = useState<boolean>(false); // State for toggling the form visibility
  const formRef = useRef<HTMLDivElement | null>(null); // Reference to the form container

  const filteredJobs =
    filteredCategory === "View all"
      ? jobListings
      : jobListings.filter((job) => job.category === filteredCategory);

  const handleApplyClick = () => {
    setShowForm(true); // Show the form when "Apply →" is clicked
  };

  // Scroll to the form after it's rendered
  useEffect(() => {
    if (showForm && formRef.current) {
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100); // Adding a small delay
    }
  }, [showForm]); // This will trigger whenever `showForm` is true

  return (
    <div className="bg-neutral-50">
      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <Tag>We’re hiring!</Tag>
          <h1 className="text-4xl sm:text-5xl mt-4 font-bold text-gray-900">
            Be part of our mission
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We’re looking for passionate people to join us on our mission. We
            value flat hierarchies, clear communication, and full ownership and
            responsibility.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilteredCategory(category)}
              className={`text-sm font-medium px-4 py-2 rounded-full focus:outline-none focus:ring-2 ${
                filteredCategory === category
                  ? "bg-[#387D8C] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Job Listings */}
        {filteredJobs.length > 0 ? (
          <div className="space-y-8">
            {filteredJobs.map((job) => (
              <div
                key={job.title}
                className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-6 md:px-8 space-y-6 sm:space-y-0"
              >
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                    {job.title}
                  </h2>
                  <p className="mt-2 text-gray-600">{job.description}</p>
                  <div className="mt-4 flex items-center gap-3 text-sm font-medium text-gray-700">
                    <span className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 9.75h7.5m-7.5 4.5h7.5M8.625 3.75A2.625 2.625 0 006 6.375v11.25a2.625 2.625 0 002.625 2.625h6.75A2.625 2.625 0 0018 17.625V6.375a2.625 2.625 0 00-2.625-2.625h-6.75z"
                        />
                      </svg>
                      100% remote
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.25a2.25 2.25 0 00-2.25-2.25h-3a2.25 2.25 0 00-2.25 2.25V9m9 0v10.5a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25V9m9 0H8.25"
                        />
                      </svg>
                      Full-time
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleApplyClick}
                  className="text-[#387D8C] hover:text-black font-medium mt-4 sm:mt-0"
                >
                  Apply →
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No jobs available in this category.
          </p>
        )}

        {/* Conditionally render the form and attach ref to it */}
        {showForm && (
          <div ref={formRef}>
            <ApplicationForm />
          </div>
        )}
      </section>
    </div>
  );
};

export default Careers;
