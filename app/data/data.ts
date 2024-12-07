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

// export const navLinks = [
//   { label: "About Us", href: "/about" },
//   { label: "Products", href: "/products" },
//   { label: "Solutions", href: "/solutions" },
//   { label: "Pricing", href: "/pricing" },
//   { label: "Resources", href: "/resources" },
//   { label: "Blog", href: "/blog" },
// ];

export const navLinks = [
  {
    label: "About Us",
    href: "/about",
    submenu: [
      { label: "Introduction", href: "/about#introduction" },
      { label: "Our Value Proposition", href: "/about#value-proposition" },
      { label: "Our Story", href: "/about#our-story" },
      { label: "Partnerships & Alliances", href: "/about#partnerships" },
      { label: "Media Center", href: "/about#media-center" },
      { label: "Careers", href: "/about#careers" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    submenu: [
      { label: "Ready-to-Go AI Agents", href: "/products#ai-agents" },
      { label: "Custom AI Solutions for Enterprises", href: "/products#custom-ai-solutions" },
      { label: "Reports & Analytics", href: "/products#reports-analytics" },
      { label: "BotWot LLM", href: "/products#botwot-llm" },
      { label: "Channels", href: "/products#channels" },
      { label: "Integrations", href: "/products#integrations" },
      { label: "Data Security & Privacy", href: "/products#data-security" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    submenu: [
      { label: "Online Reputation Management", href: "/solutions#reputation-management" },
      { label: "Recommendation Engine", href: "/solutions#recommendation-engine" },
      { label: "Sales & Lead Generation", href: "/solutions#sales-lead-generation" },
      { label: "Customer Support", href: "/solutions#customer-support" },
      { label: "Compliance & Risk Management", href: "/solutions#compliance-risk-management" },
      { label: "Collections & Payment Recovery", href: "/solutions#payment-recovery" },
      { label: "Retention & Loyalty", href: "/solutions#retention-loyalty" },
      { label: "HR & Employee Support", href: "/solutions#hr-employee-support" },
      { label: "Workflow Optimization", href: "/solutions#workflow-optimization" },
      { label: "Productivity & Task Automation", href: "/solutions#task-automation" },
      { label: "Intelligent Survey & Feedback Collection", href: "/solutions#survey-feedback" },
      { label: "Market Research & Insights", href: "/solutions#market-research" },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Resources",
    href: "/resources",
    submenu: [
      { label: "Use Cases", href: "/resources#use-cases" },
      { label: "Blogs", href: "/resources#blogs" },
      { label: "Community", href: "/resources#community" },
      { label: "Help Center & FAQs", href: "/resources#help-center" },
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
      "Effortlessly manage multiple AI agents working together to handle complex conversations. BotWot’s Multi-Agent Orchestrator ensures smooth interactions, even with varied customer needs, giving you a powerful, unified experience across all touchpoints.",
    bgColor: "bg-[#77C9F1]",
    imgSrc: PFeatures1,
  },
  {
    title: "Intelligent Intent Recognition",
    description:
      "BotWot’s AI agents understand the intent behind every customer message. From simple queries to intricate requests, our system ensures accurate responses every time, making each conversation feel more like talking to a human.",
    bgColor: "bg-[#A221AF]/65",
    imgSrc: PFeatures2,
  },
  {
    title: "Robust Context Management",
    description:
      "BotWot keeps track of every detail in an ongoing conversation, ensuring that your AI agents remember past interactions and provide personalized, contextually relevant responses that drive meaningful customer experiences.",
    bgColor: "bg-[#402282]/65",
    imgSrc: PFeatures3,
  },
  {
    title: "No-Code Customization",
    description:
      "Create and modify your AI-powered bots without any coding knowledge. BotWot's intuitive no-code platform allows you to customize workflows, responses, and logic to match your brand’s unique voice and business needs.",
    bgColor: "bg-[#2E2F5F]/65",
    imgSrc: PFeatures4,
  },
  {
    title: "Scalable Architecture",
    description:
      "As your business expands, so does BotWot. Its scalable infrastructure handles increasing volumes of interactions without a hitch, ensuring that you always have the capacity to deliver exceptional service—no matter how fast you grow.",
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
