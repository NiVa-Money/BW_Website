import Link from "next/link";
import Image from "next/image";
import {
  logoImage,
  // nigeria,
  // twitterx,
  // uae,
} from "../../public/assets";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const LINKS = [
  {
    title: "About Us",
    items: [
      { name: "Introduction", path: "/about/introduction" },
      { name: "Our Value Proposition", path: "/about/value-proposition" },
      { name: "Our Story", path: "/about/our-story" },
      { name: "Partnerships & Alliances", path: "/about/partnerships" },
      { name: "Media Center", path: "/about/media-center" },
      { name: "Careers", path: "/about/careers" },
    ],
  },
  {
    title: "Products",
    items: [
      { name: "AI Agents", path: "/products/ai-agents" },
      { name: "Custom AI Solutions", path: "/products/custom-ai-solutions" },
      { name: "Reports & Analytics", path: "/products/reports-analytics" },
      { name: "BotWot LLM", path: "/products/botwot-llm" },
      { name: "Channels", path: "/products/channels" },
      { name: "Integrations", path: "/products/integrations" },
      { name: "Data Security", path: "/products/data-security" },
    ],
  },
  {
    title: "Solutions",
    items: [
      {
        name: "Reputation Management",
        path: "/solutions/reputation-management",
      },
      {
        name: "Recommendation Engine",
        path: "/solutions/recommendation-engine",
      },
      { name: "Sales & Leads", path: "/solutions/sales-leads" },
      { name: "Customer Support", path: "/solutions/customer-support" },
      { name: "Risk Management", path: "/solutions/risk-management" },
      {
        name: "Collections & Payments",
        path: "/solutions/collections-payments",
      },
      { name: "Loyalty & Retention", path: "/solutions/loyalty-retention" },
      { name: "HR Support", path: "/solutions/hr-support" },
      {
        name: "Workflow Optimization",
        path: "/solutions/workflow-optimization",
      },
      { name: "Task Automation", path: "/solutions/task-automation" },
      { name: "Survey & Feedback", path: "/solutions/survey-feedback" },
      { name: "Market Insights", path: "/solutions/market-insights" },
    ],
  },
  {
    title: "Resources",
    items: [
      { name: "Use Cases", path: "/resources/use-cases" },
      { name: "Blogs", path: "/resources/blogs" },
      { name: "Community", path: "/resources/community" },
      { name: "Help Center & FAQ's", path: "/resources/help-center" },
      { name: "Privacy Policy", path: "/resources/policy" },
    ],
  },
];

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${
            border
              ? "border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]"
              : ""
          }`}
        >
          {/* Logo and Name */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <Image
              src={logoImage}
              alt="BotWot Logo"
              width={121}
              height={54}
              className="object-contain"
              priority
            />
            <span className="text-lg font-bold text-black">BotWot</span>
          </div>

          {/* Dynamic Links */}
          {LINKS.map((section, index) => (
            <div
              key={index}
              className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2"
            >
              <h3 className="text-sm font-medium">{section.title}</h3>
              <ul className="space-y-2 text-sm">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.path}
                      className="text-gray-600 transition hover:text-gray-900"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Line separator */}
        <div className="my-2 border-t w-full border-gray-400" />

        <div className="container mx-auto px-4">
          {/* Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* USA */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold flex items-center">
                <span className="mr-2">\ud83c\uddfa\ud83c\uddf8</span> Nigeria
              </h3>
              <p>Purpleant Tech Services Limited</p>
              <p>11 Commercial Ave, Yaba, Lagos 101245, Lagos, Nigeria</p>
              <p>+234 (703) 789-6529</p>
              <p className="text-blue-500">info@botwot.io</p>
            </div>

            {/* UAE */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold flex items-center">
                <span className="mr-2">\ud83c\udde6\ud83c\uddea</span> UAE
              </h3>
              <p>Purpleant Technologies FZ-LLC</p>
              <p>
                Premise no. HD07C, In5 Tech, Dubai Internet City, Dubai, UAE
              </p>
              <p>+971 501178803</p>
              <p className="text-blue-500">info@botwot.io</p>
            </div>

            {/* India */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold flex items-center">
                <span className="mr-2">\ud83c\uddee\ud83c\uddf3</span> India
              </h3>
              <p>Purpleant Technologies Pvt Ltd</p>
              <p>
                F-102, Microtek Greenberg, Sector 86, Gurugram, Haryana, India
              </p>
              <p>+91 9582474246</p>
              <p className="text-blue-500">info@botwot.io</p>
            </div>
          </div>

          {/* Social Icons and Phone Numbers */}
          <div className="flex flex-col md:flex-row justify-between items-center border-t pt-6">
            {/* Social Icons */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-600 hover:text-blue-600"
              >
                <FacebookIcon fontSize="medium" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-600 hover:text-blue-600"
              >
                <LinkedInIcon fontSize="medium" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-600 hover:text-blue-600"
              >
                <TwitterIcon fontSize="medium" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-gray-600 hover:text-blue-600"
              >
                <YouTubeIcon fontSize="medium" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-600 hover:text-blue-600"
              >
                <InstagramIcon fontSize="medium" />
              </a>
            </div>

            {/* Phone Numbers */}
            <div className="text-gray-600 text-sm text-center md:text-right">
              <p>India : +91 9582474246</p>
              <p>Nigeria : +234 (703) 789-6529</p>
              <p>UAE : +971 501178803</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between border-t pt-6">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              2024 &copy; Purpleant Technologies Private Limited, Inc. All
              Rights Reserved.
            </p>
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Your Work Email"
                className="p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-[#2E2F5F] text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
