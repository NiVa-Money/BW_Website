import {
  dfeatures1,
  dfeatures2,
  dfeatures3,
  dfeatures4,
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Icon7,
  Icon8,
  intellirecog1,
  multiagent1,
  nocode1,
  robust1,
  scalable1,
} from "../../public/assets";
import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HistoryIcon from "@mui/icons-material/History";
import GroupIcon from "@mui/icons-material/Group";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import WorkIcon from "@mui/icons-material/Work";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import SettingsIcon from "@mui/icons-material/Settings";
import BarChartIcon from "@mui/icons-material/BarChart";
import LanguageIcon from "@mui/icons-material/Language";
// import ShareIcon from "@mui/icons-material/Share";
// import LinkIcon from "@mui/icons-material/Link";
// import SecurityIcon from "@mui/icons-material/Security";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import RecommendIcon from "@mui/icons-material/Recommend";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import RssFeedIcon from "@mui/icons-material/RssFeed";
// import GroupWorkIcon from "@mui/icons-material/GroupWork";
// import HelpCenterIcon from "@mui/icons-material/HelpCenter";

export const navLinks = [
  {
    label: "About Us",
    href: "/about",
    submenu: [
      {
        label: "Introduction",
        href: "/about/introduction",
        icon: InfoIcon,
        description: "Learn more about who we are.",
      },
      {
        label: "Our Value Proposition",
        href: "/about/value-proposition",
        icon: CheckCircleIcon,
        description: "What makes us unique.",
      },
      {
        label: "Our Story",
        href: "/about/our-story",
        icon: HistoryIcon,
        description: "Discover our journey.",
      },
      {
        label: "Partnerships & Alliances",
        href: "/about/partnerships",
        icon: GroupIcon,
        description: "Our collaborations and alliances.",
      },
      {
        label: "Media Center",
        href: "/about/media-center",
        icon: NewspaperIcon,
        description: "Stay updated with the latest news.",
      },
      // {
      //   label: "Careers",
      //   href: "/about/careers",
      //   icon: WorkIcon,
      //   description: "Join our team.",
      // },
    ],
  },
  {
    label: "Products",
    href: "/products",
    submenu: [
      {
        label: "Ready-to-Go AI workforce",
        href: "/products/ai-agents",
        icon: SmartToyIcon,
        description: "Prebuilt AI solutions.",
      },
      {
        label: "Custom AI Solutions for Enterprises",
        href: "/products/custom-ai-solutions",
        icon: SettingsIcon,
        description: "Tailored AI for enterprises.",
      },
      {
        label: "Reports & Analytics",
        href: "/products/reports-analytics",
        icon: BarChartIcon,
        description: "Actionable insights.",
      },
      {
        label: "BotWot LLM",
        href: "/products/botwot-llm",
        icon: LanguageIcon,
        description: "Advanced language model.",
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    submenu: [
      {
        label: "Online Reputation Management",
        href: "/solutions/reputation-management",
        icon: ThumbUpIcon,
        description: "Enhance your image.",
      },
      {
        label: "Recommendation Engine",
        href: "/solutions/recommendation-engine",
        icon: RecommendIcon,
        description: "Personalized suggestions.",
      },
      {
        label: "Sales & Leads",
        href: "/solutions/sales-leads",
        icon: AttachMoneyIcon,
        description: "Boost sales & engagement.",
      },
      {
        label: "Customer Support",
        href: "/solutions/customer-support",
        icon: SupportAgentIcon,
        description: "Exceptional service.",
      },
      {
        label: "Compliance Management",
        href: "/solutions/risk-management",
        icon: CheckCircleIcon,
        description: "Manage risks & compliance.",
      },
      {
        label: "Payment Recovery ",
        href: "/solutions/collections-payments",
        icon: AttachMoneyIcon,
        description: "Automate payments & collections.",
      },
      {
        label: "Loyalty & Retention",
        href: "/solutions/loyalty-retention",
        icon: ThumbUpIcon,
        description: "Build customer loyalty.",
      },
      {
        label: "HR & Employee Support ",
        href: "/solutions/hr-support",
        icon: WorkIcon,
        description: "Empower HR with AI.",
      },
      {
        label: "Workflow Optimization",
        href: "/solutions/workflow-optimization",
        icon: SettingsIcon,
        description: "Streamline processes.",
      },
      {
        label: "Productivity Automation",
        href: "/solutions/productivity-automation",
        icon: SmartToyIcon,
        description: "Automate repetitive tasks.",
      },
      {
        label: "Survey & Feedback Collection",
        href: "/solutions/survey-feedback",
        icon: LibraryBooksIcon,
        description: "AI-driven surveys.",
      },
      // {
      //   label: "Market Insights",
      //   href: "/solutions/market-insights",
      //   icon: BarChartIcon,
      //   description: "Gain market insights.",
      // },
    ],
  },
  // {
  //   label: "Pricing",
  //   href: "/pricing",
  //   description: "No Surprises—Just Value",
  // },

  // {
  //   label: "Case Studies",
  //   href: "/case-studies",
  //   description: "Case Studies",
  // },
  {
    label: "Resources",
    href: "/resources",
    submenu: [
      {
        label: "Blogs",
        href: "/resources/blogs",
        icon: RssFeedIcon,
        description: "Insights from industry leaders.",
      },
      // {
      //   label: "Community",
      //   href: "/resources/community",
      //   icon: GroupWorkIcon,
      //   description: "Join our community of innovators.",
      // },
      // {
      //   label: "Help Center & FAQs",
      //   href: "/resources/help-center",
      //   icon: HelpCenterIcon,
      //   description: "Find answers to common questions.",
      // },
    ],
  },
];

export const faqs = [
  {
    question: "How can BotWot reduce my operational costs?",
    answer:
      "BotWot automates repetitive tasks, minimizes human errors, and scales customer engagement without hiring additional staff, saving time and money.",
  },
  {
    question: "What does “multi-agent orchestration” mean for my business?",
    answer:
      "BotWot deploys multiple AI agents specialized in tasks like support, sales, and feedback collection, ensuring seamless collaboration and improved customer outcomes.",
  },
  {
    question: "Can BotWot help me boost my sales?",
    answer:
      "Absolutely! BotWot’s Adaptive Recommendation Engine analyzes user behavior in real-time to suggest personalized products, increasing upselling and cross-selling opportunities.",
  },
  {
    question: "How quickly can I start seeing results after deploying BotWot?",
    answer:
      "You can launch AI agents in minutes and start seeing efficiency gains, improved response times, and happier customers almost immediately.",
  },
  {
    question: "Is BotWot suitable for small and medium-sized businesses?",
    answer:
      "Yes, BotWot is designed to cater to SMEs by providing affordable, scalable solutions that adapt to your unique customer engagement needs.",
  },
  {
    question: "How does BotWot improve customer retention?",
    answer:
      "BotWot’s Emotional Intelligence AI detects customer emotions, enabling empathetic responses that build loyalty and long-term trust with your brand.",
  },
  {
    question: "What integrations are available with BotWot?",
    answer:
      "BotWot integrates seamlessly with CRMs (like HubSpot and Salesforce), e-commerce platforms (like Shopify), and communication tools (like WhatsApp and Slack).",
  },
  {
    question: "Does BotWot work for offline businesses transitioning online?",
    answer:
      "Yes, BotWot helps offline businesses create online touchpoints, automating customer interactions and expanding reach without a steep learning curve.",
  },
  {
    question: "How does BotWot handle sensitive customer data?",
    answer:
      "We prioritize data security with end-to-end encryption, GDPR compliance, and strict privacy controls to protect your customers' data.",
  },
  {
    question: "Can BotWot analyze my customer interactions?",
    answer:
      "Yes! Our Real-Time Sentiment Analysis provides actionable insights into customer emotions and feedback, helping you make data-driven decisions.",
  },
];

interface Job {
  title: string;
  description: string;
  category: string;
}

export const jobListings: Job[] = [
  {
    title: "Product Designer",
    description:
      "We’re looking for a mid-level product designer to join our team.",
    category: "Design",
  },
  {
    title: "Engineering Manager",
    description:
      "We’re looking for an experienced engineering manager to join our team.",
    category: "Development",
  },
  {
    title: "Customer Success Manager",
    description:
      "We’re looking for a customer success manager to join our team.",
    category: "Customer Service",
  },
  {
    title: "Account Executive",
    description: "We’re looking for an account executive to join our team.",
    category: "Operations",
  },
  {
    title: "SEO Marketing Manager",
    description:
      "We’re looking for an experienced SEO marketing manager to join our team.",
    category: "Marketing",
  },
];

export const benefits = [
  {
    icon: Icon1,
    title: "Launch in Minutes",
    description: "Deploy BotWot's pre-trained AI instantly, no coding or setup required.",
    iconAlt: "Integration icon",
  },
  {
    icon: Icon2,
    title: "Smart Conversations",
    description: "BotWot delivers human-like interactions, quickly handling tasks.",
    iconAlt: "Launch icon",
  },
  {
    icon: Icon3,
    title: "Scalable & Future-Ready",
    description: "BotWot grows with your business, adapting to new workflows.",
    iconAlt: "Personalization icon",
  },
];


export const introBenefits = [
  {
    icon: Icon8,
    title: "Startup India Program",
    description: "A government initiative supporting startups with funding and resources.",
    iconAlt: "Integration icon",
  },
  {
    icon: Icon2,
    title: "NASSCOM India",
    description: "A leading industry association driving digital transformation in India.",
    iconAlt: "Launch icon",
  },
  {
    icon: Icon3,
    title: "Empowering Businesses",
    description: "Helping businesses scale through innovative solutions and strategies.",
    iconAlt: "Personalization icon",
  },
];


export const features = [
  {
    title: "Multi-Agent Orchestrator",
    description:
      "Enable your AI workforce to work together like a well-coordinated team. BotWot’s Multi-Agent Orchestrator ensures seamless collaboration among specialized AI workforce, handling complex workflows and delivering unified, efficient outcomes across all touchpoints.",
    // bgColor: "bg-transparent",
    bgColor: "bg-[#C4CFD3]",
    imgSrc: multiagent1,
  },
  {
    title: "Intelligent Intent Recognition",
    description:
      "BotWot’s AI workforce goes beyond simple queries by deeply understanding customer intent. From straightforward requests to intricate challenges, it delivers precise, actionable responses, making every interaction intelligent and impactful.",
    bgColor: "bg-[#FBFCFE]",
    // bgColor: "bg-transparent",
    imgSrc: intellirecog1,
  },
  {
    title: "Robust Context Management",
    description:
      "With BotWot, your AI workforce remembers every interaction, enabling continuity and personalization. Whether solving issues or closing deals, it leverages context to ensure each response is relevant, meaningful, and aligned with past conversations.",
    bgColor: "bg-[#C2BFBA]",
    // bgColor: "bg-transparent",
    imgSrc: robust1,
  },
  {
    title: "No-Code Customization",
    description:
      "Shape your AI workforce to fit your business needs—no coding required. BotWot’s no-code platform lets you easily customize workflows, dialogue, and decision-making processes, empowering you to deliver tailored solutions with minimal effort.",
    bgColor: "bg-[#F2F7FD]",
    // bgColor: "bg-transparent",
    imgSrc: nocode1,
  },
  {
    title: "Scalable Architecture",
    description:
      "Scale your AI workforce effortlessly as your business grows. Whether managing millions of interactions or integrating new processes, BotWot’s robust architecture ensures your digital workforce evolves with your needs, always staying one step ahead.",
    bgColor: "bg-[#E7F1FA]",
    // bgColor: "bg-transparent",
    imgSrc: scalable1,
  },
];

export const detailedFeatures = [
  {
    icon: Icon4,
    title: "Real Time Sentiment Analysis",
    description:
      "Empower Your Workforce to Understand Customer Emotions Transform interactions with empathy-driven insights, enabling adaptive and human-like responses.",
    bgColor: "#387D8C",
    textColor: "#387D8C",
    image: dfeatures1,
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
    bgColor: "#387D8C",
    textColor: "#387D8C",
    image: dfeatures2,
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
    bgColor: "#387D8C",
    textColor: "#387D8C",
    image: dfeatures3,
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
    bgColor: "#387D8C",
    textColor: "#387D8C",
    image: dfeatures4,
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

export const testimonials = [
  {
    text: "Botwot's recommendation engine has been a game-changer for our platform. It's like having a personal beauty assistant that knows our users better than we do.",
    clientName: "Arthi Benjaram",
  },
  {
    text: "BotWot has revolutionized our customer service. It's like having a 24/7 personal trainer helping customers find the perfect products.",
    clientName: "Rishabh Agarwal, Founder FusionFit",
  },
  {
    text: "BotWot's AI capabilities have been instrumental in refining our makeup recommendations, providing a truly personalised experience for our customers.",
    clientName: "Swapnil, Founder Trabuli",
  },
];
