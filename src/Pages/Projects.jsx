export const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio built using React and Tailwind CSS. Includes dynamic routing, contact form with Formspree, and a clean modern UI.",
      techStack: ["React", "Tailwind CSS", "JavaScript"],
      image: "/thumbnails/portfolio-website.jpg",
      liveLink: "https://harithaa-portfolio.vercel.app/",
      sourceCode: "https://github.com/harithaa-srii/Portfolio-website",
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
    <section className="min-h-screen px-6 py-12 bg-background text-foreground">
      <h2 className="text-4xl font-bold text-center mb-4">Projects</h2>
      <p className="text-center text-muted-foreground text-lg mb-10">
        Showcasing the work I’ve done so far.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
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
            <p className="text-sm text-muted-foreground text-center mb-4">
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
                <span className="text-muted-foreground italic">Live Demo – Coming Soon</span>
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
