import Image from "next/image";
import collabIcon from "../assets/collab-icon.png";
import { ArrowUpRight } from "lucide-react";

const Benefits = () => {
  return (
    <section className="min-h-[80vh] w-full bg-background text-text border-b border-[#ccc]/10 py-10">
      <div className="max-w-7xl mx-auto">
        <p className="text-lg uppercase text-shadows text-center">Benefits</p>
        <h3 className="text-4xl font-bold text-center mt-4 my-12">
          The smart choice for your team
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="benefit-card p-6 rounded-md flex flex-col gap-2 h-full duration-300 transition-all cursor-pointer">
            <div className="bg-shadows/20 p-4 rounded-full w-fit flex items-center justify-center mb-3 text-center">
              <Image
                src={collabIcon}
                className="text-text"
                alt="Benefits"
                width={30}
                height={30}
              />
            </div>
            <h3 className="text-2xl font-semibold">Seamless Collaboration</h3>
            <p className="text-white/90 text-sm">
              Empower your team with real-time access to your data. Collaborate
              with your team in real-time.
            </p>
          </div>
          <div className="benefit-card p-6 rounded-md flex flex-col gap-2 h-full duration-300 transition-all cursor-pointer">
            <div className="bg-shadows/20 p-4 rounded-full w-fit flex items-center justify-center mb-3 text-center">
              <Image
                src={collabIcon}
                className="text-text"
                alt="Benefits"
                width={30}
                height={30}
              />
            </div>
            <h3 className="text-2xl font-semibold">Seamless Collaboration</h3>
            <p className="text-white/90 text-sm">
              Empower your team with real-time access to your data. Collaborate
              with your team in real-time.
            </p>
          </div>
          <div className="benefit-card p-6 rounded-md flex flex-col gap-2 h-full duration-300 transition-all cursor-pointer">
            <div className="bg-shadows/20 p-4 rounded-full w-fit flex items-center justify-center mb-3 text-center">
              <Image
                src={collabIcon}
                className="text-text"
                alt="Benefits"
                width={30}
                height={30}
              />
            </div>
            <h3 className="text-2xl font-semibold">Seamless Collaboration</h3>
            <p className="text-white/90 text-sm">
              Empower your team with real-time access to your data. Collaborate
              with your team in real-time.
            </p>
          </div>
          <div className="benefit-card p-6 rounded-md flex flex-col gap-2 h-full duration-300 transition-all cursor-pointer">
            <div className="bg-shadows/20 p-4 rounded-full w-fit flex items-center justify-center mb-3 text-center">
              <Image
                src={collabIcon}
                className="text-text"
                alt="Benefits"
                width={30}
                height={30}
              />
            </div>
            <h3 className="text-2xl font-semibold">Seamless Collaboration</h3>
            <p className="text-white/90 text-sm">
              Empower your team with real-time access to your data. Collaborate
              with your team in real-time.
            </p>
          </div>
          <div className="benefit-card p-6 rounded-md flex flex-col gap-2 h-full duration-300 transition-all cursor-pointer">
            <div className="bg-shadows/20 p-4 rounded-full w-fit flex items-center justify-center mb-3 text-center">
              <Image
                src={collabIcon}
                className="text-text"
                alt="Benefits"
                width={30}
                height={30}
              />
            </div>
            <h3 className="text-2xl font-semibold">Seamless Collaboration</h3>
            <p className="text-white/90 text-sm">
              Empower your team with real-time access to your data. Collaborate
              with your team in real-time.
            </p>
          </div>
          <div className="bg-shadows/10 p-6 rounded-md flex flex-col gap-2 h-full hover:bg-shadows/15 duration-300 transition-all border border-[#ccc]/10 cursor-pointer">
            <div className="bg-shadows/20 p-4 rounded-full w-fit flex items-center justify-center mb-3 text-center">
              <Image
                src={collabIcon}
                className="text-text"
                alt="Benefits"
                width={30}
                height={30}
              />
            </div>
            <h3 className="text-2xl font-semibold">Seamless Collaboration</h3>
            <p className="text-white/90 text-sm">
              Empower your team with real-time access to your data. Collaborate
              with your team in real-time.
            </p>
          </div>
        </div>
        <button className="bg-shadows/95 px-4 py-2 text-text rounded-md flex gap-2 h-full hover:bg-shadows/85 duration-300 transition-all border border-[#ccc]/10 cursor-pointer w-fit mx-auto my-8 items-center">
          <span>Explore All</span>
          <ArrowUpRight size={18} className="text-text" />
        </button>
      </div>
    </section>
  );
};

export default Benefits;
