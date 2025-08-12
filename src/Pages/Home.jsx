import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

export const Home = () => {
  return (
    <div className="h-screen bg-background text-foreground overflow-hidden">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-4 md:px-6 py-18 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 break-words">
          Hi, I’m Harithaa Srii
        </h1>

        {/* Typing Animation */}
        <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 h-8">
          <TypeAnimation
            sequence={["Frontend Developer", 2000, "UI/UX Designer", 2000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="inline-block"
          />
        </h2>

        <p className="max-w-3xl text-sm sm:text-base md:text-lg text-muted-foreground mb-8 px-4">
          I’m a frontend developer with hands-on experience in building responsive web applications using HTML, CSS, JavaScript, Angular, React and NextJS.
          With a strong eye for detail and growing expertise in React and UI/UX design, I focus on creating interfaces that are both functional and user-centric.
          I bring a collaborative spirit, clear communication, and a design-aware mindset to every project I take on.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 flex-wrap justify-center">
          <Link to="/projects">
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition">
              View Projects
            </button>
          </Link>
          <a href="/Harithaa_Srii_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="border border-primary text-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-white transition">
              Download Resume
            </button>
          </a>
          <Link to="/contact">
            <button className="border border-primary text-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-white transition">
              Contact Me
            </button>
          </Link>
        </div>
      </section>

      {/* Optional Quote */}
      <section className="text-center px-4 sm:px-6">
        <p className="italic text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          "I believe great UI is not just how it looks, but how effortlessly it works."
        </p>
      </section>
    </div>
  );
};
