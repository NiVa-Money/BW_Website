// import React from "react";
// import CheckIcon from "@mui/icons-material/Check";
// import { Tag } from "../../components";
// // import Faqs from "../Faqs";

// interface PlanProps {
//   title: string;
//   description: string;
//   price: string;
//   priceType: string;
//   features: string[];
//   buttonText: string;
//   isPopular?: boolean;
// }

// const PlanCard: React.FC<PlanProps> = ({
//   title,
//   description,
//   price,
//   priceType,
//   features,
//   buttonText,
//   isPopular,
// }) => (
//   <div
//     className={`flex flex-col p-8 w-80 h-full rounded-2xl justify-between ${
//       isPopular ? "bg-[#9A83DB] text-black" : "bg-black text-white"
//     } border ${
//       isPopular ? "border-transparent" : "border-black border-opacity-20"
//     } min-w-[240px] max-md:px-5`}
//   >
//     <div className="flex flex-col w-full">
//       <div className="flex items-center justify-between">
//         <h3 className="text-2xl font-bold">{title}</h3>
//         {isPopular && (
//           <span className="px-2 py-0.5 text-sm font-medium rounded-lg bg-amber-400 bg-opacity-50">
//             Popular
//           </span>
//         )}
//       </div>
//       <p
//         className={`mt-3 text-sm leading-5 ${
//           isPopular ? "text-white" : "text-gray-400"
//         }`}
//       >
//         {description}
//       </p>
//     </div>
//     <div className="flex items-end gap-2 mt-8 w-full">
//       <div className="flex flex-col">
//         <span className="text-4xl font-bold leading-snug">{price}</span>
//         <span
//           className={`text-sm ${isPopular ? "text-white" : "text-gray-400"}`}
//         >
//           {priceType}
//         </span>
//       </div>
//     </div>
//     <button
//       className={`mt-8 w-full px-5 py-2 text-base font-medium rounded-lg min-h-[40px] ${
//         isPopular
//           ? "text-white bg-gradient-to-b from-blue-500 to-blue-700"
//           : "text-zinc-900 bg-gradient-to-b from-white to-gray-200"
//       }`}
//     >
//       {buttonText}
//     </button>
//     <div className="flex flex-col mt-8 gap-4">
//       {features.map((feature, index) => (
//         <div key={index} className="flex items-center gap-4">
//           <CheckIcon className="text-green-500" />
//           <span className="text-sm">{feature}</span>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// const PricingSection: React.FC = () => {
//   const plans = [
//     {
//       title: "Base Plan",
//       description: "Perfect for small teams starting out with AI capabilities.",
//       price: "$99",
//       priceType: "/month",
//       features: [
//         "10,000 AI credits/month",
//         "3 users included",
//         "$99 setup fee (one-time)",
//         "$49.99 per 10,000 additional credits",
//         "$24.99/user + 2,500 AI credits/user",
//         "External charges billed as actuals",
//       ],
//       buttonText: "Get Started",
//     },
//     {
//       title: "Pro Plan",
//       description: "For growing teams with larger AI and user needs.",
//       price: "$299",
//       priceType: "/month",
//       features: [
//         "40,000 AI credits/month",
//         "10 users included",
//         "$99 setup fee (one-time)",
//         "$49.99 per 10,000 additional credits",
//         "$24.99/user + 2,500 AI credits/user",
//         "External charges billed as actuals",
//       ],
//       buttonText: "Get Pro",
//       isPopular: true,
//     },
//     {
//       title: "Enterprise",
//       description: "Custom plans with higher limits, support, and flexibility.",
//       price: "Custom",
//       priceType: "Contact us",
//       features: [
//         "Everything in Pro Plan",
//         "Custom AI credit packages",
//         "Dedicated support",
//       ],
//       buttonText: "Contact Sales",
//     },
//   ];

//   return (
//     <div className="flex flex-col items-center p-24 max-md:px-5">
//       <div className="max-w-[1008px] w-full text-center">
//         <Tag>Pricing Plans</Tag>
//         <h2 className="mt-5 text-6xl font-bold leading-none max-md:text-4xl">
//           Choose Your Plan
//         </h2>
//         <p className="mt-4 text-base leading-7">
//           Our pricing is transparent, straight-forward and grows with your
//           company, while making it easy to get started with BotWot ICX.
//         </p>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 mt-14 w-full max-w-7xl">
//         {plans.map((plan, index) => (
//           <PlanCard key={index} {...plan} />
//         ))}
//       </div>
//       {/* <Faqs/> */}
//     </div>
//   );
// };

// export default PricingSection;


import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import { Tag } from "../../components";

interface PlanProps {
  title: string;
  description: string;
  price: string;
  priceType: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
}

const PlanCard: React.FC<PlanProps> = ({
  title,
  description,
  price,
  priceType,
  features,
  buttonText,
  isPopular,
}) => (
  <div
    className={`flex flex-col p-8 w-full h-full rounded-2xl justify-between 
      transition-all duration-200 hover:scale-[1.02] hover:shadow-xl
      ${
        isPopular
          ? "bg-[#65558F]/80 text-black shadow-lg shadow-purple-500/30"
          : "bg-black text-white shadow-sm shadow-gray-500/10"
      }
      border ${
        isPopular ? "border-transparent" : "border-black border-opacity-20"
      }`}
  >
    <div className="flex flex-col flex-grow">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">{title}</h3>
        {isPopular && (
          <span className="px-2 py-0.5 text-sm font-medium rounded-lg bg-amber-400 bg-opacity-50">
            Popular
          </span>
        )}
      </div>
      
      <p
        className={`mt-3 text-sm leading-5 ${
          isPopular ? "text-white" : "text-gray-400"
        }`}
      >
        {description}
      </p>

      <div className="flex items-end gap-2 mt-8 min-h-[80px]">
        <div className="flex flex-col">
          <span className="text-4xl font-bold leading-snug">{price}</span>
          <span
            className={`text-sm ${isPopular ? "text-white" : "text-gray-400"}`}
          >
            {priceType}
          </span>
        </div>
      </div>

      <div className="flex flex-col mt-8 gap-4 flex-grow min-h-[240px]">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-4">
            <CheckIcon className="text-green-500" />
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>

      <button
        className={`mt-8 w-full px-5 py-2 text-base font-medium rounded-lg min-h-[40px] 
          ${
            isPopular
              ? "text-white bg-black"
              : "text-zinc-900 bg-gradient-to-b from-white to-gray-200"
          } mt-auto`}
      >
        {buttonText}
      </button>
    </div>
  </div>
);

const PricingSection: React.FC = () => {
  const plans = [
    {
      title: "Base Plan",
      description: "Perfect for small teams starting out with AI capabilities.",
      price: "$99",
      priceType: "/month",
      features: [
        "10,000 AI credits/month",
        "3 users included",
        "$99 setup fee (one-time)",
        "$49.99 per 10,000 additional credits",
        "$24.99/user + 2,500 AI credits/user",
        "External charges billed as actuals",
      ],
      buttonText: "Get Started",
    },
    {
      title: "Pro Plan",
      description: "For growing teams with larger AI and user needs.",
      price: "$299",
      priceType: "/month",
      features: [
        "40,000 AI credits/month",
        "10 users included",
        "$99 setup fee (one-time)",
        "$49.99 per 10,000 additional credits",
        "$24.99/user + 2,500 AI credits/user",
        "External charges billed as actuals",
      ],
      buttonText: "Get Pro",
      isPopular: true,
    },
    {
      title: "Enterprise",
      description: "Custom plans with higher limits, support, and flexibility.",
      price: "Custom",
      priceType: "Contact us",
      features: [
        "Everything in Pro Plan",
        "Custom AI credit packages",
        "Dedicated support",
      ],
      buttonText: "Contact Sales",
    },
  ];

  return (
    <div className="flex flex-col items-center p-8 lg:p-24 max-md:px-5">
      <div className="max-w-[1008px] w-full text-center">
        <Tag>Pricing Plans</Tag>
        <h2 className="mt-5 text-6xl font-bold leading-none max-md:text-4xl">
          Choose Your Plan
        </h2>
        <p className="mt-4 text-base leading-7 text-gray-400">
          Our pricing is transparent, straight-forward and grows with your
          company, while making it easy to get started with BotWot ICX.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 mt-14 w-full max-w-7xl gap-8">
        {plans.map((plan, index) => (
          <PlanCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;