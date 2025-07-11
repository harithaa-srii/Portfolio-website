export const Projects = () => {
  return (
    <section className="min-h-screen px-6 py-12 bg-background text-foreground">
      <h2 className="text-4xl font-bold text-center mb-4">Projects</h2>
      <p className="text-center text-muted-foreground text-lg mb-10">
        Showcasing the work I’ve done so far.
      </p>

      <div className="flex justify-center">
        <div className="max-w-md w-full bg-card rounded-xl shadow-md border border-muted p-6 transition hover:shadow-lg">
          <img
            src="/thumbnails/portfolio-website.jpg"
            alt="Portfolio Website"
            className="w-full h-64 object-cover rounded-md mb-6"
          />
          <h3 className="text-xl font-semibold text-center mb-3">Portfolio Website</h3>
          <p className="text-sm text-muted-foreground text-center mb-6">
            A responsive personal portfolio built using React and Tailwind CSS.
            Includes dynamic routing, contact form with Formspree, and a clean
            modern UI.
          </p>
          <div className="flex justify-between text-sm font-medium px-1">
            <a
              href="https://your-live-demo-link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:underline"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/harithaa-srii/Portfolio-website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:underline"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
