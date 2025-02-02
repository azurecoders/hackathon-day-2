import { UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import InfiniteSlider from "./InfiniteSlider";

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="min-h-full w-full bg-background text-text pb-20 border-b border-[#ccc]/10"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-24 pt-24 justify-center itmes-center">
          <div className="max-w-2xl mx-auto text-center space-y-8 flex flex-col items-center justify-center">
            <h3 className="text-6xl font-bold leading-[80px]">
              Making Commerce Better for Everyone
            </h3>
            <p className="mt-4 text-[14px] text-text/80 font-medium">
              FSA is a full stack SaaS application with Next.js 15 and
              Typescript with Tailwind CSS and Vercel. It is build to make
              commerce better for everyone.
            </p>
            <div className="my-8 flex gap-4 items-center">
              <Link
                href="/sign-up"
                className="flex items-center gap-4 w-fit px-6 py-5 text-lg font-bold rounded-md bg-shadows text-text duration-300 transition-all hover:bg-shadows/90"
              >
                <UserRound />
                <span>Create free Account</span>
              </Link>
              <p className="text-lg font-normal text-text/95">
                Get 3 days free trial
              </p>
            </div>
          </div>
          <div className="w-full relative">
            <div className="absolute h-[400px] w-[400px] bg-shadows/10 rounded-full blur-3xl -top-[40px] -left-[80px] z-10" />
            <div className="absolute h-[400px] w-[400px] bg-shadows/10 rounded-full blur-3xl -bottom-[40px] -right-[80px] z-10" />
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="dashboard"
              width={1920}
              height={1080}
              className="object-cover rounded-md z-50 border border-[#ccc]/10 hover:border-[#ccc]/15 duration-300 transition-all h-[600px] w-full"
            />
          </div>
        </div>
      </section>
      <InfiniteSlider />
    </>
  );
};

export default Hero;
