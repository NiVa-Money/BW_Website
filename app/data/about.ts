import {
  startup1,
  // startup2,
  startup22,
  startup3,
  startup4,
  startup5,
  startup6,
  startup7,
  startup8,
  meta,
  aws,
  industrial,
  crn,
  cxo,
  digitaltech,
  express,
  indianexpress,
  indiantel,
  ndtv,
  presstrust,
  theprint,
  tribune,
  lokmat,
  ani,
  bs,
  dailyhunt,
  googlenews,
  latestly,
  punjabnews,
  kalkinews,
  punjabnewsline,
  odishapost,
  westbengal,
  theceo,
  haryanatoday,
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
    title: "Incubated with NASSCOM India",
    description:
      "As part of NASSCOM’s prestigious incubation program, BotWot is accelerating its development, benefiting from India's leading technology ecosystem for startups.",
    image: startup5,
  },
  {
    title: "Incubated with In5Tech in UAE",
    description:
      "BotWot is proudly incubated with In5Tech, an innovation center in Dubai Internet City, fostering growth and access to resources within the UAE's thriving tech ecosystem.",
    image: startup1,
  },
  {
    title: "Part of NVIDIA Inception Program",
    description:
      "BotWot is a proud member of the NVIDIA Inception Program, tapping into AI, machine learning, and GPU technologies to enhance its AI Workforce' capabilities.",
    image: startup6,
  },
  {
    title: "Razorpay Rize Program Winner",
    description:
      "BotWot has won the Razorpay Rize Program, receiving recognition for its potential to drive innovation and deliver value in the fintech and customer experience space.",
    image: startup4,
  },
  {
    title: "Backed by Google for Startups",
    description:
      "With the support of Google for Startups, BotWot gains access to cutting-edge technologies and mentoring to accelerate growth and expand its reach.",
    image: startup22,
  },
  {
    title: "AWS Startup Program Graduate",
    description:
      "As a graduate of the AWS Startup Program, BotWot leverages Amazon Web Services’ powerful cloud infrastructure, enabling scalability and robust performance for its AI-driven platform.",
    image: startup3,
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

export const mediaCenter = [
  {
    src: industrial,
    text: "Industrial Automation Magazine",
    link: "https://www.industrialautomationindia.in/newsitm/18539/Purpleant-Technologies-launches-BotWot-Revolutionary-AI-no-code-chatbot-platform/news",
  },
  {
    src: crn,
    text: "CRN news",
    link: "https://www.crn.in/news/purpleant-technologies-launches-botwot-revolutionary-ai-no-code-chatbot-platform/",
  },
  {
    src: digitaltech,
    text: "Digital Tech Circle",
    link: "https://digitaltechcircle.in/purpleant-technologies-unveils-botwot-ai-no-code-chatbot-platform/",
  },
  {
    src: express,
    text: "Express Computer",
    link: "https://x.com/ExpComputer/status/1826497856498221402",
  },
  {
    src: indianexpress,
    text: "Indian Express",
    link: "https://www.expresscomputer.in/news/purpleant-technologies-launches-botwot-revolutionary-ai-no-code-chatbot-platform/115267/",
  },
  {
    src: indiantel,
    text: "Indian Television",
    link: "https://www.indiantelevision.com/mam/digital/purpleant-technologies-launches-botwot-240822",
  },
  {
    src: ndtv,
    text: "NDTV Profit",
    link: "https://www.ndtvprofit.com/technology/purpleant-technologies-launches-ai-no-code-chatbot-platform",
  },
  {
    src: cxo,
    text: "CXO Today",
    link: "https://cxotoday.com/press-release/purpleant-technologies-launches-botwot-icx-next-gen-ai-platform-uni%ef%ac%81es-multimodal-agents-content-generation-decision-orchestration/",
  },

  {
    src: ani,
    text: "ANI",
    link: "https://www.lokmattimes.com/business/purpleant-technologies-launches-botwot-icx-next-gen-ai-platform-unifies-multimodal-agents-content-generation-decision-orchestration/",
  },

  {
    src: bs,
    text: "Business Standard",
    link: "https://www.business-standard.com/content/press-releases-ani/purpleant-technologies-launches-botwot-icx-next-gen-ai-platform-unifies-multimodal-agents-content-generation-decision-orchestration-125030100605_1.html",
  },

  {
    src: presstrust,
    text: "Press Trust of India",
    link: "https://www.ptinews.com/press-release/purpleant-technologies-launches-botwot-icx-next-gen-ai-platform-unifies-multimodal-agents-content-generation--decision-orchestration/2337957",
  },

  {
    src: theprint,
    text: "The Print",
    link: "https://theprint.in/ani-press-releases/purpleant-technologies-launches-botwot-icx-next-gen-ai-platform-unifies-multimodal-agents-content-generation-decision-orchestration/2521029/",
  },
  {
    src: tribune,
    text: "The Tribune",
    link: "https://www.tribuneindia.com/news/business/purpleant-technologies-launches-botwot-icx-next-gen-ai-platform-unifies-multimodal-agents-content-generation-decision-orchestration/",
  },
  {
    src: lokmat,
    text: "Lokmat Times",
    link: "https://www.lokmattimes.com/business/purpleant-technologies-launches-botwot-icx-next-gen-ai-platform-unifies-multimodal-agents-content-generation-decision-orchestration/",
  },
  {
    src: dailyhunt,
    text: "Dailyhunt",
    link: "https://m.dailyhunt.in/news/india/english/newsvoir-epaper-newsvoir/purpleant+technologies+launches+botwot+icx+next+gen+ai+platform+unifies+multimodal+agents+content+generation+decision+orchestration-newsid-n654139554?listname=newspaperLanding&topic=business&index=0&topicIndex=0&mode=pwa",
  },
  {
    src: googlenews,
    text: "Google News",
    link: "https://news.google.com/search?q=Purpleant%20Technologies%20Launches%20BotWot%20iCX%3A%20Next-Gen%20AI%20Platform%20Unifies%20Multimodal%20Agents%2C%20Content%20Generation%20%26%20Decision%20Orchestration&hl=en-IN&gl=IN&ceid=IN%3Aen",
  },
  {
    src: latestly,
    text: "Latestly",
    link: "https://www.latestly.com/agency-news/business-news-purpleant-technologies-launches-botwot-icx-next-gen-ai-platform-unifies-multimodal-agents-content-generation-decision-orchestration-6679103.html",
  },
  {
    src: punjabnews,
    text: "Punjab News Express",
    link: "https://www.punjabnewsexpress.com/press-releases/?c_article_id=31267&c_author_id=23924&type=crawlscriptpartner&old=old&originurl=https%3a%2f%2fwww.punjabnewsexpress.com%2fpress-releases%2f#google_vignette",
  },

  {
    src: kalkinews,
    text: "Kalkine News",
    link: "https://kalkinemedia.com/in/news/advertising-branding/purpleant-technologies-launches-botwot-icx-next-gen-ai-platform-unifies-multimodal-agents-content-generation-decision-orchestration",
  },
  {
    src: punjabnewsline,
    text: "Punjab Newsline",
    link: "https://www.punjabnewsline.com/business-news/?c_article_id=31267&c_author_id=23924&type=crawlscriptpartner&old=old&originurl=https%3a%2f%2fwww.punjabnewsline.com%2fbusiness-news%2f",
  },

  {
    src: odishapost,
    text: "Odisha Post",
    link: "https://www.odishapost.news//news/purpleant-technologies-launches-botwot-icx-next-gen-ai-platform-unifies-multimodal-agents-content-generation-decision-orchestration20250301182012/",
  },

  {
    src: westbengal,
    text: "West Bengal Samachar",
    link: "https://www.westbengalkhabar.in//news/purpleant-technologies-launches-botwot-icx-next-gen-ai-platform-unifies-multimodal-agents-content-generation-decision-orchestration20250301182012/",
  },

  {
    src: theceo,
    text: "The CEO Magazine",
    link: "https://www.theceo.in/news-that-you-can-use?c_article_id=31267&c_author_id=23924&type=old&originurl=https%3a%2f%2fwww.theceo.in%2fnews-that-you-can-use",
  },
  {
    src: haryanatoday,
    text: "Haryana Today",
    link: "https://www.haryanatoday.in//news/purpleant-technologies-launches-botwot-icx-next-gen-ai-platform-unifies-multimodal-agents-content-generation-decision-orchestration20250301182012/",
  },
];
