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
  Flame,
  Bot,
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
    title: "Tourism Management System - TourCraft",
    shortDesc:
      "Full-stack MERN application for managing tourism services and bookings",
    image: "/projectimg/2.png",
    longDesc:
      "The Tourist Management System, developed as a collaborative project, is designed to revolutionize the travel experience by offering a centralized, user-friendly platform. Tourists can seamlessly organize and book tours, accommodations, vehicles, restaurants, and train tickets, while accessing real-time updates and personalized recommendations. Service providers, including tour agencies, hotel owners, and transport operators, benefit from streamlined management tools, analytics, and increased digital exposure.  Built using a modern tech stack featuring React.js, Node.js, MongoDB, and Firebase, the platform prioritizes security, scalability, and user-centric functionality. Its features include role-based access control, robust authentication with JWT, and integrations with payment systems to facilitate smooth transactions. This innovative solution addresses inefficiencies in the tourism industry, enhances user experience, and aligns with Sri Lanka's goal of becoming a top global tourist destination.",
    keyFeatures: [
      "Centralized Booking: One-stop platform for tours, hotels, vehicles, and more.",
      "User-Friendly Interface: Search, filter, and book with ease.",
      "Role-Based Access: Separate features for tourists, admins, and providers.",
      "Feedback System: Rate and review services for continuous improvement.",
      "Scalable Design: Handles increasing users and services effortlessly.",
    ],
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Redux",
      "Tailwind CSS",
      "Firebase",
    ],
    githubLink:
      "https://github.com/malakasadeep/ITP24_B9_09_Tourism_Management_System-MERN",
  },
  {
    id: 2,
    title: "Sales Optimization System - FashioNexus",
    shortDesc:
      "AI-powered sales forecasting and Optimization system for fashion retail businesses.",
    image: "/projectimg/1.png",
    longDesc:
      "FashioNexus is a comprehensive web-based solution for optimizing sales in the fashion retail industry. Using Python for machine learning models and Flask for prediction APIs, it provides real-time sales insights, automated inventory management, and detailed promotion analytics. Built with the MERN stack, the system ensures a user-friendly interface and seamless operations, helping businesses make data-driven decisions, streamline inventory, and enhance customer satisfaction.",
    keyFeatures: [
      "AI-Driven Sales Insights: Predict sales trends using machine learning models for informed decision-making.",
      "Real-Time Sales Forecasting: Utilize Flask-based APIs to deliver instant predictions.",
      "Automated Inventory Management: Trigger reorder alerts or auto-place orders for stock shortages.",
      "Promotion Analytics Dashboard: Analyze promotion effectiveness with real-time data visualization.",
      "Order Fulfillment Tracking: Provide transparent updates on order statuses, enhancing customer satisfaction.",
      "Secure User Management: Robust login and profile management features for multiple user roles",
    ],
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Chart.js",
      "Python",
    ],
    githubLink:
      "https://github.com/malakasadeep/FashioNexus-Web-base-Sales-Optimization-Solution-for-Fashion-Retail",
  },

  {
    id: 3,
    title: "Clean Seas Mobile App",
    shortDesc:
      "A mobile application built with Flutter and Firebase, focused on ocean conservation efforts and community engagement in keeping seas clean.",
    image: "/projectimg/3.png",
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
    Firebase: <Flame className="w-5 h-5" />,
    Python: <Bot className="w-5 h-5" />,
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
      <DialogTrigger className="h-auto">
        <div className="bg-slate-800 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[320px]  object-cover"
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
            className="w-full h-[620px]  object-cover rounded-t-xl"
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
    <div className="w-full min-h-screen bg-slate-950 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-white relative z-20 ">
          Projects
        </h2>
        <h4 className="text-base font-extralight text-center text-stone-400 relative z-20 mb-4">
          Click over the cards to explore my projects
        </h4>
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
