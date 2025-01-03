import React from "react";

const ProductCard = ({
  useCases,
}: {
  useCases: { title: string; description: string; example?: string }[];
}) => (
  <div className="rounded-lg flex flex-col max-w-full gap-4">
    <div className="grid grid-cols-2 gap-6 ">
      {useCases.map((useCase, index) => (
        <div
          key={index}
          className="p-4 bg-gray-50 hover:shadow-xl hover:border-4 hover:border-black/50 rounded-lg"
        >
          <h1 className=" text-2xl font-semibold text-[#2E2F5F]">
            {useCase.title}
          </h1>
          <p className="text-lg text-black">{useCase.description}</p>
          {useCase.example && (
            <p className="text-base text-[#49454F] italic mt-1">
              <b>Example:</b> {useCase.example}
            </p>
          )}
        </div>
      ))}
    </div>
  </div>
);

const ProductSection = ({
  data,
}: {
  data: {
    name: string;
    useCases: { title: string; description: string; example?: string }[];
  }[];
}) => {
  return (
    <div className="max-w-7xl mt-20 mx-auto px-8 py-10">
      {data.map((item, index) => (
        <div key={index} className="mb-5">
          <ProductCard useCases={item.useCases} />
        </div>
      ))}
    </div>
  );
};

export default ProductSection;
