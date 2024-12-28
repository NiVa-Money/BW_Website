import {
  startup1,
  startup2,
  startup3,
  startup4,
  startup5,
  startup6,
  startup7,
  startup8,
  meta,
  aws,
} from "../../public/assets";

interface Achievement {
  title: string;
  description: string;
  image: string;
}

interface Partnership {
  title: string;
  description: string;
  image: string;
}

export const achievements: Achievement[] = [
  {
    title: "Incubated with In5Tech in UAE",
    description:
      "BotWot is proudly incubated with In5Tech, an innovation center in Dubai Internet City, fostering growth and access to resources within the UAE's thriving tech ecosystem.",
    image: startup1,
  },
  {
    title: "Backed by Google for Startups",
    description:
      "With the support of Google for Startups, BotWot gains access to cutting-edge technologies and mentoring to accelerate growth and expand its reach.",
    image: startup2,
  },
  {
    title: "AWS Startup Program Graduate",
    description:
      "As a graduate of the AWS Startup Program, BotWot leverages Amazon Web Services’ powerful cloud infrastructure, enabling scalability and robust performance for its AI-driven platform.",
    image: startup3,
  },
  {
    title: "Razorpay Rize Program Winner",
    description:
      "BotWot has won the Razorpay Rize Program, receiving recognition for its potential to drive innovation and deliver value in the fintech and customer experience space.",
    image: startup4,
  },
  {
    title: "Incubated with NASSCOM India",
    description:
      "As part of NASSCOM’s prestigious incubation program, BotWot is accelerating its development, benefiting from India's leading technology ecosystem for startups.",
    image: startup5,
  },
  {
    title: "Part of NVIDIA Inception Program",
    description:
      "BotWot is a proud member of the NVIDIA Inception Program, tapping into AI, machine learning, and GPU technologies to enhance its AI Workforce' capabilities.",
    image: startup6,
  },
  {
    title: "Microsoft Startup Program Awardee",
    description:
      "BotWot is an awardee of the Microsoft for Startups program, gaining access to powerful tools, support, and resources that help fuel the company’s growth and innovation.",
    image: startup7,
  },
  {
    title: "Recognised with Dell for Startups",
    description:
      "Dell Technologies has recognized BotWot for its potential, offering world-class infrastructure solutions to power its AI-driven customer experience platform.",
    image: startup8,
  },
];

export const partnerships: Partnership[] = [
  {
    title: "Meta Partnership",
    description:
      "We are proud to be an official Meta Business Partner, dedicated to helping businesses succeed on the Meta platform! As a partner, we provide expert guidance and innovative strategies to enhance your presence and performance on Meta's extensive suite of tools and services. Our collaboration with Meta ensures that our clients benefit from the latest advancements in social media technology, enabling them to connect with their audiences more effectively.",
    image: meta,
  },
  {
    title: "AWS Partnership",
    description:
      "We are proud to be an official AWS Partner, utilizing advanced cloud solutions to provide innovative, scalable, and secure experiences. As an AWS Partner, we leverage cutting-edge technology to drive efficiency and foster growth for our clients. Our collaboration ensures that businesses can seamlessly integrate cloud services to enhance their operations and remain competitive in today's dynamic market.",
    image: aws,
  },
];
