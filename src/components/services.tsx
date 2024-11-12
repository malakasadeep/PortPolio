import React from "react";
import { Meteors } from "./ui/meteors";
import {
  Computer,
  Smartphone,
  Palette,
  Server,
  LucideIcon,
} from "lucide-react";

interface Service {
  title: string;
  icon: LucideIcon;
  features: string[];
  description: string;
}

interface ServiceCardProps {
  title: string;
  icon: LucideIcon;
  features: string[];
  description: string;
}

interface StepProps {
  title: string;
}

export function Services(): JSX.Element {
  const services: Service[] = [
    {
      title: "Web App Development",
      icon: Computer,
      features: [
        "Full-stack Development",
        "Responsive Design",
        "Database Integration",
        "API Development",
        "Performance Optimization",
      ],
      description:
        "Experienced web app developer specializing in creating scalable and responsive applications using modern technologies and best practices.",
    },
    {
      title: "Mobile App Development",
      icon: Smartphone,
      features: [
        "Native App Development",
        "Cross-platform Solutions",
        "UI/UX Implementation",
        "App Store Deployment",
        "Mobile Testing",
      ],
      description:
        "Building innovative mobile applications for iOS and Android platforms with focus on performance and user experience.",
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      features: [
        "User Research",
        "Wireframing",
        "Prototype Development",
        "Visual Design",
        "Usability Testing",
      ],
      description:
        "Creating intuitive and engaging user interfaces with modern design principles and user-centered approaches.",
    },
    {
      title: "DevOps Services",
      icon: Server,
      features: [
        "CI/CD Implementation",
        "Cloud Infrastructure",
        "Security Management",
        "Monitoring Setup",
        "Docker & Kubernetes",
      ],
      description:
        "Streamlining development operations with automated workflows, robust infrastructure, and reliable deployment processes.",
    },
  ];

  return (
    <div className="h-[40rem] py-14 bg-slate-950">
      <div className="container mx-auto px-20">
        <div className="text-center mb-4">
          <h2 className="text-3xl font-semibold text-center text-white relative z-20">
            Services
          </h2>
          <p className="text-base font-extralight text-center text-stone-400 relative z-20">
            What I Offer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  icon: Icon,
  features,
  description,
}) => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 transform scale-[0.80] rounded-full blur-3xl opacity-70 group-hover:opacity-100 transition-all duration-500" />
      <div className="relative h-full bg-gray-900 border border-gray-800 px-6 py-8 rounded-2xl overflow-hidden">
        <div className="relative z-20">
          <div className="h-12 w-12 rounded-full border flex items-center justify-center mb-4 border-gray-500 bg-gray-900">
            <Icon className="h-6 w-6 text-purple-500" />
          </div>

          <h3 className="text-xl font-bold text-white mb-4">{title}</h3>

          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <Step key={index} title={feature} />
            ))}
          </ul>

          <p className="text-sm text-gray-400">{description}</p>
        </div>

        <Meteors number={15} />
      </div>
    </div>
  );
};

const Step: React.FC<StepProps> = ({ title }) => {
  return (
    <li className="flex items-start gap-2">
      <CheckIcon />
      <p className="text-gray-300 text-sm">{title}</p>
    </li>
  );
};

const CheckIcon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-purple-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};

export default Services;
