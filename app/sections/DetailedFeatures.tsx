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
    className={`flex flex-col p-4 bg-white rounded-xl shadow-lg flex-1 transition-all duration-300 ease-in-out hover:border-[${bgColor}] hover:shadow-[0px_0px_20px_0px_${bgColor}]`}
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
        "Gain Actionable Insights into customer emotions, enabling adaptive, empathetic interactions in real time.",
      bgColor: "#77C9F1",
      textColor: "#77C9F1",
      image: DFeatures1,
      cards: [
        {
          title: "Customer Mood Detection",
          description:
            "Instantly gauge customer emotions and tailor responses that instantly connect, making your support feel human and genuine.",
        },
        {
          title: "Proactive Support Solutions",
          description:
            "Spot frustration early and deploy immediate solutions, turning potential dissatisfaction into lasting loyalty.",
        },
        {
          title: "Empathy-Driven Engagement",
          description:
            "Analyze sentiment in real time, and ensure each interaction is handled with the empathy and care your customers deserve.",
        },
      ],
    },
    {
      icon: Icon5,
      title: "Vision Analysis",
      description:
        "Leverage vision-based prompts to gain deeper understanding and make multimedia content engagement more interactive.",
      bgColor: "#402282",
      textColor: "#402282",
      image: DFeatures2,
      cards: [
        {
          title: "Product Showcase Assistance",
          description:
            "Enable customers to upload images for precise product recommendations, reducing confusion and boosting purchase confidence.",
        },
        {
          title: "Visual Issue Identification",
          description:
            "Let customers share photos of damaged goods or issues, speeding up resolution and enhancing support efficiency.",
        },
        {
          title: "Interactive Tutorials",
          description:
            "Create step-by-step guides with images or videos, helping customers easily understand product usage or setup.",
        },
      ],
    },
    {
      icon: Icon6,
      title: "Adaptive Recommendation Engine",
      description:
        "BotWot’s AI-driven recommendations adapt to user behavior , enhancing relevance across each customer journey.",
      bgColor: "#A221AF",
      textColor: "#A221AF",
      image: DFeatures3,
      cards: [
        {
          title: "Personalized Shopping Experience",
          description:
            "Tailor suggestions in real time, making each interaction feel uniquely crafted to match the customer’s needs.",
        },
        {
          title: "Dynamic Product Discovery",
          description:
            "Adapt to every user behavior and instantly refine recommendations, creating a truly dynamic, engaging experience.",
        },
        {
          title: "Always-Relevant Suggestions",
          description:
            "BotWot learns and evolves with each interaction, delivering recommendations that are more accurate, timely, and relevant.",
        },
      ],
    },
    {
      icon: Icon7,
      title: "Emotional Intelligence AI",
      description:
        "Detect and respond to customer emotions, delivering empathetic experiences that strengthen brand loyalty.",
      bgColor: "#2E2F5F",
      textColor: "#2E2F5F",
      image: DFeatures4,
      cards: [
        {
          title: "Empathy at Scale",
          description:
            "Detect emotional shifts in customer interactions and respond with the care and understanding they expect.",
        },
        {
          title: "Human-Like Conversations",
          description:
            "BotWot’s emotional intelligence ensures every customer feels heard, building stronger bonds and increasing brand loyalty.s",
        },
        {
          title: "Support with Heart",
          description:
            "BotWot recognizes frustration or delight, adjusting its tone and responses to enhance the customer journey with compassion.",
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
