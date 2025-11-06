import { Link } from "react-router-dom";

export const Resume = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-card p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Choose a resume</h1>
        <p className="text-sm text-muted-foreground mb-6">
          Select the resume that best fits the role you're hiring for. You can preview or download each PDF.
        </p>

        <div className="grid gap-4">
          {/* Frontend Developer Resume */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border border-muted rounded-md p-4">
            <div className="text-left">
              <h2 className="font-semibold">Frontend Developer Resume</h2>
              <p className="text-xs text-muted-foreground">PDF</p>
            </div>

            <div className="flex gap-2">
              <a
                href="/resumes/Harithaa_Srii_Frontend_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-transparent border border-primary text-primary hover:bg-primary hover:text-white transition text-sm"
                aria-label="Preview Frontend Developer resume in new tab"
              >
                Preview
              </a>

              <a
                href="/resumes/Harithaa_Srii_Frontend_Resume.pdf"
                download
                className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition text-sm"
                aria-label="Download Frontend Developer resume PDF"
              >
                Download
              </a>
            </div>
          </div>

          {/* Technical Writer Resume */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border border-muted rounded-md p-4">
            <div className="text-left">
              <h2 className="font-semibold">Technical Writer Resume</h2>
              <p className="text-xs text-muted-foreground">PDF</p>
            </div>

            <div className="flex gap-2">
              <a
                href="/resumes/Harithaa_Srii_Technical_Writer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-transparent border border-primary text-primary hover:bg-primary hover:text-white transition text-sm"
                aria-label="Preview Technical Writer resume in new tab"
              >
                Preview
              </a>

              <a
                href="/resumes/Harithaa_Srii_Technical_Writer_Resume.pdf"
                download
                className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition text-sm"
                aria-label="Download Technical Writer resume PDF"
              >
                Download
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Link to="/">
            <button className="text-sm px-4 py-2 rounded-md border border-muted text-muted-foreground hover:bg-muted/5">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resume;