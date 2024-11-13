import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogContainer,
  DialogClose,
} from "@/components/ui/dialoh";
import {
  Github,
  Database,
  Server,
  Smartphone,
  Code,
  Monitor,
} from "lucide-react";

// Define interfaces for type safety
interface Project {
  id: number;
  title: string;
  shortDesc: string;
  image: string;
  longDesc: string;
  keyFeatures: string[];
  technologies: string[];
  githubLink: string;
}

interface TechIconProps {
  tech: string;
}

interface ProjectCardProps {
  project: Project;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Tourism Management System",
    shortDesc:
      "Full-stack MERN application for managing tourism services and bookings",
    image: "/projectimg/Frame1.png",
    longDesc:
      "A comprehensive tourism management platform built with the MERN stack, enabling travel agencies to manage bookings, packages, and customer interactions efficiently.",
    keyFeatures: [
      "User authentication and authorization",
      "Dynamic package booking system",
      "Real-time availability checking",
      "Payment integration",
      "Admin dashboard for analytics",
      "Review and rating system",
    ],
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Redux",
      "Tailwind CSS",
    ],
    githubLink: "https://github.com/yourusername/tourism-management",
  },
  {
    id: 2,
    title: "Sales Optimization App",
    shortDesc: "MERN stack application for sales analytics and optimization",
    image: "/projectimg/Frame2.png",
    longDesc:
      "An intelligent sales optimization platform that helps businesses analyze sales data, predict trends, and optimize their sales strategies using advanced analytics.",
    keyFeatures: [
      "Sales performance dashboard",
      "Predictive analytics",
      "Customer segmentation",
      "Revenue forecasting",
      "Integration with CRM systems",
      "Automated reporting",
    ],
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Chart.js",
      "Material UI",
    ],
    githubLink: "https://github.com/yourusername/sales-optimizer",
  },
  {
    id: 3,
    title: "Automotive Web App",
    shortDesc: "MERN-based platform for automotive services and management",
    image: "/projectimg/Frame3.png",
    longDesc:
      "A comprehensive automotive service management platform that connects vehicle owners with service providers and manages the entire service lifecycle.",
    keyFeatures: [
      "Service booking system",
      "Vehicle maintenance tracking",
      "Service provider directory",
      "Real-time status updates",
      "Service history management",
      "Digital documentation",
    ],
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Socket.io",
      "Bootstrap",
    ],
    githubLink: "https://github.com/yourusername/automotive-app",
  },
  {
    id: 4,
    title: "Clean Seas Mobile App",
    shortDesc: "Flutter-based mobile app for ocean conservation",
    image: "/projectimg/Frame1.png",
    longDesc:
      "A mobile application built with Flutter and Firebase, focused on ocean conservation efforts and community engagement in keeping seas clean.",
    keyFeatures: [
      "Event organization tools",
      "Cleanup tracking",
      "Community engagement",
      "Impact metrics",
      "Educational resources",
      "Social sharing features",
    ],
    technologies: [
      "Flutter",
      "Firebase",
      "Analytics",
      "Google Maps API",
      "Cloud Functions",
    ],
    githubLink: "https://github.com/yourusername/clean-seas",
  },
];

const TechIcon: React.FC<TechIconProps> = ({ tech }) => {
  const icons: Record<string, JSX.Element> = {
    MongoDB: <Database className="w-5 h-5" />,
    Express: <Server className="w-5 h-5" />,
    React: <Code className="w-5 h-5" />,
    "Node.js": <Server className="w-5 h-5" />,
    Flutter: <Smartphone className="w-5 h-5" />,
    Firebase: <Database className="w-5 h-5" />,
  };

  return (
    <div className="flex items-center gap-1 bg-slate-800 px-2 py-1 rounded-full">
      {icons[tech] || <Monitor className="w-5 h-5" />}
      <span className="text-xs">{tech}</span>
    </div>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Dialog>
      <DialogTrigger className="h-full">
        <div className="bg-slate-800 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-slate-300 text-sm mb-4">{project.shortDesc}</p>
            <div className="flex flex-wrap gap-2 text-zinc-400">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <TechIcon key={index} tech={tech} />
              ))}
              {project.technologies.length > 3 && (
                <span className="text-slate-300 text-sm mt-1">
                  +{project.technologies.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>
      </DialogTrigger>

      <DialogContainer className="z-50">
        <DialogContent className="bg-slate-900 text-white max-w-3xl h-[45rem] rounded-xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover rounded-t-xl"
          />
          <div className="p-6">
            <DialogTitle className="text-2xl font-bold mb-2">
              {project.title}
            </DialogTitle>
            <DialogDescription className="text-slate-300">
              <p className="mb-4">{project.longDesc}</p>

              <h4 className="text-white font-semibold mb-2">Key Features:</h4>
              <ul className="list-disc pl-5 mb-4">
                {project.keyFeatures.map((feature, index) => (
                  <li key={index} className="text-slate-300 mb-1">
                    {feature}
                  </li>
                ))}
              </ul>

              <h4 className="text-white font-semibold mb-2">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <TechIcon key={index} tech={tech} />
                ))}
              </div>

              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 transition-colors px-4 py-2 rounded-full"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            </DialogDescription>
          </div>
          <DialogClose className="absolute top-4 right-4 text-white hover:text-slate-300" />
        </DialogContent>
      </DialogContainer>
    </Dialog>
  );
};

export function Projects(): JSX.Element {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
