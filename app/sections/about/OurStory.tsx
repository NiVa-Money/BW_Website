import Image from "next/image";
import { type FC } from "react";
import { CEO, COO, CTO } from "../../../public/assets";
import AboutUsSection from "../../components/AboutUs";


const StoryPage: FC = () => {
  return (
    <div className="w-full">
      <AboutUsSection/>
     
      {/* Story Section */}
      <div id="our-story" className="container mx-auto px-4 py-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Our Story
        </h2>

        <div className="space-y-6 max-w-4xl mx-auto text-lg">
          <p>
            BotWot was born out of a deep understanding of the challenges
            businesses face in delivering seamless, empathetic, and scalable
            customer experiences in today&apos;s fast-paced, digital world.
          </p>

          <p>
            Our founder, Nitya Prakhar, with years of experience in customer
            retention at American Express, witnessed firsthand the struggles
            businesses faced when trying to provide effective support that was
            both efficient and human-like. Nitya recognized that the future of
            customer experience wasn&apos;t just about answering queries; it was
            about building intelligent, autonomous systems that could adapt to
            every customer interaction.
          </p>

          <p>
            This realization sparked the creation of BotWot—an AI Workforce
            platform designed to streamline complex customer journeys with
            multi-agent orchestration, ensuring businesses could scale
            effectively without compromising on quality or service.
          </p>

          <p>
            In September 2024, BotWot was launched with a clear mission: to
            simplify AI for businesses, helping them automate tasks, scale
            operations, and deliver faster, more intelligent customer
            experiences—all without increasing manpower costs. Today, BotWot is
            transforming the way businesses engage with their customers, turning
            AI complexity into productivity, and revolutionizing customer
            experience one interaction at a time.
          </p>
        </div>

        {/* Team Section */}
        <div className="mt-16 space-y-12">
          {/* Founder 1 */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-64 h-64 relative overflow-hidden flex-shrink-0">
              <Image
                src={CEO}
                alt="Nitya Prakhar"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-xl text-gray-500 mb-2">01</div>
              <p className="text-lg">
                <b>Nitya Prakhar</b> is an experienced leader with a deep
                passion for transforming customer experiences through
                technology. With over a decade of expertise in customer-centric
                roles, Nitya brings a strong understanding of user needs and the
                importance of creating seamless, efficient interactions. His
                focus on innovation and driving long-term customer satisfaction
                has led him to pioneer AI-powered solutions designed to optimize
                workforce operations. Nitya believes that AI, when used
                effectively, can empower businesses to scale while enhancing the
                customer journey. His vision for BotWot is to create an AI
                workforce platform that combines cutting-edge technology with
                practical solutions, helping businesses automate tasks, improve
                customer engagement, and achieve operational excellence.
              </p>
            </div>
          </div>

          {/* Founder 2 */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="w-64 h-64 relative overflow-hidden flex-shrink-0">
              <Image
                src={CTO}
                alt="Mohanraj Tamilrasu"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-xl text-gray-500 mb-2">02</div>

              <p className="text-lg">
                <b>Mohanraj Tamilrasu</b> is a visionary technology leader with
                over two decades of experience in the FinTech and AI sectors.
                His expertise lies in designing and implementing advanced AI
                systems that drive business transformation. Mohan is passionate
                about leveraging AI to simplify complex processes and enhance
                operational efficiency. His philosophy centers around using
                technology to empower businesses, allowing them to do more with
                less. Mohan’s technical depth and strategic thinking are
                instrumental in shaping BotWot’s AI workforce platform, with a
                focus on automating routine tasks and improving customer
                interactions through seamless, scalable solutions.
              </p>
            </div>
          </div>

          {/* Founder 3 */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-64 h-64 relative overflow-hidden flex-shrink-0">
              <Image
                src={COO}
                alt="Namita Sharma"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-xl text-gray-500 mb-2">03</div>
              <p className="text-lg">
                <b>Namita Sharma</b> brings over two decades of expertise in customer
                experience, digital transformation, and e-commerce. Her
                leadership in driving technological innovation has consistently
                been centered on optimizing workflows and creating value for
                both businesses and customers. Namita’s passion for leveraging
                AI to automate processes and enhance user experiences is
                reflected in her work with BotWot. She is committed to fostering
                an environment where AI is not only accessible but also ethical,
                empowering businesses to improve efficiency, reduce costs, and
                provide better customer service. Namita’s customer-first
                approach and focus on results make her a key driving force
                behind BotWot’s vision for an intelligent, AI-powered workforce.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
