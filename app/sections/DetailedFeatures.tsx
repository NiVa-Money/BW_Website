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
          title: "Playlists & Reels",
          description:
            "All meetings belong to your team Library, but playlists and reels make it easy to curate, create, and share team training content.",
        },
        {
          title: "Time-stamped Comments",
          description:
            "No more game of telephone, select any transcript text to leave a comment for your reps at the exact relevant moment.",
        },
        {
          title: "Timeline & Coaching Stats",
          description:
            "Everyone knows when their reps talk too much, but with coaching stats, you finally have the data too.",
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
          title: "AI Notes & Templates",
          description:
            "BotWot will join your calendar meetings to generate a recording, transcript, and AI-powered notes with the content you want, in the format you want.",
        },
        {
          title: "Custom AI Note Prompts",
          description:
            "Never settle for generic AI outputs. Ask questions of the transcript until satisfied with the response, then add it to your notes.",
        },
        {
          title: "Video Highlights & Sharing",
          description:
            "Click any AI note or select text in the transcript to create a video highlight you can share anywhere you can paste a link.",
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
          title: "Sync AI Notes w/ CRMs",
          description:
            "BotWot matches meeting participants with CRM records to automatically sync the AI notes as an activity on the Contact or Deal record.",
        },
        {
          title: "CRM Field Enrichment",
          description:
            "Automatically enrich your CRM fields whenever BotWot detects a match with data contained within your meeting transcripts.",
        },
        {
          title: "AI-powered Followup Emails",
          description:
            "Save hours per week prepping meeting follow-ups by having BotWot write them for you using the transcript content. ",
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
          title: "Topic Trackers",
          description:
            "Ever wished to see all topically-related moments mentioned across your team's calls? Topic trackers give you x-ray vision.",
        },
        {
          title: "Keyword Alerts",
          description:
            "Simply set keyword dictionary and enable notifications to be alerted whenever BotWot detects an exact match.",
        },
        {
          title: "Deal Insights",
          description:
            "What gets measured gets managed, and BotWot's deal insights make it easier than ever to track the activity and status of any deal.",
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
