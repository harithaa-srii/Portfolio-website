import htmlLogo from "/logos/html-5-svgrepo-com.svg";
import cssLogo from "/logos/css-svgrepo-com.svg";
import jsLogo from "/logos/javascript-svgrepo-com.svg";
import angularLogo from "/logos/angular-icon-logo-svgrepo-com.svg";
import bootstrapLogo from "/logos/bootstrap-svgrepo-com.svg";
import reactLogo from "/logos/react-svgrepo-com.svg";
import gitLogo from "/logos/git-svgrepo-com.svg";
import githubLogo from "/logos/github-svgrepo-com.svg";
import figmaLogo from "/logos/figma-svgrepo-com.svg";
import typescriptLogo from "/logos/typescript.png";
import tailwindLogo from "/logos/tailwindcss.png";
import nextLogo from "/logos/nextjs.png";
import nodeLogo from "/logos/nodejs.png";
import expressLogo from "/logos/expressjs.jpg";
import mongodbLogo from "/logos/mongodb.png";
import javaLogo from "/logos/java.png";


const skillsData = [
  {
    category: "Frontend Core",
    skills: [
      { name: "HTML", level: "Intermediate", logo: htmlLogo },
      { name: "CSS", level: "Intermediate", logo: cssLogo },
      { name: "JavaScript", level: "Intermediate", logo: jsLogo },
      { name: "TypeScript", level: "Intermediate", logo: typescriptLogo },
      { name: "Angular", level: "Intermediate", logo: angularLogo },
      { name: "React", level: "Intermediate", logo: reactLogo },
    ],
  },
  {
    category: "Backend Foundations",
    skills: [
      { name: "Java", level: "Intermediate", logo: javaLogo },
      { name: "Express.js", level: "Beginner", logo: expressLogo },
      { name: "Node.js", level: "Beginner", logo: nodeLogo },
    ],
  },
  {
    category: "Styling & Frameworks",
    skills: [
      { name: "Tailwind CSS", level: "Intermediate", logo: tailwindLogo },
      { name: "Bootstrap", level: "Intermediate", logo: bootstrapLogo },
      { name: "Next.js", level: "Beginner", logo: nextLogo },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git", level: "Intermediate", logo: gitLogo },
      { name: "GitHub", level: "Intermediate", logo: githubLogo },
      { name: "Figma", level: "Beginner", logo: figmaLogo },
    ],
  },
];

export const Skills = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-background text-foreground">
      <h1 className="text-4xl font-bold text-center mb-3">Skills</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Enterprise-trained Angular engineer with strong Java foundations. Building scalable frontend systems and expanding full-stack knowledge.
      </p>

      <section aria-label="Skills breakdown by category">
        {skillsData.map((section) => {
          const isSingle = section.skills.length === 1;
          const isDouble = section.skills.length === 2;

          return (
            <div key={section.category} className="mb-10">
              <h2 className="text-2xl font-semibold mb-6 text-center">
                {section.category}
              </h2>

              <div className="w-full flex justify-center">
                <div
                  className={`grid gap-y-6 ${
                    isSingle
                      ? "grid-cols-1"
                      : isDouble
                      ? "grid-cols-1 sm:grid-cols-2 gap-x-6"
                      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6"
                  }`}
                >
                  {section.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="bg-card w-80 p-5 rounded-xl shadow-md flex flex-col items-center text-center border border-muted hover:shadow-lg transition"
                    >
                      <img
                        src={skill.logo}
                        alt={`${skill.name} skill badge`}
                        className="w-12 h-12 mb-4"
                      />
                      <h3 className="font-semibold text-lg mb-1">{skill.name}</h3>
                      <span
                        className={`text-xs px-3 py-1 rounded-full mb-1 ${
                          skill.level === "Intermediate"
                            ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200"
                            : skill.level === "Beginner"
                            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200"
                            : "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};
