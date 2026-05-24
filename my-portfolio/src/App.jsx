export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A responsive online store with cart functionality, product filtering, and secure checkout UI.",
      tech: ["React", "Tailwind CSS", "Firebase"],
    },
    {
      title: "Task Management App",
      description:
        "A productivity app for organizing tasks with drag-and-drop support and authentication.",
      tech: ["Next.js", "TypeScript", "MongoDB"],
    },
    {
      title: "Portfolio Landing Page",
      description:
        "A modern animated landing page optimized for performance and SEO.",
      tech: ["HTML", "CSS", "JavaScript"],
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Git & GitHub",
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-black/70">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold tracking-wide">DevPortfolio</h1>

          <nav className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="uppercase tracking-[0.3em] text-gray-400 text-sm mb-4">
            Web Developer
          </p>

          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Building Modern
            <span className="block text-gray-400">Digital Experiences</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-8">
            I design and develop responsive websites and modern web
            applications focused on performance and user experience.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a href="#projects">View Projects</a>
            <a href="#contact">Contact Me</a>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <div className="space-y-4">
            <p>Frontend — 95%</p>
            <p>Backend — 80%</p>
            <p>UI/UX — 85%</p>
            <p>SEO — 75%</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-20 max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold mb-6">About Me</h3>
        <p className="text-gray-300 mb-4">
          I am a passionate web developer focused on building modern, scalable
          websites.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 py-20 max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold mb-10">Skills</h3>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <span key={skill} className="px-4 py-2 bg-white/10 rounded-xl">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 py-20 max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold mb-10">Projects</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="bg-white/5 p-6 rounded-2xl">
              <h4 className="text-xl font-bold mb-2">{project.title}</h4>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-sm bg-white/10 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-20 max-w-3xl mx-auto">
        <h3 className="text-4xl font-bold mb-6">Contact</h3>
        <form className="space-y-4">
          <input className="w-full p-3 bg-black border border-white/20" placeholder="Name" />
          <input className="w-full p-3 bg-black border border-white/20" placeholder="Email" />
          <textarea className="w-full p-3 bg-black border border-white/20" placeholder="Message"></textarea>
          <button className="px-6 py-3 bg-white text-black rounded-xl">
            Send
          </button>
        </form>
      </section>

      <footer className="text-center py-10 text-gray-500">
        © 2026 DevPortfolio
      </footer>
    </div>
  );
}
