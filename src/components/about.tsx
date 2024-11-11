"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { GlareCard } from "./ui/glare-card";
import { Award, CheckCircle, Users } from "lucide-react";
import Lottie from "react-lottie-player";
import lottieAnimation from "@/assets/Animation - 1731347439900.json";

export function About() {
  return (
    <div className="h-[45rem] relative w-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="text-3xl font-semibold text-center text-white relative z-20">
        About Me
      </h1>
      <h4 className="text-base font-extralight text-center text-stone-400 relative z-20">
        Get to know me better
      </h4>
      <div className="flex gap-8 mt-8 relative z-20">
        <GlareCard className="flex flex-col items-center justify-center">
          <Award className="h-14 w-auto" />
          <p className="text-white font-bold text-xl mt-4">Experience</p>
          <p className="text-stone-400 font-light text-sm mt-2">2 Years</p>
        </GlareCard>
        <GlareCard className="flex flex-col items-center justify-center">
          <CheckCircle className="h-12 w-auto" />
          <p className="text-white font-bold text-xl mt-4">Completed</p>
          <p className="text-stone-400 font-light text-sm mt-2">12+ Projects</p>
        </GlareCard>
        <GlareCard className="flex flex-col items-center justify-center">
          <Users className="h-12 w-auto" />
          <p className="text-white font-bold text-xl mt-4">Support</p>
          <p className="text-stone-400 font-light text-sm mt-2">Online 24/7</p>
        </GlareCard>
      </div>
      <div className="mt-8 max-w-md text-center text-stone-400 text-lg relative z-20">
        <p>
          I am a passionate and dedicated developer with a strong background in
          creating innovative and user-friendly applications. With 2 years of
          experience, I have successfully completed over 12 projects, always
          striving to deliver high-quality solutions that exceed client
          expectations.
        </p>
        <p className="mt-4">
          I am committed to staying up-to-date with the latest technologies and
          industry trends, ensuring that I can provide the best possible
          services. My attention to detail, problem-solving skills, and
          collaborative approach make me a valuable asset to any team.
        </p>
      </div>
      <button className="p-[3px] relative mt-6">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="flex items-center px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white text-xl hover:bg-transparent">
          <span>Download CV</span>
          <Lottie
            loop
            animationData={lottieAnimation}
            play
            className="h-12 w-12 ml-4" // Adjust size and margin to fit your design
          />
        </div>
      </button>
    </div>
  );
}
