import { Star } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "HireLens | AI Resume Analyzer",
      description:
        "Built a responsive AI-powered resume analysis tool with real-time feedback. Integrated serverless authentication and third-party APIs seamlessly, eliminating backend complexity. Designed an intuitive UI for file uploads and AI-driven scoring with category-wise insights.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Puter.js"],
      image: "/thumbnails/resume-analyzer.jpg",
      liveLink: "https://resume-analyzer-gold-one.vercel.app/",
      sourceCode: "https://github.com/harithaa-srii/resume-analyzer",
      featured: true,
    },
    {
      title:"React Dashboard",
      description:"Built a data visualization dashboard featuring interactive charts and geographic maps. Delivered polished UI with responsive design, component reusability, and real-time data rendering using Recharts. Demonstrates proficiency in state management and performance optimization.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
      image: "/thumbnails/dashboard.png",
      liveLink: "https://harithaasrii-reactdashboard.vercel.app/",
      sourceCode: "https://github.com/harithaa-srii/react-dashboard",
      featured: true,
    },
    {
      title:"2048 – Ice Edition",
      description:"Created a themed version of the classic 2048 game showcasing React component architecture, state management, and CSS animations. Demonstrates UI interaction design and custom styling capabilities.",
      techStack: ["React", "TypeScript", "Tailwind CSS"],
      image: "/thumbnails/2048.png",
      liveLink: "https://2048-game-ice-edition.vercel.app/",
      sourceCode: "https://github.com/harithaa-srii/2048-game",
      featured: false,
    },
     {
      title:"FolioForge | Portfolio Generator",
      description:
      "Full-stack web app enabling non-technical users to create and deploy professional portfolios. Features customizable templates, OAuth authentication, and flexible deployment options.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "OAuth"],
      image: "/thumbnails/coming-soon.jpg",
      liveLink: "",
      sourceCode: "https://github.com/harithaa-srii/portfolio-generator",
      featured: false,
    },
    {
      title: "Unity Funds | Crowdfunding Platform",
      description:
        "Full-stack crowdfunding application with role-based access control, payment integration, and real-time photo updates. Demonstrates backend integration and database design.",
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Stripe"],
      image: "/thumbnails/crowdfunding-platform.png",
      liveLink: "",
      sourceCode: "https://github.com/harithaa-srii/crowdfunding-platform",
      featured: false,
    },

  ];

  return (
    <section className="min-h-screen px-4 py-12 bg-background text-foreground" aria-label="Featured projects and portfolio work">
      <h2 className="text-4xl font-bold text-center mb-4">Projects</h2>
      <p className="text-center text-muted-foreground text-lg mb-10">
        Frontend-focused work and full-stack projects.
      </p>

      {/* grid with equal row heights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto auto-rows-fr">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-card rounded-xl shadow-md border border-muted p-6 transition hover:shadow-lg flex flex-col h-full relative"
          >
            {project.featured && (
              <div className="absolute top-4 right-4 flex items-center gap-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200 px-2 py-1 rounded-md text-xs font-semibold">
                <Star className="w-3 h-3 fill-current" />
                Featured
              </div>
            )}
            <img
              src={project.image}
              alt={`${project.title} - ${project.techStack.join(', ')}`}
              className="w-full h-64 object-contain rounded-md mb-6"
            />

            {/* flexible content area so links can sit at bottom */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-xl font-semibold text-center mb-3">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 text-justify">
                {project.description}
              </p>
              <div className="text-sm mb-4">
                <span className="font-medium text-foreground block mb-2">Tech:</span>
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="bg-primary/10 text-primary dark:bg-primary/20 px-2 py-1 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* links container pushed to bottom */}
              <div className="flex justify-between text-sm font-medium px-1 mt-auto">
                {project.liveLink ? (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:underline"
                  >
                    Live Demo
                  </a>
                ) : (
                  <span className="text-muted-foreground italic">
                    Live Demo – Coming Soon
                  </span>
                )}
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:underline"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};