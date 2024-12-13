// import Link from "next/link";
// import Image from "next/image";
// import { logoImage } from "../../public/assets";

// const LINKS = [
//   {
//     title: "About Us",
//     items: [
//       "Introduction",
//       "Our Value Proposition",
//       "Our Story",
//       "Partnerships & Alliances",
//       "Media Center",
//       "Careers",
//     ],
//   },
//   {
//     title: "Products",
//     items: [
//       "AI Agents",
//       "Custom AI Solutions",
//       "Reports & Analytics",
//       "BotWot LLM",
//       "Channels",
//       "Integrations",
//       "Data Security",
//     ],
//   },
//   {
//     title: "Solutions",
//     items: [
//       "Reputation Management",
//       "Recommendation Engine",
//       "Sales & Leads",
//       "Customer Support",
//       "Risk Management",
//       "Collections & Payments",
//       "Loyalty & Retention",
//       "HR Support",
//       "Workflow Optimization",
//       "Task Automation",
//       "Survey & Feedback",
//       "Market Insights",
//     ],
//   },
//   {
//     title: "Resources",
//     items: [
//       "Use Cases",
//       "Blogs",
//       "Community",
//       "Help Center & FAQ's",
//       "Privacy Policy",
//     ],
//   },
// ];

// const officeLocations = [
//   "New York, USA",
//   "London, UK",
//   "Sydney, Australia",
// ];

// const socialLinks = [
//   "Facebook",
//   "Twitter",
//   "LinkedIn",
//   "Instagram",
//   "YouTube",
// ];

// export default function Footer({ border = false }: { border?: boolean }) {
//   return (
//     <footer>
//       <div className="mx-auto max-w-6xl px-4 sm:px-6">
//         <div
//           className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${
//             border
//               ? "border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]"
//               : ""
//           }`}
//         >
//           {/* Logo and Copyright */}
//           <div className="space-y-2 sm:col-span-12 lg:col-span-4">
//             <Image
//               src={logoImage}
//               alt="BotWot Logo"
//               width={121}
//               height={54}
//               className="object-contain"
//               priority
//             />
//             <p className="text-sm text-gray-600">
//               &copy; Purpleant Technologies Pvt Ltd. <br /> All rights reserved.
//             </p>
//           </div>

//           {/* Dynamic Links */}
//           {LINKS.map((section, index) => (
//             <div
//               key={index}
//               className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2"
//             >
//               <h3 className="text-sm font-medium">{section.title}</h3>
//               <ul className="space-y-2 text-sm">
//                 {section.items.map((item, idx) => (
//                   <li key={idx}>
//                     <Link
//                       href="#0"
//                       className="text-gray-600 transition hover:text-gray-900"
//                     >
//                       {item}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Line separator */}
//         <div className="my-4 border-t border-gray-200" />

//         {/* Office Locations and Social Links */}
//         <div className="flex justify-between py-4">
//           {/* Office Locations */}
//           <div className="space-y-2 text-sm">
//             <h3 className="font-medium">Our Office Locations</h3>
//             <ul className="space-y-1 text-gray-600">
//               {officeLocations.map((location, idx) => (
//                 <li key={idx}>{location}</li>
//               ))}
//             </ul>
//           </div>

//           {/* Social Links */}
//           <div className="space-y-2 text-sm text-right">
//             <h3 className="font-medium">Follow Us</h3>
//             <ul className="space-y-1 text-gray-600">
//               {socialLinks.map((social, idx) => (
//                 <li key={idx}>
//                   <Link
//                     href="#0"
//                     className="transition hover:text-gray-900"
//                   >
//                     {social}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import Link from "next/link";
import Image from "next/image";
import { logoImage } from "../../public/assets";

const LINKS = [
  {
    title: "About Us",
    items: [
      "Introduction",
      "Our Value Proposition",
      "Our Story",
      "Partnerships & Alliances",
      "Media Center",
      "Careers",
    ],
  },
  {
    title: "Products",
    items: [
      "AI Agents",
      "Custom AI Solutions",
      "Reports & Analytics",
      "BotWot LLM",
      "Channels",
      "Integrations",
      "Data Security",
    ],
  },
  {
    title: "Solutions",
    items: [
      "Reputation Management",
      "Recommendation Engine",
      "Sales & Leads",
      "Customer Support",
      "Risk Management",
      "Collections & Payments",
      "Loyalty & Retention",
      "HR Support",
      "Workflow Optimization",
      "Task Automation",
      "Survey & Feedback",
      "Market Insights",
    ],
  },
  {
    title: "Resources",
    items: [
      "Use Cases",
      "Blogs",
      "Community",
      "Help Center & FAQ's",
      "Privacy Policy",
    ],
  },
];

const officeLocations = [
  {
    color: "bg-gray-300",
    name: "Purpleant Technologies Pvt Ltd",
    address: "F-102, Microtek Greenberg, Sector 86, Gurugram, Haryana, India",
    mapSVG: "/assets/map-icon-india.svg", // Replace with the actual map SVG file path
  },
  {
    color: "bg-gray-300",
    name: "Purpleant Technologies FZ-LLC",
    address: "Premise no. HD07C, In5 Tech, Dubai Internet City, Dubai, UAE",
    mapSVG: "/assets/map-icon-uae.svg", // Replace with the actual map SVG file path
  },
  {
    color: "bg-gray-300",
    name: "Purpleant Tech Services Limited",
    address: "11 Commercial Ave, Yaba, Lagos 101245, Lagos, Nigeria",
    mapSVG: "/assets/map-icon-nigeria.svg", // Replace with the actual map SVG file path
  },
];

const socialLinks = [
  "Facebook",
  "Twitter",
  "LinkedIn",
  "Instagram",
  "YouTube",
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
                      href="#0"
                      className="text-gray-600 transition hover:text-gray-900"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Line separator */}
        <div className="my-4 border-t border-gray-200" />

        {/* Office Locations and Social Links in a row */}
        <div className="flex justify-between space-x-6 py-4">
          {/* Office Locations */}
          <div className="flex space-x-6">
            {officeLocations.map((location, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-lg ${location.color} text-gray-800 w-72 flex items-center space-x-4`}
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
          <div className="space-y-2 text-sm text-right">
            <h3 className="font-medium">Follow Us</h3>
            <ul className="space-y-1 text-gray-600">
              {socialLinks.map((social, idx) => (
                <li key={idx}>
                  <Link
                    href="#0"
                    className="transition hover:text-gray-900"
                  >
                    {social}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

