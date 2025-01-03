"use client";

import { Fragment } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  admardi,
  chatwork,
  dna,
  fusionfit,
  govt,
  prestige,
  trabuli,
  travent,
  unbeauty,
} from "../../public/assets";

const logos = [
  { name: "Unsweetend Beauty", image: unbeauty },
  { name: "Trabuli", image: trabuli },
  { name: "iPAY DNA", image: dna },
  { name: "Govt. of Haryana", image: govt },
  { name: "Prestige", image: prestige },
  { name: "Fusion Fit", image: fusionfit },
  { name: "Chat Work", image: chatwork },
  { name: "Admardi", image: admardi },
  { name: "Travent", image: travent },
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
              duration: 50,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-none gap-20 pr-24"
          >
            {Array.from({ length: 2 }).map((_, index) => (
              <Fragment key={index}>
                {logos.map((logo) => (
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    key={logo.name}
                    width="100"
                    height="50"
                  />
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
