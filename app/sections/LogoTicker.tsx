'use client';

import { Fragment } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    quantumLogo,
    acmeLogo,
    echoValleyLogo,
    pulseLogo,
    outsideLogo,
    apexLogo,
    celestialLogo,
    twiceLogo
} from "../../public/assets/index";

const logos = [
    { name: "Quantum", image: quantumLogo },
    { name: "Acme Corp", image: acmeLogo },
    { name: "Echo Valley", image: echoValleyLogo },
    { name: "Pulse", image: pulseLogo },
    { name: "Outside", image: outsideLogo },
    { name: "Apex", image: apexLogo },
    { name: "Celestial", image: celestialLogo },
    { name: "Twice", image: twiceLogo },
];

export default function LogoTicker() {
    return (
        <section className="py-24 mt-10 overflow-x-clip bg-black">
            <div className="container">
                <h3 className="text-center text-white/50 text-xl">Already chosen by these market leaders</h3>

                <div className="flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <motion.div 
                        animate={{
                            x: '-50%',
                        }}
                        transition={{
                            duration: 30,
                            ease: 'linear',
                            repeat: Infinity
                        }}
                        className="flex flex-none gap-24 pr-24"
                    >
                        {Array.from({ length: 2 }).map((_, index) => (
                            <Fragment key={index}>
                                {logos.map(logo => (
                                    <Image 
                                        src={logo.image} 
                                        alt={logo.name} 
                                        key={logo.name}
                                        width="200"
                                        height="100"
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
