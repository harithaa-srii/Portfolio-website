import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

export const Home = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I’m Harithaa Srii
        </h1>

        {/* Typing Animation */}
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 h-8">
          <TypeAnimation
            sequence={["Frontend Developer", 2000, "UI/UX Designer", 2000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="inline-block"
          />
        </h2>

        <p className="max-w-3xl text-base md:text-lg text-muted-foreground mb-8">
          I’m a frontend developer with hands-on experience in building
          responsive web applications using HTML, CSS, JavaScript, and Angular.
          With a strong eye for detail and growing expertise in React and UI/UX
          design, I focus on creating interfaces that are both functional and
          user-centric. I bring a collaborative spirit, clear communication, and
          a design-aware mindset to every project I take on.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <Link to="/projects">
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition cursor-pointer">
              View Projects
            </button>
          </Link>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="border border-primary text-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-white transition cursor-pointer">
              Download Resume
            </button>
          </a>
          <Link to="/contact">
            <button className="border border-primary text-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-white transition cursor-pointer">
              Contact Me
            </button>
          </Link>
        </div>
      </section>

      {/* Optional Quote */}
      <section className="text-center py-12 px-6">
        <p className="italic text-xl text-muted-foreground max-w-2xl mx-auto">
          "I believe great UI is not just how it looks, but how effortlessly it
          works."
        </p>
      </section>
    </div>
  );
};
