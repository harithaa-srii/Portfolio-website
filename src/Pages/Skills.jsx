import htmlLogo from "/logos/html-5-svgrepo-com.svg";
import cssLogo from "/logos/css-svgrepo-com.svg";
import jsLogo from "/logos/javascript-svgrepo-com.svg";
import angularLogo from "/logos/angular-icon-logo-svgrepo-com.svg";
import bootstrapLogo from "/logos/bootstrap-svgrepo-com.svg";
import reactLogo from "/logos/react-svgrepo-com.svg";
import gitLogo from "/logos/git-svgrepo-com.svg";
import githubLogo from "/logos/github-svgrepo-com.svg";
import figmaLogo from "/logos/figma-svgrepo-com.svg";
import javaLogo from "/logos/java.png";
import contentLogo from "/logos/documentation-svgrepo-com.svg";
import techLogo from "/logos/technical-support-service-2-svgrepo-com.svg";
import nextLogo from "/logos/nextjs.png";
import nodeLogo from "/logos/nodejs.png";
import expressLogo from "/logos/expressjs.jpg";
import mongodbLogo from "/logos/mongodb.png";
import typescriptLogo from "/logos/typescript.png";
import tailwindLogo from "/logos/tailwindcss.png";
import markdownLogo from "/logos/markdown.png";
import ditaLogo from "/logos/ditaxml.png";
import dockerLogo from "/logos/docker.png";
import awsec2Logo from "/logos/awsec2.png";
import awsS3Logo from "/logos/awss3.png";


const skillsData = [
  {
    category: "Web Development",
    skills: [
      { name: "HTML", level: "Intermediate", logo: htmlLogo },
      { name: "CSS", level: "Intermediate", logo: cssLogo },
      { name: "JavaScript", level: "Intermediate", logo: jsLogo },
      { name: "TypeScript", level: "Intermediate", logo: typescriptLogo },
      { name: "Bootstrap", level: "Intermediate", logo: bootstrapLogo },
      { name: "Tailwind CSS", level: "Intermediate", logo: tailwindLogo },
      { name: "Angular", level: "Intermediate", logo: angularLogo },
      { name: "React", level: "Intermediate", logo: reactLogo },
      {name: "NextJS", level: "Beginner", logo: nextLogo},
      {name: "NodeJS",level:"Beginner",logo:nodeLogo},
      {name: "ExpressJS", level:"Beginner", logo:expressLogo},
      {name: "MongoDB", level:"Beginner", logo:mongodbLogo},

    ],
  },
  {
    category: "Version Control",
    skills: [
      { name: "Git", level: "Intermediate", logo: gitLogo },
      { name: "GitHub", level: "Intermediate", logo: githubLogo },
    ],
  },
   {
    category: "Writing & Documentation",
    skills: [
      { name: "Content Writing", level: "Beginner", logo: contentLogo },
      { name: "Technical Writing", level: "Beginner", logo: techLogo },
      { name: "Markdown", level: "Intermediate", logo: markdownLogo },
      { name: "DITA XML", level: "Beginner", logo: ditaLogo },
    ],
  },
  {
    category: "Programming Languages",
    skills: [{ name: "Java", level: "Intermediate", logo: javaLogo }],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "Docker", level: "Beginner", logo: dockerLogo },
      { name: "AWS EC2", level: "Beginner", logo: awsec2Logo },
      { name: "AWS S3", level: "Beginner", logo: awsS3Logo },
    ],
  },
  {
    category: "UI/UX Design",
    skills: [{ name: "Figma", level: "Beginner", logo: figmaLogo }],
  },
 
];

export const Skills = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-background text-foreground">
      <h1 className="text-4xl font-bold text-center mb-12">Skills</h1>

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
                    className="bg-card w-80 p-5 rounded-xl shadow-md flex flex-col items-center text-center border border-muted"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-12 h-12 mb-4"
                    />
                    <h3 className="font-semibold text-lg mb-1">{skill.name}</h3>
                    <span
                      className={`text-xs px-3 py-1 rounded-full mb-1 ${
                        skill.level === "Intermediate"
                          ? "bg-green-100 text-green-700"
                          : skill.level === "Beginner"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
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
    </div>
  );
};
