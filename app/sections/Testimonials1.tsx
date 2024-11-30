import Image from "next/image";
import { avatar1, avatar2, avatar3, avatar4 } from "../../public/assets";
import { Avatar } from "../components";

const Testimonials: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center px-20 pt-8 rounded-3xl max-md:px-5">
      
      <div className="flex flex-col max-w-full w-[1008px]">
        <div className="flex flex-col justify-center items-center self-center text-4xl text-center max-md:max-w-full">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl bg-[#B0B7C3]/50 font-semibold text-gray-800 mb-10 text-center py-4 rounded-lg">
            Testimonials
          </h2>

          <div className="mt-5 font-bold text-black leading-[56px] max-md:max-w-full">
            Professionals use BotWot to 10x their Productivity
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-9 max-md:max-w-full">
          <div className="flex flex-wrap gap-6 items-start max-md:max-w-full">
            <div className="flex overflow-hidden flex-col p-8 w-80 bg-white rounded-xl min-w-[240px] max-md:px-5">
              <div className="text-base font-medium leading-7 text-zinc-900">
                My company provides critical <br />
                software services for customers <br />
                such as Medium, Spotify, Google, Spotify, Coinbase, and many
                others.
              </div>
              <div className="flex gap-3 items-start mt-6 w-full text-sm leading-none text-zinc-900">
                <Avatar className="z-40">
                  <Image
                    src={avatar1}
                    alt="Avatar 1"
                    className="rounded-full"
                  />
                </Avatar>
                <div className="flex flex-col flex-1 shrink basis-0">
                  <div className="font-medium">Floyd Miles</div>
                  <div>Business Strategist</div>
                </div>
              </div>
            </div>
            <div className="flex overflow-hidden flex-col p-8 bg-white rounded-xl min-w-[240px] w-[664px] max-md:px-5 max-md:max-w-full">
              <div className="text-base font-medium leading-7 text-zinc-900 max-md:max-w-full">
                “It’s simple. BotWot makes me more productive. Whether I write
                copy, tasks, <br />
                code or anything in between I’m faster and make fewer mistakes.
                It’s one of <br />
                those things that when missing. My company provides critical
                software <br />
                services for customers such as Medium, Spotify, Google, Spotify,
                Coinbase, <br />
                and many others. I liked the idea of inline triggers.
              </div>
              <div className="flex flex-wrap gap-3 items-start mt-6 w-full text-sm leading-none text-zinc-900 max-md:max-w-full">
                <Avatar className="-ml-6 border-indigo-500 z-30">
                  <Image
                    src={avatar2}
                    alt="Avatar 2"
                    className="rounded-full"
                  />
                </Avatar>
                <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
                  <div className="font-medium max-md:max-w-full">
                    Devon Lane
                  </div>
                  <div className="max-md:max-w-full">Business Analyser</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 items-start mt-6 max-md:max-w-full">
            <div className="flex overflow-hidden flex-col p-8 w-80 bg-white rounded-xl min-w-[240px] max-md:px-5">
              <div className="text-base font-medium leading-7 text-zinc-900">
                I have been using BotWot for quite some time now and been
                absolutely loving every part of <br />
                the experience. Super intuitive! <br />
                leave my current task.
              </div>
              <div className="flex gap-3 items-start mt-6 w-full text-sm leading-none text-zinc-900">
                <Avatar className="-ml-6 border-amber-500 z-20">
                  <Image
                    src={avatar3}
                    alt="Avatar 3"
                    className="rounded-full"
                  />
                </Avatar>
                <div className="flex flex-col flex-1 shrink basis-0">
                  <div className="font-medium">Jerome Bell</div>
                  <div>Interaction Designer</div>
                </div>
              </div>
            </div>
            <div className="flex overflow-hidden flex-col p-8 w-80 bg-white rounded-xl min-w-[240px] max-md:px-5">
              <div className="text-base font-medium leading-7 text-zinc-900">
                Super intuitive! Its release as I <br />
                am a sucker for beautiful native <br />
                apps. I liked the idea of inline <br />
                triggers that let&lsquo;s you do things <br />
                like generating.
              </div>
              <div className="flex gap-3 items-start mt-6 w-full text-sm leading-none text-zinc-900">
                <Avatar className="-ml-6 border-amber-500 z-20">
                  <Image
                    src={avatar4}
                    alt="Avatar 3"
                    className="rounded-full"
                  />
                </Avatar>
                <div className="flex flex-col flex-1 shrink basis-0">
                  <div className="font-medium">User</div>
                  <div>Developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
