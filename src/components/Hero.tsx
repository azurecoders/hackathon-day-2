"use client";
import { UserRound } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import InfiniteSlider from "./InfiniteSlider";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Simulate component loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100); // Small delay to trigger animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section
        id="hero"
        className="min-h-full w-full bg-background text-text pb-20 border-b border-[#ccc]/10"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-24 pt-24 justify-center items-center">
          <div className="max-w-2xl mx-auto text-center space-y-8 flex flex-col items-center justify-center">
            {/* Heading */}
            <h3
              className={`text-4xl md:text-6xl font-bold leading-[60px] md:leading-[80px] transition-opacity duration-1000 ease-in-out ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
            >
              Making Commerce Better for Everyone
            </h3>

            {/* Description */}
            <p
              className={`mt-4 text-sm md:text-[14px] text-text/80 font-medium transition-opacity duration-1000 ease-in-out delay-200 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
            >
              JobBoard is a user-friendly platform that streamlines job searching and posting. Employers can easily list jobs, while job seekers can browse and search for opportunities.
            </p>

            {/* Buttons */}
            <div
              className={`my-8 flex flex-col sm:flex-row gap-4 items-center transition-opacity duration-1000 ease-in-out delay-500 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
            >
              <Link
                href="/sign-up"
                className="flex items-center gap-4 w-fit px-6 py-5 text-lg font-bold rounded-md bg-shadows text-text2 duration-300 transition-all hover:bg-shadows/90"
              >
                <UserRound />
                <span>Create free Account</span>
              </Link>
              <p className="text-lg font-normal text-text/95">
                Get 3 days free trial
              </p>
            </div>
          </div>
        </div>
      </section>
      <InfiniteSlider />
    </>
  );
};

export default Hero;