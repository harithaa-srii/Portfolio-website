import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

export const Home = () => {
  return (
    <div className="h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-4 md:px-6 py-18 text-center" aria-label="Hero section">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 break-words">
          Hi, I’m Harithaa Srii
        </h1>

        {/* Typing Animation */}
        <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 h-8">
          <TypeAnimation
            sequence={["Angular Engineer", 2000, "TypeScript Specialist", 2000, "Full-Stack Minded", 2000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="inline-block"
          />
        </h2>

        <p className="max-w-3xl text-sm sm:text-base md:text-lg text-muted-foreground mb-8 px-4">
        Enterprise-trained Angular + TypeScript engineer. Strong Java foundation. Building scalable frontend systems, optimizing performance, and understanding the full product stack—from UI to backend architecture.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 flex-wrap justify-center">
          <Link to="/projects" aria-label="View my projects and portfolio work">
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background" aria-label="View My Work">
              View My Work
            </button>
          </Link>

          <Link to="/contact" aria-label="Get in touch with me">
            <button className="border border-primary text-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-white transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background" aria-label="Get in Touch">
              Get in Touch
            </button>
          </Link>
        </div>
      </section>

      {/* Tagline */}
      <section className="text-center px-4 sm:px-6">
        <p className="italic text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
         "Built at scale. Engineered for impact."
        </p>
      </section>
    </div>
  );
};
