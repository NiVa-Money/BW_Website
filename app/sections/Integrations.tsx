import { Tag, IntegrationsColumn } from "../components/index";
import { 
    instagram,
    facebook,
    slackIcon,
    linkedin,
    shopify,
    tiktok,
    xtwitter,

} from "../../public/assets/index";

const integrations = [
    { name: "Instagram", icon: instagram, description: "Figma is a collaborative interface design tool." },
    { name: "Facebook", icon: facebook, description: "Notion is an all-in-one workspace for notes and docs." },
    { name: "Slack", icon: slackIcon, description: "Slack is a powerful team communication platform." },
    { name: "LinkedIn", icon: linkedin, description: "Relume is a no-code website builder and design system." },
    { name: "Shopify", icon: shopify, description: "Framer is a professional website prototyping tool." },
    { name: "Tiktok", icon: tiktok, description: "GitHub is the leading platform for code collaboration." },
    { name: "Twitter", icon: xtwitter, description: "GitHub is the leading platform for code collaboration." },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
    return (
        <section className="py-24 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <div>
                        <Tag>Integrations</Tag>
                        <h2 className="text-6xl font-medium mt-6">
                            Plays well with <span className="text-black">others</span>
                        </h2>
                        <p className="text-black/50 mt-4 text-lg">
                            BotWot seamlessly connects with your favorite tools, making easy to plug into any workflow and collaborate across your platforms.
                        </p>
                    </div>

                    <div>
                        <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                            <IntegrationsColumn integrations={integrations} />
                            <IntegrationsColumn 
                                integrations={integrations.slice().reverse()} 
                                className="hidden md:flex"
                                reverse
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
