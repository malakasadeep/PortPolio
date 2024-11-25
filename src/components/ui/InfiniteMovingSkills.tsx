"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/util";
import {
  ComponentIcon,
  Binary,
  Server,
  Database,
  Container,
  Workflow,
  PaintBucket,
  Code,
  Bot,
  Braces,
  Cloud,
  Layers,
  Cpu,
  Terminal,
  Palette,
  Coffee,
  FileCode,
  Flame,
  Cloud as CloudIcon,
  Leaf,
  Target,
  FileType,
  Paintbrush,
  PenTool,
  Table,
  Cable,
  Hash,
} from "lucide-react";

const skillsData = [
  {
    name: "React",
    icon: <ComponentIcon size={20} />,
    category: "Frontend",
    description: "Building efficient user interfaces with React ecosystem",
    iconBg: "bg-blue-500/20",
  },
  {
    name: "Next.js",
    icon: <Binary size={20} />,
    category: "Frontend",
    description: "Server-side rendering and static site generation",
    iconBg: "bg-black/20",
  },
  {
    name: "Node.js",
    icon: <Server size={20} />,
    category: "Backend",
    description: "Scalable server-side applications and APIs",
    iconBg: "bg-green-500/20",
  },
  {
    name: "MongoDB",
    icon: <Database size={20} />,
    category: "Database",
    description: "NoSQL database for flexible data storage",
    iconBg: "bg-emerald-500/20",
  },
  {
    name: "Docker",
    icon: <Container size={20} />,
    category: "DevOps",
    description: "Containerization for consistent deployments",
    iconBg: "bg-sky-500/20",
  },
  {
    name: "Kubernetes",
    icon: <Workflow size={20} />,
    category: "DevOps",
    description: "Container orchestration at scale",
    iconBg: "bg-blue-600/20",
  },
  {
    name: "Tailwind CSS",
    icon: <PaintBucket size={20} />,
    category: "Frontend",
    description: "Utility-first CSS framework",
    iconBg: "bg-cyan-500/20",
  },
  {
    name: "TypeScript",
    icon: <Code size={20} />,
    category: "Language",
    description: "Type-safe JavaScript development",
    iconBg: "bg-blue-400/20",
  },
  {
    name: "Python",
    icon: <Bot size={20} />,
    category: "Language",
    description: "Versatile programming for various applications",
    iconBg: "bg-yellow-500/20",
  },
  {
    name: "AWS",
    icon: <Cloud size={20} />,
    category: "Cloud",
    description: "Cloud computing and serverless architecture",
    iconBg: "bg-orange-500/20",
  },
  {
    name: "Machine Learning",
    icon: <Cpu size={20} />,
    category: "AI",
    description: "Building and deploying ML models",
    iconBg: "bg-purple-500/20",
  },
  {
    name: "Linux",
    icon: <Terminal size={20} />,
    category: "DevOps",
    description: "System administration and shell scripting",
    iconBg: "bg-gray-500/20",
  },
  {
    name: "Flutter",
    icon: <Layers size={20} />,
    category: "Mobile",
    description: "Cross-platform mobile development",
    iconBg: "bg-blue-300/20",
  },
  {
    name: "CI/CD",
    icon: <Workflow size={20} />,
    category: "DevOps",
    description: "Automated testing and deployment",
    iconBg: "bg-indigo-500/20",
  },
  {
    name: "UI/UX Design",
    icon: <Palette size={20} />,
    category: "Design",
    description: "Creating intuitive user experiences",
    iconBg: "bg-pink-400/20",
  },
  // New additions
  {
    name: "Java",
    icon: <Coffee size={20} />,
    category: "Language",
    description: "Enterprise-level application development",
    iconBg: "bg-red-500/20",
  },
  {
    name: "JavaScript",
    icon: <Braces size={20} />,
    category: "Language",
    description: "Dynamic web development and scripting",
    iconBg: "bg-yellow-400/20",
  },
  {
    name: "Firebase",
    icon: <Flame size={20} />,
    category: "Backend",
    description: "Real-time database and authentication",
    iconBg: "bg-orange-400/20",
  },
  {
    name: "Google Cloud",
    icon: <CloudIcon size={20} />,
    category: "Cloud",
    description: "Cloud computing and platform services",
    iconBg: "bg-blue-200/20",
  },
  {
    name: "Spring Boot",
    icon: <Leaf size={20} />,
    category: "Backend",
    description: "Java-based framework for microservices",
    iconBg: "bg-green-400/20",
  },
  {
    name: "Dart",
    icon: <Target size={20} />,
    category: "Language",
    description: "Programming language for Flutter development",
    iconBg: "bg-blue-500/20",
  },
  {
    name: "HTML",
    icon: <FileType size={20} />,
    category: "Frontend",
    description: "Standard markup language for web pages",
    iconBg: "bg-orange-500/20",
  },
  {
    name: "CSS",
    icon: <Paintbrush size={20} />,
    category: "Frontend",
    description: "Styling and layout for web applications",
    iconBg: "bg-blue-400/20",
  },
  {
    name: "PHP",
    icon: <FileCode size={20} />,
    category: "Backend",
    description: "Server-side scripting language",
    iconBg: "bg-purple-400/20",
  },
  {
    name: "Figma",
    icon: <PenTool size={20} />,
    category: "Design",
    description: "Collaborative interface design tool",
    iconBg: "bg-purple-500/20",
  },
  {
    name: "MySQL",
    icon: <Table size={20} />,
    category: "Database",
    description: "Relational database management system",
    iconBg: "bg-blue-500/20",
  },
  {
    name: "Oracle",
    icon: <Database size={20} />,
    category: "Database",
    description: "Enterprise database management system",
    iconBg: "bg-red-400/20",
  },
  {
    name: "C",
    icon: <Hash size={20} />,
    category: "Language",
    description: "System programming language",
    iconBg: "bg-gray-500/20",
  },
  {
    name: "C++",
    icon: <Cable size={20} />,
    category: "Language",
    description: "Object-oriented system programming",
    iconBg: "bg-blue-600/20",
  },
];

export const InfiniteMovingSkills = ({
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
    return () => {
      if (containerRef.current) {
        containerRef.current.style.removeProperty("--animation-duration");
        containerRef.current.style.removeProperty("--animation-direction");
      }
    };
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const speedMap = {
        fast: "150s",
        normal: "150s",
        slow: "200s",
      };
      containerRef.current.style.setProperty(
        "--animation-duration",
        speedMap[speed]
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-2 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {skillsData.map((skill, idx) => (
          <li
            key={`${skill.name}-${idx}`}
            className="relative w-[300px] flex-shrink-0 cursor-pointer group"
          >
            <div className="relative h-full overflow-hidden rounded-2xl border border-slate-700 bg-gradient-to-b from-slate-800/75 to-slate-900/75 p-4 transition-all duration-500 ease-out hover:scale-[1.03] hover:border-slate-500 hover:shadow-xl">
              <div className="relative z-20 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={cn(
                      "p-2 rounded-lg text-white transition-colors duration-300",
                      skill.iconBg
                    )}
                  >
                    {skill.icon}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-white">
                      {skill.name}
                    </h3>
                    <span className="text-xs text-slate-300 px-2 py-0.5 rounded-full bg-slate-700/50 w-fit">
                      {skill.category}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="absolute inset-0 rounded-2xl transition-all duration-500 group-hover:opacity-100 opacity-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-xl" />
              <div className="absolute inset-0 rounded-2xl transition-all duration-500 group-hover:opacity-100 opacity-0 border border-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteMovingSkills;
