// src/Pages/WritingSamples.jsx
import { Link } from "react-router-dom";

export const WritingSamples = () => {
  const samples = [
    {
      title: "Homepage and Service Page Copy for a Digital Marketing Firm",
      description:
        "Developed comprehensive and SEO-friendly website content that highlights the services of a Coimbatore-based digital marketing agency , marketing strategies, and value-driven approach to digital success.",
      file: "/content-writing-samples/digital-marketing-company.pdf",
    },
    {
      title: "Website Content for an Industrial Spray Painting Service",
      description:
        "Crafted detailed website content that highlights the company’s industrial spray and powder coating services, technical expertise, and client-focused approach.",
      file: "/content-writing-samples/spray-painting-service.pdf",
    },
    {
      title: "Why Learning MEAN Stack is a Smart Move Before Placements",
      description:
        "An informative blog post that explains the MEAN stack’s architecture, advantages, and job potential, encouraging students to learn it before placements to boost their tech careers.",
      file: "/content-writing-samples/mean-stack-blog.pdf",
    },
    {
      title: "Website Content for an iOS App Development Course (EdTech)",
      description:
        "Developed compelling website content for an EdTech institute promoting their iOS development course. The content explains course highlights, curriculum, tools like Swift and XCode, career benefits, and placement assistance to attract aspiring app developers.",
      file: "/content-writing-samples/ios-app-development-course.pdf",
    },
    {
      title: "Website Content for SEO Services – Digital Marketing Agency",
      description:
        "Crafted engaging and SEO-focused website content for a digital marketing agency offering professional SEO services in India. The content explains the importance of organic traffic, on-page and off-page SEO, and highlights the agency’s unique approach to boosting visibility, leads, and conversions with personalized strategies.",
      file: "/content-writing-samples/SEO-Service-in-India.pdf",
    },
    {
      title: "Website Content for an SEO Service Provider",
      description:
        "Created in-depth website content for an SEO agency highlighting the significance of organic visibility, on-page and off-page optimization, Google ranking signals, and the long-term benefits of SEO. The content was crafted to educate potential clients and establish trust in the agency’s technical expertise and strategic approach.",
      file: "/content-writing-samples/SEO-Service-Provider.pdf",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Writing Samples</h1>

      <div className="max-w-4xl mx-auto space-y-8">
        {samples.map((sample, index) => (
          <div
            key={index}
            className="bg-card p-6 rounded-xl shadow-md border border-muted"
          >
            <h2 className="text-2xl font-semibold mb-2">{sample.title}</h2>
            <p className="text-muted-foreground mb-4">{sample.description}</p>
            <a
              href={sample.file}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:underline font-medium"
            >
              View Sample →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
