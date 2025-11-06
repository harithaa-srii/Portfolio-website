
import React from "react";

export const About = () => {
  return (
    <section className="px-6 py-15 max-w-4xl mx-auto text-center md:text-left">
      <h2 className="text-4xl font-bold mb-6 text-foreground text-center">
        About Me
      </h2>

      <p className="text-lg text-muted-foreground leading-relaxed text-justify">
        I’m <span className="font-semibold text-foreground">Harithaa Srii</span>, a developer and communicator who thrives at the intersection of
        technology, design, and clear documentation. My experience spans building responsive, scalable web applications—using
        <span className="font-medium"> Angular, React, Next.js, Node.js, and MongoDB</span>—while keeping usability and UI/UX best practices at the forefront.
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed mt-4 text-justify">
        Alongside my technical work, I have a strong background in <span className="font-medium">content and technical writing</span>.
        From SEO-driven articles in college to detailed project documentation at MapleLabs, I ensure every solution is not only well-engineered but also thoroughly explained and user-friendly.
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed mt-4 text-justify">
        I hold a <span className="font-medium">Bachelor’s degree in Information Technology (2024)</span> and have worked as an
        <span className="font-medium"> Associate Software Engineer</span>, contributing to reusable frontend components, API integrations, and comprehensive handover documentation—bridging the gap between engineering and clear communication.
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed mt-4 text-justify">
        Currently, I’m advancing my skills through personal projects like an <span className="font-medium">AI-powered resume analyzer</span> and a
        <span className="font-medium"> portfolio generator</span>, focusing equally on development, UI/UX, and documentation. I’m actively seeking roles that value both my ability to build intuitive digital products and to produce documentation that empowers users and teams.
      </p>
    </section>
  );
};
