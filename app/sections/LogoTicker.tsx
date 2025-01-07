"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  admardi,
  admobs,
  anq,
  dna,
  drrevive,
  fusionfit,
  govt,
  govtorrisa,
  govttelangana,
  mira,
  niyo,
  trabuli,
  travent,
  uaelogo,
  unbeauty,
} from "../../public/assets";

const logos = [
  { name: "Unsweetend Beauty", image: unbeauty },
  { name: "Trabuli", image: trabuli },
  { name: "Admobs", image: admobs },
  { name: "ANQ", image: anq },
  { name: "Dr.Revive", image: drrevive },
  { name: "mira", image: mira },
  { name: "niyo", image: niyo },
  { name: "Govt. of Telangana", image: govttelangana },
  { name: "Govt. of Orrisa", image: govtorrisa },
  { name: "iPAY DNA", image: dna },
  { name: "Govt. of Haryana", image: govt },
  { name: "Fusion Fit", image: fusionfit },
  { name: "Admardi", image: admardi },
  { name: "Travent", image: travent },
  { name: "uaelogo", image: uaelogo },
];

export default function LogoTicker() {
  return (
    <section className="py-20 mt-10 overflow-x-clip bg-black">
      <div className="container">
        <h3 className="text-center text-white/50 text-xl">
          Already chosen by these market leaders
        </h3>

        <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{
              x: "-50%",
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-none gap-20 pr-24"
          >
            {logos.map((logo) => (
              <Image
                src={logo.image}
                alt={logo.name}
                key={logo.name}
                width="100"
                height="50"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
