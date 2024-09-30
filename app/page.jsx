"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import React from "react";
import Photos from "@/components/Photos";
import Social from "@/components/Social";
import Stats from "@/components/Stats";

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/HarmeetCV.pdf";
    link.download = "HarmeetCV.pdf";
    link.click();
  };
  return (
    <section className="h-full ">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
          {/* data */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6 ">
              Hello I' m <br />{" "}
              <span className="text-accent">Harmeet Chavda</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafted elegant digital I excel at crafted elegant
              digital I excel at crafted elegant digital
            </p>

            {/* button */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="flex uppercase items-center gap-2"
                onClick={handleDownload}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex 
                   justify-center items-center text-accent text-base hover:bg-accent hover:text-primary 
                   hover:transition-all duration-500 "
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photos />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
