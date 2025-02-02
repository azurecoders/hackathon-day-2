"use client";
import React, { useState } from "react";

const Pricing = () => {
  const [toggle, isToggle] = useState<boolean>(false);
  return (
    <section className="min-h-screen bg-background py-20 text-text border-b border-[#ccc]/10">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <h3 className="text-6xl font-bold leading-[70px]">
            Find the right plan for your needs
          </h3>
          <p className="mt-4 text-lg text-text/80">
            Our site provides the best plan for you and your team, no matter
            what your budget is.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 my-12 h-full gap-8">
          <div className="bg-gradient-to-r from-[#14171F] to-[#fff]/5 h-full flex flex-col gap-8 text-center p-8 rounded-md hover:scale-[1.02] duration-300 transition-all cursor-pointer z-50">
            <div className="space-y-2">
              <span className="px-4 py-3 rounded-sm uppercase text-sm font-bold bg-text text-black">
                Standard
              </span>
              <h3 className="pt-8 text-6xl font-extrabold">
                {toggle ? "$12.99" : "$9.99"}
                <span className="text-xl font-bold text-text/80">
                  {toggle ? "/yr" : "/mo"}
                </span>
              </h3>
              <p className="text-sm font-medium text-text/80">
                Billed {toggle ? "Yearly" : "Montly"}
              </p>
            </div>
            <div>
              <p className="text-lg text-text/90">
                Best for higher volume business
              </p>
              <div className="text-left flex flex-col my-8">
                <div className="bg-gradient-to-r from-[#191C22] to-[#1A1E23] p-4 rounded-md text-text/90 font-bold">
                  <span>50000 Emails</span>
                </div>
                <div className="p-4 text-text/90 font-bold">
                  <span>1000 Users</span>
                </div>
                <div className="bg-gradient-to-r from-[#191C22] to-[#1A1E23] p-4 rounded-md text-text/90 font-bold">
                  <span>Unlimited Domains</span>
                </div>
              </div>
              <button className="w-full bg-text text-black font-medium py-2 rounded-md text-lg hover:bg-text/80 duration-300 transition-all">
                Select Plan
              </button>
            </div>
          </div>
          <div className="bg-gradient-to-r from-shadows/55 via-shadows to-shadows/55 h-full flex flex-col gap-8 text-center p-8 rounded-md scale-110 z-10 hover:scale-[1.12] duration-300 transition-all">
            <div className="space-y-2">
              <span className="px-4 py-3 rounded-sm uppercase text-sm font-bold bg-text text-black">
                Standard
              </span>
              <h3 className="pt-8 text-6xl font-extrabold">
                {toggle ? "$12.99" : "$9.99"}
                <span className="text-xl font-bold text-text/80">
                  {toggle ? "/yr" : "/mo"}
                </span>
              </h3>
              <p className="text-sm font-medium text-text/80">
                Billed {toggle ? "Yearly" : "Montly"}
              </p>
            </div>
            <div>
              <p className="text-lg text-text/90">
                Best for higher volume business
              </p>
              <div className="text-left flex flex-col my-8">
                <div className="bg-[#3E7DFE]/50 p-4 rounded-md text-text/90 font-bold">
                  <span>50000 Emails</span>
                </div>
                <div className="p-4 text-text/90 font-bold">
                  <span>1000 Users</span>
                </div>
                <div className="bg-[#3E7DFE]/50 p-4 rounded-md text-text/90 font-bold">
                  <span>Unlimited Domains</span>
                </div>
              </div>
              <button className="w-full bg-text text-black font-medium py-2 rounded-md text-lg hover:bg-text/80 duration-300 transition-all">
                Select Plan
              </button>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#14171F] to-[#fff]/5 h-full flex flex-col gap-8 text-center p-8 rounded-md hover:scale-[1.02] duration-300 transition-all cursor-pointer z-50">
            <div className="space-y-2">
              <span className="px-4 py-3 rounded-sm uppercase text-sm font-bold bg-text text-black">
                Standard
              </span>
              <h3 className="pt-8 text-6xl font-extrabold">
                {toggle ? "$12.99" : "$9.99"}
                <span className="text-xl font-bold text-text/80">
                  {toggle ? "/yr" : "/mo"}
                </span>
              </h3>
              <p className="text-sm font-medium text-text/80">
                Billed {toggle ? "Yearly" : "Montly"}
              </p>
            </div>
            <div>
              <p className="text-lg text-text/90">
                Best for higher volume business
              </p>
              <div className="text-left flex flex-col my-8">
                <div className="bg-gradient-to-r from-[#191C22] to-[#1A1E23] p-4 rounded-md text-text/90 font-bold">
                  <span>50000 Emails</span>
                </div>
                <div className="p-4 text-text/90 font-bold">
                  <span>1000 Users</span>
                </div>
                <div className="bg-gradient-to-r from-[#191C22] to-[#1A1E23] p-4 rounded-md text-text/90 font-bold">
                  <span>Unlimited Domains</span>
                </div>
              </div>
              <button className="w-full bg-text text-black font-medium py-2 rounded-md text-lg hover:bg-text/80 duration-300 transition-all">
                Select Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
