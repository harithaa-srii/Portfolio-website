import {Hammer,Target,Brain,Compass,RefreshCcw,Search,Pin,} from "lucide-react";

export const DesignWork = () => {
  return (
    <section className="min-h-screen px-6 py-12 bg-background text-foreground">
      <h2 className="text-4xl font-bold text-center mb-4">Design Work</h2>
      <p className="text-center text-muted-foreground mb-12">
        A glimpse into my ongoing UI/UX case study.
      </p>

      <div className="max-w-3xl mx-auto bg-card p-8 rounded-xl shadow border border-muted">
        {/* Centered Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <Hammer className="text-yellow-600 w-5 h-5" />
            <span className="text-sm font-semibold text-yellow-600 bg-yellow-100 px-3 py-1 rounded">
              In Progress – Prototype Coming Soon
            </span>
          </div>

          <h3 className="text-2xl font-semibold mb-2">
            Case Study: One Click Away – A Socially-Driven Help Exchange
            Platform
          </h3>
          <p className="text-muted-foreground mb-6">
            <strong>Role:</strong> UI/UX Designer | <strong>Tools:</strong>{" "}
            Figma, Auto Layout, Components | <strong>Duration:</strong> June
            2025 (Ongoing) | <strong>Type:</strong> Self-Initiated Portfolio
            Project
          </p>
        </div>

        {/* Justified Content */}
        <div className="space-y-6 text-sm leading-relaxed text-foreground text-justify">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Brain className="w-4 h-4 text-purple-600" />
              <h4 className="font-semibold">Project Overview</h4>
            </div>
            <p>
              One Click Away is a mobile-first platform designed to bridge the
              gap between people who need help and those willing to offer it. It
              offers two main user paths — “I Need Help” and “I Want to Help” —
              designed for diverse roles like students, doctors, senior
              citizens, and creatives.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <Target className="w-4 h-4 text-blue-600" />
              <h4 className="font-semibold">The Problem</h4>
            </div>
            <p>
              Originally conceptualized during a 2021 workshop, this idea was
              revived to solve real-world issues around social isolation and
              accessibility. The platform aims to connect help seekers and
              providers, foster community support, and provide emotional relief.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <Target className="w-4 h-4 text-green-600" />
              <h4 className="font-semibold">Design Goals</h4>
            </div>
            <ul className="list-disc list-inside ml-4">
              <li>Simplicity in task flow and layout</li>
              <li>Clarity in navigation and CTAs</li>
              <li>Accessibility in spacing and contrast</li>
              <li>Emotion-driven user experience</li>
              <li>Mobile-first responsive UI</li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <Compass className="w-4 h-4 text-pink-600" />
              <h4 className="font-semibold">Process & Screens</h4>
            </div>
            <p>
              I started by mapping user journeys and directly designing screens
              in Figma. So far:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Welcome screen with user segmentation</li>
              <li>Signup form for help seekers (in progress)</li>
            </ul>
            <p className="mt-2">
              Next steps: login screen, dashboard, request flow, and profile.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <RefreshCcw className="w-4 h-4 text-orange-500" />
              <h4 className="font-semibold">Iterations & Learnings</h4>
            </div>
            <p>
              As a beginner, I overcame challenges like alignment and component
              reuse. Each iteration helped refine clarity, consistency, and
              user-centered design.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <Search className="w-4 h-4 text-cyan-600" />
              <h4 className="font-semibold">Key Insights</h4>
            </div>
            <ul className="list-disc list-inside ml-4">
              <li>Role-based entry points reduce confusion</li>
              <li>Clean layout builds user trust</li>
              <li>Components improve speed and consistency</li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <Pin className="w-4 h-4 text-red-500" />
              <h4 className="font-semibold">Outcome</h4>
            </div>
            <p>
              This case study is a personal milestone and a reflection of my
              growth in UX/UI design. I'm planning to launch this as an MVP
              after the prototype is finalized.
            </p>
          </div>

          <div className="text-right mt-6 text-sm italic text-muted-foreground">
            Prototype link will be added once the mockup is complete.
          </div>
        </div>
      </div>
    </section>
  );
};
