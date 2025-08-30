import React from "react";

export const About = () => {
  return (
    <section className="px-6 py-15 max-w-4xl mx-auto text-center md:text-left">
      <h2 className="text-4xl font-bold mb-6 text-foreground text-center">
        About Me
      </h2>

      <p className="text-lg text-muted-foreground leading-relaxed text-justify">
        I’m <span className="font-semibold text-foreground">Harithaa Srii</span>, a{" "}
        <span className="font-semibold">Web Developer</span> with nearly a year of
        professional experience in the IT industry. I enjoy building{" "}
        <span className="font-medium">responsive, scalable, and user-friendly web applications</span>{" "}
        using modern technologies. My journey began with{" "}
        <span className="font-medium">Angular and TypeScript</span>, and has expanded
        into <span className="font-medium">React, Next.js, Node.js, and MongoDB</span>,
        along with a growing passion for <span className="font-medium">UI/UX design</span>.
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed mt-4 text-justify">
        I hold a{" "}
        <span className="font-medium">
          Bachelor’s degree in Information Technology (2024)
        </span>{" "}
        and worked as an{" "}
        <span className="font-medium">
          Associate Software Engineer at MapleLabs (a unit of Xoriant Corporation)
        </span>. During this time, I contributed to building reusable frontend components,
        integrating APIs, and creating detailed handover documentation to support
        maintainability.
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed mt-4 text-justify">
        Beyond development, I’ve also explored{" "}
        <span className="font-medium">content writing</span>, creating SEO-friendly
        content during my college days. These experiences sharpened my{" "}
        <span className="font-medium">communication and documentation skills</span>,
        which I bring into my work as a developer.
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed mt-4 text-justify">
        I’m currently upskilling in{" "}
        <span className="font-medium">React, Next.js, Node.js, and MongoDB</span>{" "}
        through personal projects like an AI-powered resume analyzer and a portfolio
        generator. I’m seeking opportunities in{" "}
        <span className="font-semibold">Frontend Development</span> or hybrid roles
        blending <span className="font-semibold">Frontend and Backend</span>, where I
        can contribute to building intuitive, meaningful digital experiences.
      </p>
    </section>
  );
};
