"use client"

import React from "react";
import Image from "next/image";

const InfiniteSlider = () => {
  const logos = [
    { src: "/discord.svg", alt: "Discord", width: 150, height: 150 },
    { src: "/microsoft-azure.svg", alt: "Microsoft Azure", width: 200, height: 200 },
    { src: "/docker.svg", alt: "Docker", width: 150, height: 150 },
    { src: "/spotify.svg", alt: "Spotify", width: 150, height: 150 },
    { src: "/doordash.svg", alt: "DoorDash", width: 150, height: 150 },
  ];

  return (
    <section
      aria-label="Infinite logo slider"
      className="bg-background min-h-[15vh] overflow-hidden relative py-14"
    >
      {/* Gradient Overlays */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Wrapper */}
      <div className="relative flex overflow-hidden w-full">
        {/* Duplicate the logos for infinite effect */}
        <div className="flex animate-infinite-scroll">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center px-6"
              style={{ width: `${100 / logos.length}%` }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain transition-transform duration-300 ease-in-out hover:scale-105 mx-8"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-infinite-scroll {
          display: flex;
          animation: infinite-scroll 20s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-infinite-scroll {
            animation-duration: 30s;
          }
        }
      `}</style>
    </section>
  );
};

export default InfiniteSlider;