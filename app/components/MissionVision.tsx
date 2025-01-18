import { mission, vision } from "../../public/assets";
import Image from 'next/image';

const MissionComponent = () => {
    return (
      <div className="flex flex-col px-4 md:px-20 text-slate-700 py-14">
        <h2 className="text-4xl font-bold text-center text-[#2E2F5F] mb-8">
          Our Mission and Vision
        </h2>
        <div className="flex flex-col md:flex-row gap-8 w-full">
          <div className="flex-1 p-8 rounded-3xl border border-gray-400 flex flex-col min-h-[250px]">
            <div className="flex items-start gap-4 mb-4">
              <Image
                loading="lazy"
                src={mission}
                alt="Mission Icon"
                className="w-12 h-12 object-contain"
              />
              <h3 className="text-3xl text-[#2E2F5F] mt-1 font-semibold">
                Mission
              </h3>
            </div>
            <p className="text-lg text-black leading-relaxed">
              To democratize AI for businesses, empowering them to streamline
              operations and deliver transformative customer experiences—all
              without the need for increased manpower. We aim to make AI
              Workforces accessible and scalable, enabling companies to drive
              growth and efficiency through automation.
            </p>
          </div>
  
          <div className="flex-1 p-8 rounded-3xl border border-gray-400 flex flex-col min-h-[250px]">
            <div className="flex items-start gap-4 mb-4">
              <Image
                loading="lazy"
                src={vision}
                alt="Vision Icon"
                className="w-12 h-12 object-contain"
              />
              <h3 className="text-3xl text-[#2E2F5F] mt-1 font-semibold">
                Vision
              </h3>
            </div>
            <p className="text-lg text-black leading-relaxed">
              To be at the forefront of the global shift towards effortless,
              AI-driven operations, setting a new standard for business
              efficiency. Our goal is to redefine how businesses engage with their
              customers, enhancing every interaction while promoting innovation,
              scalability, and operational excellence.
            </p>
          </div>
        </div>
      </div>
    );
  };

  export default MissionComponent;