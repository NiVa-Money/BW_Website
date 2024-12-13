import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import { Tag } from "@mui/icons-material";

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
    className={`flex flex-col p-8 w-64 rounded-2xl ${
      isPopular ? "bg-white text-zinc-900" : "bg-slate-950 text-white"
    } border ${
      isPopular ? "border-transparent" : "border-white border-opacity-20"
    } min-w-[240px] max-md:px-5`}
  >
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">{title}</h3>
        {isPopular && (
          <span className="px-2 py-0.5 text-sm font-medium rounded-lg bg-amber-400 bg-opacity-50">
            Popular
          </span>
        )}
      </div>
      <p className="mt-3 text-sm leading-5 text-gray-400">{description}</p>
    </div>
    <div className="flex items-end gap-2 mt-8 w-full">
      <div className="flex flex-col">
        <span className="text-4xl font-bold leading-snug">{price}</span>
        <span className="text-sm text-gray-400">{priceType}</span>
      </div>
    </div>
    <button
      className={`mt-8 w-full px-5 py-2 text-base font-medium rounded-lg min-h-[40px] ${
        isPopular
          ? "text-white bg-gradient-to-b from-blue-500 to-blue-700"
          : "text-zinc-900 bg-gradient-to-b from-white to-gray-200"
      }`}
    >
      {buttonText}
    </button>
    <div className="flex flex-col mt-8 gap-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-4">
          <CheckIcon className="text-green-500" />
          <span className="text-sm">{feature}</span>
        </div>
      ))}
    </div>
  </div>
);

const PricingSection: React.FC = () => {
  const plans = [
    {
      title: "Starter",
      description: "You’re just starting out on your comms journey.",
      price: "$4.99",
      priceType: "One-time payment",
      features: ["1 site only", "Up to 2,000 contacts", "Unlimited stories"],
      buttonText: "Try Now",
    },
    {
      title: "Core",
      description: "This isn’t your first rodeo; you know what you’re doing.",
      price: "$49.99",
      priceType: "/month",
      features: [
        "Everything in Starter plan, plus",
        "7-days story version history",
        "Up to 10,000 contacts",
        "Custom sender addresses",
      ],
      buttonText: "Get Started",
      isPopular: true,
    },
    {
      title: "Enterprise",
      description:
        "All the core features + 5 white label sites, and user permissions.",
      price: "Custom",
      priceType: "Contact us",
      features: ["White label sites", "Advanced user permissions"],
      buttonText: "Contact Sales",
    },
  ];

  return (
    <div className="flex flex-col items-center p-24 max-md:px-5">
      <div className="max-w-[1008px] w-full text-center">
        <div className="flex justify-center">
          <Tag>Pricing Plans</Tag>
        </div>
        <h2 className="mt-5 text-6xl font-bold leading-none max-md:text-4xl">
          Choose Your Plan
        </h2>
        <p className="mt-4 text-base leading-7">
          Our pricing is transparent, straight-forward and grows with your
          company, while making it easy to get started with BotWot ICX.
        </p>
      </div>
      <div className="flex flex-wrap gap-6 justify-center items-start mt-14">
        {plans.map((plan, index) => (
          <PlanCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
