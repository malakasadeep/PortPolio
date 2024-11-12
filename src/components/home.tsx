"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import img from "@/assets/mainIconsdark.svg";
import { LampContainer } from "./ui/lamp";
import { FlipWords } from "./ui/flip-words";
import { BackgroundLines } from "./ui/background-lines";
import Lottie from "react-lottie-player";
import lottieAnimation from "@/assets/hand.json";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { CoolMode } from "./ui/cool-mode";

export function HomeCon() {
  const words = [
    "FullStack Developer",
    "UI/UX Designer",
    "Mobile Application Developer",
    "Web Application Developer",
  ];
  const para = `I am a passionate developer with expertise in creating beautiful and functional digital experiences. With a strong foundation in both frontend and backend technologies, I bring ideas to life through clean code and intuitive design.`;

  return (
    <BackgroundLines>
      <section className="flex min-h-screen bg-slate-950">
        {/* Left Side Content */}
        <div className="w-3/5 p-8 flex flex-col justify-center ">
          <LampContainer className="">
            <motion.div
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              <div className="text-left ml-32">
                <h1 className="text-6xl font-extrabold tracking-tight md:text-7xl mb-4">
                  <div className="text-white">
                    <div>Hi, I&apos;m</div>
                  </div>
                  <div className="relative inline-block w-max">
                    <div className="absolute left-0 top-[1px] bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
                      <span>Malaka Sadeep</span>
                    </div>
                    <div className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
                      <span>Malaka Sadeep</span>
                    </div>
                  </div>
                </h1>
                <div className="text-4xl font-normal text-neutral-400 mb-8">
                  <FlipWords words={words} />
                </div>

                {/* Moved Description up */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-neutral-300  max-w-2xl mb-8 -mt-4"
                >
                  <TextGenerateEffect words={para} />
                </motion.div>

                {/* Moved Contact Button up */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="flex gap-4"
                >
                  <CoolMode>
                    <button className="p-[3px] relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                      <div className="flex items-center px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white text-xl hover:bg-transparent">
                        <span>Click Me</span>
                        <Lottie
                          loop
                          animationData={lottieAnimation}
                          play
                          className=" w-12 h-auto ml-4" // Adjust size and margin to fit your design
                        />
                      </div>
                    </button>
                  </CoolMode>
                </motion.div>
              </div>
            </motion.div>
          </LampContainer>
        </div>

        {/* Right Side - Image - Moved up using negative margin */}
        <div className="w-2/5 flex items-center justify-center p-8 -mt-40">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 rounded-full blur-3xl opacity-30" />
            <Image
              src={img}
              alt="Malaka Sadeep"
              width={500}
              height={500}
              className=" relative z-10 animate-morph"
            />
          </motion.div>
        </div>
      </section>
    </BackgroundLines>
  );
}

export default HomeCon;
