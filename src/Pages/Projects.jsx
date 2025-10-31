export const Projects = () => {
  const projects = [
    {
      title: "HireLens | An AI Resume Analyzer",
      description:
        "Developed a responsive AI-powered resume analysis tool that evaluates resumes against specific job roles by scoring and providing category-wise feedback. Integrated Puter.js for serverless authentication, cloud file storage, and AI model access, eliminating the need for a traditional backend. Delivered an intuitive UI for uploading resumes and job descriptions, with real-time, AI-driven insights to help users optimize their applications.",
      techStack: ["React", "Tailwind CSS", "TypeScript","Puter.js"],
      image: "/thumbnails/resume-analyzer.jpg",
      liveLink: "https://resume-analyzer-gold-one.vercel.app/",
      sourceCode: "https://github.com/harithaa-srii/resume-analyzer",
    },
    {
      title:"React Dashboard",
      description:"Completed a React dashboard assignment featuring interactive charts and geographic maps, delivering 70% of the project requirements within a tight 3-day deadline. The dashboard provides clear data visualizations and is in progress toward full responsiveness across devices.",
      techStack: ["React", "Tailwind CSS", "Recharts", "Simple maps"],
      image: "/thumbnails/dashboard.png",
      liveLink: "https://harithaasrii-reactdashboard.vercel.app/",
      sourceCode: "https://github.com/harithaa-srii/react-dashboard",
    },
    {
      title:"2048 - Ice Edition",
      description:"A themed version of the classic 2048 game, '2048 - Ice Edition' features custom graphics to enhance the gaming experience. Built using React, TypeScript and Tailwind CSS this project showcases my skills in front-end development and game design.",
      techStack: ["React", "TypeScript", "Tailwind CSS"],
      image: "/thumbnails/2048.png",
      liveLink: "https://2048-game-ice-edition.vercel.app/",
      sourceCode: "https://github.com/harithaa-srii/2048-game"
    },
     {
      title:"FolioForge | Portfolio Website Generator",
      description:
      "A full-stack web app that lets users create and deploy professional portfolio websites without coding. Features include SSO authentication, customizable templates, and flexible deployment options (download as ZIP or one-click deploy).",
      techStack: ["React", "Node.js", "Express", "MongoDB", "OAuth"],
      image: "/thumbnails/coming-soon.jpg",
      liveLink: "",
      sourceCode: "https://github.com/harithaa-srii/portfolio-generator",
    },
    {
      title: "Unity Funds | Crowdfunding Platform",
      description:
        "A full-stack crowdfunding app with user roles, NGO verification, flexible funding options, and Stripe payment integration. Features geo-tagged item tracking with photo updates.",
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Stripe API"],
      image: "/thumbnails/crowdfunding-platform.png",
      liveLink: "",
      sourceCode: "https://github.com/harithaa-srii/crowdfunding-platform",
    },

  ];

  return (
    <section className="min-h-screen px-4 py-12 bg-background text-foreground">
      <h2 className="text-4xl font-bold text-center mb-4">Projects</h2>
      <p className="text-center text-muted-foreground text-lg mb-10">
        Showcasing the work I’ve done so far.
      </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto">
  {projects.map((project, index) => (
    <div
      key={index}
      className="bg-card rounded-xl shadow-md border border-muted p-6 transition hover:shadow-lg"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-contain rounded-md mb-6"
      />
      <h3 className="text-xl font-semibold text-center mb-3">
        {project.title}
      </h3>
      <p className="text-sm text-muted-foreground text-center mb-4 text-justify">
        {project.description}
      </p>
      <div className="text-sm mb-4 text-center">
        <span className="font-medium text-foreground">Tech Stack:</span>{" "}
        {project.techStack.join(", ")}
      </div>
      <div className="flex justify-between text-sm font-medium px-1">
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
  ))}
</div>

    </section>
  );
};
