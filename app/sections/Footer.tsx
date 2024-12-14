import Link from "next/link";
import Image from "next/image";
import {
  facebook,
  india,
  instagram,
  linkedin,
  logoImage,
  nigeria,
  twitterx,
  uae,
  youtube,
} from "../../public/assets";

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

const officeLocations = [
  {
    color: "bg-gray-200",
    name: "Purpleant Technologies Pvt Ltd",
    address: "F-102, Microtek Greenberg, Sector 86, Gurugram, Haryana, India",
    mapSVG: india,
  },
  {
    color: "bg-gray-200",
    name: "Purpleant Technologies FZ-LLC",
    address: "Premise no. HD07C, In5 Tech, Dubai Internet City, Dubai, UAE",
    mapSVG: uae,
  },
  {
    color: "bg-gray-200",
    name: "Purpleant Tech Services Limited",
    address: "11 Commercial Ave, Yaba, Lagos 101245, Lagos, Nigeria",
    mapSVG: nigeria,
  },
];

const socialLinks = [
  {
    name: "Facebook",
    path: "https://www.facebook.com/profile.php?id=61570255077935&sk=about_details",
    icon: facebook,
  },
  { name: "Twitter", path: "https://x.com/PurpleBot24", icon: twitterx },
  {
    name: "LinkedIn",
    path: "https://www.linkedin.com/company/botwot/",
    icon: linkedin,
  },
  {
    name: "Instagram",
    path: "https://www.instagram.com/botwot.io/",
    icon: instagram,
  },
  {
    name: "YouTube",
    path: "https://www.youtube.com/@BotWot-04",
    icon: youtube,
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
          {/* Logo and Copyright */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <Image
              src={logoImage}
              alt="BotWot Logo"
              width={121}
              height={54}
              className="object-contain"
              priority
            />
            <p className="text-sm text-gray-600">
              &copy; Purpleant Technologies Pvt Ltd. <br /> All rights reserved.
            </p>
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
        {/* Footer Bottom Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between py-4">
          {/* Office Locations */}
          <div className="flex flex-col space-y-6 sm:w-1/2">
            {officeLocations.map((location, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-lg ${location.color} text-gray-800 flex items-center space-x-4`}
              >
                <Image
                  src={location.mapSVG}
                  alt={`${location.name} map`}
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <div>
                  <h4 className="text-lg font-semibold">{location.name}</h4>
                  <p className="text-sm">{location.address}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6 sm:w-1/2 sm:justify-end mt-6 sm:mt-0">
            <p className="text-base font-medium mt-3 text-gray-800 mb-2">
              Follow Us
            </p>
            {socialLinks.map((social, idx) => (
              <Link
                key={idx}
                href={social.path}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-gray-900"
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={50}
                  height={50}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
