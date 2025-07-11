import htmlLogo from "/logos/html-5-svgrepo-com.svg";
import cssLogo from "/logos/css-svgrepo-com.svg";
import jsLogo from "/logos/javascript-svgrepo-com.svg";
import angularLogo from "/logos/angular-icon-logo-svgrepo-com.svg";
import bootstrapLogo from "/logos/bootstrap-svgrepo-com.svg";
import reactLogo from "/logos/react-svgrepo-com.svg";
import gitLogo from "/logos/git-svgrepo-com.svg";
import githubLogo from "/logos/github-svgrepo-com.svg";
import figmaLogo from "/logos/figma-svgrepo-com.svg";
import cppLogo from "/logos/cplusplus.svg";
import contentLogo from "/logos/documentation-svgrepo-com.svg";
import techLogo from "/logos/technical-support-service-2-svgrepo-com.svg";

const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML", level: "Intermediate", logo: htmlLogo },
      { name: "CSS", level: "Intermediate", logo: cssLogo },
      { name: "JavaScript", level: "Intermediate", logo: jsLogo },
      { name: "Bootstrap", level: "Intermediate", logo: bootstrapLogo },
      { name: "Angular", level: "Intermediate", logo: angularLogo },
      { name: "React", level: "Beginner", logo: reactLogo },
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
    category: "UI/UX Design",
    skills: [{ name: "Figma", level: "Beginner", logo: figmaLogo }],
  },
  {
    category: "Programming Languages",
    skills: [{ name: "C++", level: "Intermediate", logo: cppLogo }],
  },
  {
    category: "Writing & Documentation",
    skills: [
      { name: "Content Writing", level: "Beginner", logo: contentLogo },
      { name: "Technical Writing", level: "Beginner", logo: techLogo },
    ],
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
