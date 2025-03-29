import Link from "next/link";
import Image from "next/image";
import { logoImage } from "../../public/assets";
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
      // { name: "Careers", path: "/about/careers" },
    ],
  },
  {
    title: "Products",
    items: [
      { name: "AI Agents", path: "/products/ai-agents" },
      { name: "Custom AI Solutions", path: "/products/custom-ai-solutions" },
      { name: "Reports & Analytics", path: "/products/reports-analytics" },
      { name: "BotWot LLM", path: "/products/botwot-llm" },
    ],
  },
  {
    title: "Solutions",
    items: [
      {
        name: "Online Reputation Management",
        path: "/solutions/reputation-management",
      },
      {
        name: "Recommendation Engine",
        path: "/solutions/recommendation-engine",
      },
      { name: "Sales & Leads", path: "/solutions/sales-leads" },
      { name: "Customer Support", path: "/solutions/customer-support" },
      { name: "Compliance Management", path: "/solutions/risk-management" },
      { name: "Payment Recovery", path: "/solutions/collections-payments" },
      { name: "Loyalty & Retention", path: "/solutions/loyalty-retention" },
      { name: "HR & Employee Support", path: "/solutions/hr-support" },
      {
        name: "Workflow Optimization",
        path: "/solutions/workflow-optimization",
      },
      {
        name: "Productivity Automation",
        path: "/solutions/productivity-automation",
      },
      {
        name: "Survey & Feedback Collection",
        path: "/solutions/survey-feedback",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      // { name: "Case Studies", path: "/resources/use-cases" },
      // { name: "Channels", path: "/resources/channels" },
      // { name: "Integrations", path: "/resources/integrations" },
      // { name: "Data Security", path: "/resources/data-security" },
      { name: "Blogs", path: "/resources/blogs" },
      // { name: "Community", path: "/resources/community" },
      // { name: "Help Center & FAQ's", path: "/resources/help-center" },
      { name: "Privacy Policy", path: "/resources/policy" },
    ],
  },
];

export default function Footer({ border = false }) {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`grid grid-cols-1 md:grid-cols-5 gap-14 py-8 md:py-12 ${
            border ? "border-t border-slate-200" : ""
          }`}
        >
          {/* Logo and Name */}
          <div className="col-span-1">
            <div className="flex flex-col items-start space-y-2">
              <Image
                src={logoImage}
                alt="BotWot Logo"
                width={250}
                height={54}
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Dynamic Links */}
          {LINKS.map((section, index) => (
            <div key={index} className="col-span-1">
              <h3 className="text-sm font-medium mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.path}
                      className="text-sm text-gray-600 whitespace-nowrap hover:text-gray-900 block"
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
        <div className="border-t border-gray-200 my-8" />

        {/* Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          {/* India */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold flex items-center">
              <span className="mr-2" role="img" aria-label="India Flag">
                🇮🇳
              </span>{" "}
              India
            </h3>
            <p>Purpleant Technologies Pvt Ltd</p>
            <p>
              F-102, Microtek Greenberg, Sector 86, Gurugram, Haryana, India
            </p>
            <p>+91 9582474246</p>
            <p className="text-blue-500">info@botwot.io</p>
          </div>

          {/* UAE */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold flex items-center">
              <span className="mr-2" role="img" aria-label="UAE Flag">
                🇦🇪
              </span>{" "}
              UAE
            </h3>
            <p>Purpleant Technologies FZ-LLC</p>
            <p>Premise no. HD07C, In5 Tech, Dubai Internet City, Dubai, UAE</p>
            <p>+971 501178803</p>
            <p className="text-blue-500">info@botwot.io</p>
          </div>

          {/* Nigeria */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold flex items-center">
              <span className="mr-2" role="img" aria-label="Nigeria Flag">
                🇳🇬
              </span>{" "}
              Nigeria
            </h3>
            <p>Purpleant Tech Services Limited</p>
            <p>Commercial Ave, Yaba, Lagos 101245, Lagos, Nigeria</p>
            <p>+234 (808) 476-0583</p>
            <p className="text-blue-500">info@botwot.io</p>
          </div>
        </div>

        {/* Social Icons and Contact */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-6">
          <div className="flex space-x-4 mb-4 md:mb-0">
            {[
              {
                Icon: FacebookIcon,
                label: "Facebook",
                url: "https://www.facebook.com/profile.php?id=61570255077935",
              },
              {
                Icon: LinkedInIcon,
                label: "LinkedIn",
                url: "https://www.linkedin.com/company/botwot/posts/?feedView=all",
              },
              {
                Icon: TwitterIcon,
                label: "Twitter",
                url: "https://x.com/PurpleBot24",
              },
              {
                Icon: YouTubeIcon,
                label: "YouTube",
                url: "https://www.youtube.com/@BotWot-04",
              },
              {
                Icon: InstagramIcon,
                label: "Instagram",
                url: "https://www.instagram.com/botwot.io/",
              },
            ].map(({ Icon, label, url }) => (
              <Link
                key={label}
                href={url}
                aria-label={label}
                className="text-gray-600 hover:text-[#387D8C]"
              >
                <Icon fontSize="medium" />
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 py-6 mt-6">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            2025 &copy; Purpleant Technologies Private Limited, Inc. All Rights
            Reserved.
          </p>

          {/* <div className="flex flex-col items-end">
            <p className="text-gray-500 text-sm mb-2">
              Subscribe to our newsletter
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 rounded-md border border-gray-300 focus:ring-2 focus:[#387D8C]"
              />
              <button className="bg-[#387D8C] text-white px-4 py-2 rounded-md hover:bg-black">
                Sign Up
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
