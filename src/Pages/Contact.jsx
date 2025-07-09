import { Mail, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-background text-foreground">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Me</h1>
      <p className="text-center max-w-xl mx-auto mb-12 text-muted-foreground text-lg">
        Whether you have a question, want to collaborate, or just want to say hi— my inbox is always open.
      </p>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mb-12">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=harithaavasudevan@gmail.com&su=Let's Connect&body=Hi Harithaa,"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-600 transition"
          title="Send an Email"
        >
          <Mail className="w-10 h-15" />
        </a>

        <a
          href="https://github.com/harithaa-srii"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-600 transition"
          title="View on GitHub"
        >
          <Github className="w-10 h-15" />
        </a>
        <a
          href="https://www.linkedin.com/in/harithaa-srii-vasudevan-2010541b3/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-600 transition"
          title="Connect on LinkedIn"
        >
          <Linkedin className="w-10 h-15" />
        </a>
      </div>

      <form
        action="https://formspree.io/f/xjkrqppp"
        method="POST"
        className="max-w-xl mx-auto space-y-6 bg-card p-8 rounded-xl shadow border border-muted"
      >
        <div>
          <label className="block mb-2 font-medium">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-3 border border-muted rounded-md bg-background"
          />
        </div>
        <div>
          <label className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-3 border border-muted rounded-md bg-background"
          />
        </div>
        <div>
          <label className="block mb-2 font-medium">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full p-3 border border-muted rounded-md bg-background"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};
