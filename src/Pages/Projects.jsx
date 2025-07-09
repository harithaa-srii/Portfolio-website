export const Projects = () => {
  return (
    <section className="min-h-screen px-6 py-12 bg-background text-foreground">
      <h2 className="text-4xl font-bold text-center mb-4">Projects</h2>
      <p className="text-center text-muted-foreground mb-12">
        Showcasing the work I’ve done so far.
      </p>

      <div className="flex justify-center">
        <div className="max-w-sm bg-card rounded-xl shadow-md border border-muted p-6 transition hover:shadow-lg">
          <img
            src="../src/assets/thumbnails/portfolio-website.jpg"
            alt="Portfolio Website"
            className="w-full h-60 object-contain rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
          <p className="text-sm text-muted-foreground mb-4">
            A responsive personal portfolio built using React and Tailwind CSS.
            Includes dynamic routing, contact form with Formspree, and a clean
            modern UI.
          </p>
          <div className="flex gap-4 text-sm font-medium">
            <a
              href="https://your-live-demo-link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:underline"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/harithaa-srii/your-repo"
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
