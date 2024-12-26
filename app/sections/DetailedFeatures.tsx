import Image from "next/image";
import * as React from "react";
import {
  DFeatures1,
  DFeatures2,
  DFeatures3,
  DFeatures4,
  Icon4,
  Icon5,
  Icon6,
  Icon7,
} from "../../public/assets";

// Reusable Card Component
interface FeatureCardProps {
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  bgColor,
  textColor,
}) => (
  <div
    className={`flex flex-col p-4  rounded-xl shadow-lg flex-1 transition-all duration-300 ease-in-out hover:border-[${bgColor}] hover:shadow-[0px_0px_20px_0px_${bgColor}]`}
    style={{
      borderColor: bgColor,
      boxShadow: `0px 0px 10px 0px ${bgColor}`, // default shadow
    }}
  >
    <div className={`text-[${textColor}] font-semibold tracking-tight`}>
      {title}
    </div>
    <div className="mt-3.5 text-neutral-600 leading-loose">{description}</div>
  </div>
);

const DetailedFeatures: React.FC = () => {
  const features = [
    {
      icon: Icon4,
      title: "Real Time Sentiment Analysis",
      description:
        "Empower Your Workforce to Understand Customer Emotions Transform interactions with empathy-driven insights, enabling adaptive and human-like responses.",
      bgColor: "#77C9F1",
      textColor: "#77C9F1",
      image: DFeatures1,
      cards: [
        {
          title: "Customer Emotion Detection",
          description:
            "Instantly identify customer emotions—whether frustration, delight, or confusion—to personalize interactions and enhance satisfaction.",
        },
        {
          title: " Frustration-Triggered Solutions",
          description:
            "Proactively address customer frustration by detecting negative sentiment early and offering targeted solutions to turn challenges into opportunities.",
        },
        {
          title: "Empathy-Powered Engagement",
          description:
            "Equip your AI workforce to respond with care and understanding, ensuring every interaction feels human and builds trust.",
        },
      ],
    },
    {
      icon: Icon5,
      title: "Vision Intelligence",
      description:
        "Unlock the Power of Visual Inputs for Smarter Interactions Enhance customer engagement by seamlessly integrating visual data into the conversation.",
      bgColor: "#402282",
      textColor: "#402282",
      image: DFeatures2,
      cards: [
        {
          title: " Visual Product Matching",
          description:
            "Let customers upload images to receive precise product suggestions, simplifying decision-making and boosting purchase confidence.",
        },
        {
          title: "Photo-Based Issue Resolution",
          description:
            "Quickly resolve customer complaints by analyzing images of damaged products or issues, streamlining the support process.",
        },
        {
          title: "Visual How-To Guides",
          description:
            "Deliver interactive tutorials using images or videos, empowering customers to easily set up or use your products.",
        },
      ],
    },
    {
      icon: Icon6,
      title: "Adaptive AI Recommendations",
      description:
        "Tailored Experiences That Evolve with Every Interaction BotWot’s AI workforce delivers dynamic, personalized suggestions that enhance every stage of the customer journey.",
      bgColor: "#A221AF",
      textColor: "#A221AF",
      image: DFeatures3,
      cards: [
        {
          title: "Hyper-Personalized Shopping",
          description:
            "Offer product recommendations tailored in real time to the customer’s unique preferences, creating memorable shopping experiences.",
        },
        {
          title: "Behavioral-Based Discovery",
          description:
            "Adapt recommendations on the fly as user behavior evolves, making every interaction feel fresh and engaging.",
        },
        {
          title: "Evolving Intelligence",
          description:
            "With each interaction, BotWot learns and refines its suggestions, ensuring they are consistently accurate, relevant, and valuable.",
        },
      ],
    },
    {
      icon: Icon7,
      title: "Emotional Intelligence AI",
      description:
        "Deliver Empathy at Scale with Emotion-Aware AI Detect, understand, and adapt to customer emotions to foster meaningful relationships.",
      bgColor: "#2E2F5F",
      textColor: "#2E2F5F",
      image: DFeatures4,
      cards: [
        {
          title: "Emotion Recognition in Action",
          description:
            "Identify emotional cues during conversations, allowing your AI workforce to respond with genuine care and attentiveness.",
        },
        {
          title: "Empathetic Conversations That Connect",
          description:
            "Humanize customer interactions with emotional intelligence, ensuring every response reflects understanding and support.",
        },
        {
          title: "Adaptive Tone and Response",
          description:
            "Recognize shifts in customer sentiment and dynamically adjust tone and messaging to create more compassionate, satisfying experiences.",
        },
      ],
    },
  ];

  return (
    <>
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-start px-8 py-6 max-w-[860px] md:px-5 mx-auto"
        >
          {/* Section 1 & 2 - Title and Description */}
          <div className="relative flex flex-col gap-3">
            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
              <div
                className="absolute left-50 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full opacity-40 blur-[100px]"
                style={{ backgroundColor: feature.bgColor }} // Dynamically change background color based on the feature bgColor
              ></div>
            </div>

            {/* Title Section */}
            <div className="flex gap-3">
              <Image
                src={feature.icon}
                alt="Icon"
                width={40}
                height={40}
                className="object-contain"
                loading="lazy"
              />
              <div className="justify-center items-center mt-2">
                <p
                  className="text-base font-semibold tracking-tight"
                  style={{ color: feature.bgColor }}
                >
                  {feature.title}
                </p>
              </div>
            </div>

            {/* Description Section */}
            <div className="flex flex-col items-start w-full text-4xl font-semibold tracking-tighter text-black mt-4 max-md:text-xl">
              <div className="max-md:max-w-full">{feature.description}</div>
            </div>
          </div>

          {/* Section 3 - Cards and Image */}
          <div className="flex flex-col md:flex-row gap-10 justify-center mt-6">
            {/* Left Column (Cards) */}
            <div className="flex flex-col gap-4 text-base w-full transition-all duration-300 ease-in-out hover:border-[${bgColor}] hover:shadow-[0px 0px 20px 0px ${bgColor}] max-w-[342px] flex-1">
              {feature.cards.map((card, idx) => (
                <FeatureCard
                  key={idx}
                  title={card.title}
                  description={card.description}
                  bgColor={feature.bgColor}
                  textColor={feature.textColor}
                />
              ))}
            </div>

            {/* Right Column (Image) */}
            <div className="flex flex-col items-center justify-center flex-1 max-w-full">
              <Image
                src={feature.image}
                alt="Image"
                width={1000}
                height={1000}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DetailedFeatures;
