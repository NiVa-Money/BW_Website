import {
  Icon1,
  Icon2,
  Icon3,
  PFeatures1,
  PFeatures2,
  PFeatures3,
  PFeatures4,
  PFeatures5,
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
import ShareIcon from "@mui/icons-material/Share";
import LinkIcon from "@mui/icons-material/Link";
import SecurityIcon from "@mui/icons-material/Security";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import RecommendIcon from "@mui/icons-material/Recommend";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";

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
      {
        label: "Careers",
        href: "/about/careers",
        icon: WorkIcon,
        description: "Join our team.",
      },
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
      {
        label: "Channels",
        href: "/products/channels",
        icon: ShareIcon,
        description: "Omnichannel support.",
      },
      {
        label: "Integrations",
        href: "/products/integrations",
        icon: LinkIcon,
        description: "Seamless third-party sync.",
      },
      {
        label: "Data Security & Privacy",
        href: "/products/data-security",
        icon: SecurityIcon,
        description: "Top-tier data protection.",
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    submenu: [
      {
        label: "Reputation Management",
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
        label: "Risk Management",
        href: "/solutions/risk-management",
        icon: CheckCircleIcon,
        description: "Manage risks & compliance.",
      },
      {
        label: "Collections & Payments",
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
        label: "HR Support",
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
        label: "Task Automation",
        href: "/solutions/task-automation",
        icon: SmartToyIcon,
        description: "Automate repetitive tasks.",
      },
      {
        label: "Survey & Feedback",
        href: "/solutions/survey-feedback",
        icon: LibraryBooksIcon,
        description: "AI-driven surveys.",
      },
      {
        label: "Market Insights",
        href: "/solutions/market-insights",
        icon: BarChartIcon,
        description: "Gain market insights.",
      },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing",
    description: "No Surprises—Just Value",
  },

  {
    label: "Case Studies",
    href: "/case-studies",
    description: "Case Studies",
  },
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
      {
        label: "Community",
        href: "/resources/community",
        icon: GroupWorkIcon,
        description: "Join our community of innovators.",
      },
      {
        label: "Help Center & FAQs",
        href: "/resources/help-center",
        icon: HelpCenterIcon,
        description: "Find answers to common questions.",
      },
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
    iconAlt: "Integration icon",
  },
  {
    icon: Icon2,
    title: "Smart Conversations",
    iconAlt: "Launch icon",
  },
  {
    icon: Icon3,
    title: "Scalable & Future-Ready",
    iconAlt: "Personalization icon",
  },
];

export const features = [
  {
    title: "Multi-Agent Orchestrator",
    description:
      "Enable your AI workforce to work together like a well-coordinated team. BotWot’s Multi-Agent Orchestrator ensures seamless collaboration among specialized AI workforce, handling complex workflows and delivering unified, efficient outcomes across all touchpoints.",
    bgColor: "bg-[#77C9F1]",
    imgSrc: PFeatures1,
  },
  {
    title: "Intelligent Intent Recognition",
    description:
      "BotWot’s AI workforce goes beyond simple queries by deeply understanding customer intent. From straightforward requests to intricate challenges, it delivers precise, actionable responses, making every interaction intelligent and impactful.",
    bgColor: "bg-[#A221AF]/65",
    imgSrc: PFeatures2,
  },
  {
    title: "Robust Context Management",
    description:
      "With BotWot, your AI workforce remembers every interaction, enabling continuity and personalization. Whether solving issues or closing deals, it leverages context to ensure each response is relevant, meaningful, and aligned with past conversations.",
    bgColor: "bg-[#402282]/65",
    imgSrc: PFeatures3,
  },
  {
    title: "No-Code Customization",
    description:
      "Shape your AI workforce to fit your business needs—no coding required. BotWot’s no-code platform lets you easily customize workflows, dialogue, and decision-making processes, empowering you to deliver tailored solutions with minimal effort.",
    bgColor: "bg-[#2E2F5F]/65",
    imgSrc: PFeatures4,
  },
  {
    title: "Scalable Architecture",
    description:
      "Scale your AI workforce effortlessly as your business grows. Whether managing millions of interactions or integrating new processes, BotWot’s robust architecture ensures your digital workforce evolves with your needs, always staying one step ahead.",
    bgColor: "bg-[#A6FED6]/65",
    imgSrc: PFeatures5,
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
