"use client";

import React, { useState, FormEvent } from "react";

import { WorldMap } from "./ui/world-map";
import Lottie from "react-lottie-player";
import lottieAnimation from "@/assets/Animation - 1731322408129.json";
import phoneLottie from "@/assets/Animation - 1732650091448.json";
import mailLottie from "@/assets/Animation - 1732649934839.json";
import linkedinLottie from "@/assets/Animation - 1732651531048.json";

// Interfaces remain the same as in the original component
interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface ContactCardProps {
  lottieAnimation: object;
  title: string;
  content: string;
  link?: string;
}

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred");
    }
  };

  const contactCards: ContactCardProps[] = [
    {
      lottieAnimation: phoneLottie,
      title: "Phone",
      content: "+94 74 0437570",
      link: "tel:+94740437570",
    },
    {
      lottieAnimation: mailLottie,
      title: "Email",
      content: "p.g.m.sadeep2001@gmail.com",
      link: "mailto:p.g.m.sadeep2001@gmail.com",
    },
    {
      lottieAnimation: linkedinLottie,
      title: "LinkedIn",
      content: "Malaka Sadeep",
      link: "https://www.linkedin.com/in/sadeeppgm/",
    },
  ];

  const mapDots = [
    {
      start: {
        lat: 64.2008,
        lng: -149.4937,
      }, // Alaska (Fairbanks)
      end: {
        lat: 34.0522,
        lng: -118.2437,
      }, // Los Angeles
    },
    {
      start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
      end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
    },
    {
      start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
      end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
    },
    {
      start: { lat: 51.5074, lng: -0.1278 }, // London
      end: { lat: 28.6139, lng: 77.209 }, // New Delhi
    },
    {
      start: { lat: 28.6139, lng: 77.209 }, // New Delhi
      end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
    },
    {
      start: { lat: 28.6139, lng: 77.209 }, // New Delhi
      end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
    },
    // ... (same as previous implementation)
  ];

  return (
    <div className="relative py-20 bg-slate-950 w-full overflow-hidden">
      {/* World Map Background */}
      <div className="absolute inset-0 z-0">
        <WorldMap dots={mapDots} />
      </div>

      {/* New Heading Section */}
      <div className="relative z-10 text-center mb-8 px-4">
        <h2 className="text-3xl font-semibold   text-white mb-4">
          Get in Touch
        </h2>
        <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
          Have a project in mind or just want to say hello? I'm always open to
          new opportunities and collaborations. Fill out the form below, and
          I'll get back to you as soon as possible.
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        {/* Contact Information Cards */}

        <div className="space-y-6 mt-5">
          {contactCards.map((card, index) => (
            <a
              key={index}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer"
            >
              <div className=" border border-white/20 rounded-xl p-6 flex items-center space-x-4 transform transition-all duration-300 hover:scale-105 hover:border-white/50 group relative overflow-hidden">
                {/* Animated Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-0`}
                />

                {/* Icon and Text Container */}
                <div className="flex items-center space-x-4 relative z-10">
                  {/* Lottie Animation */}
                  <div className="w-16 h-16 relative">
                    <Lottie
                      loop
                      animationData={card.lottieAnimation}
                      play
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-white font-semibold group-hover:text-white/80 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-neutral-300 group-hover:text-white/70 transition-colors">
                      {card.content}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Contact Form */}

        <form onSubmit={handleSubmit} className="bg-transparent p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg px-4 py-3 text-white placeholder-neutral-300 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300 hover:border-white/50"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg px-4 py-3 text-white placeholder-neutral-300 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300 hover:border-white/50"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg px-4 py-3 text-white placeholder-neutral-300 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300 hover:border-white/50"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg px-4 py-3 text-white placeholder-neutral-300 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300 hover:border-white/50"
            required
          />
          <button
            type="submit"
            className="w-full p-[3px] relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg transition-all duration-300 group-hover:opacity-80" />
            <div className="flex items-center justify-center px-8 py-3 bg-black rounded-[6px] relative text-white text-lg hover:bg-transparent transition-all duration-300">
              <span>Send Message</span>
              <Lottie
                loop
                animationData={lottieAnimation}
                play
                className="h-10 w-10 ml-2"
              />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;