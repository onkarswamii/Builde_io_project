import { Mail, Github, Linkedin, ExternalLink, Code2, Lightbulb, Users, Award } from "lucide-react";

export default function Index() {
  // Sample data - customize these for your portfolio
  const name = "Onkar Swami";
  const title = "Full Stack Developer & UI Designer";
  const location = "Pune, Maharashtra";
  const email = "Onkar@example.com";

  const about = `I'm a first-year computer science student with a passion for creating beautiful, functional digital experiences. I combine design thinking with modern development practices to build web applications that users love.`;

  const technicalSkills = ["Python", "Golang", "Html", "CSS", "Javascript", "Git"];
  const softSkills = ["Problem Solving", "Communication", "Team Collaboration", "Adaptability"];

  const education = [
    {
      school: "University Name",
      degree: "B.Tech in CSE AL & ML",
      year: "2024 - 2028",
      details: "GPA: 3.8/4.0 | Dean's List",
    },
    {
      school: "High School Name",
      degree: "High School Diploma",
      year: "2020 - 2024",
      details: "Advanced Placement Courses, Honors Graduate",
    },
  ];

  const projects = [
    {
      title: "Task Management App",
      description: "A collaborative task manager built with React and Node.js. Features real-time updates and team workspace management.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects and skills. Built with modern web standards and responsive design.",
      tech: ["React", "Tailwind CSS", "Vite"],
      link: "#",
    },
    {
      title: "Weather App",
      description: "Real-time weather application with location-based forecasting. Includes interactive maps and detailed weather insights.",
      tech: ["React", "API Integration", "Tailwind CSS"],
      link: "#",
    },
  ];

  const socialLinks = [
    { icon: Github, url: "#", label: "GitHub" },
    { icon: Linkedin, url: "#", label: "LinkedIn" },
    { icon: Mail, url: "mailto:alex@example.com", label: "Email" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="section-container py-4 flex items-center justify-between">
          <div className="text-2xl font-bold accent-gradient">{name.split(" ")[0]}</div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="button-ghost text-sm">
              About
            </a>
            <a href="#skills" className="button-ghost text-sm">
              Skills
            </a>
            <a href="#projects" className="button-ghost text-sm">
              Projects
            </a>
            <a href="#contact" className="button-ghost text-sm">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="section-container py-20 md:py-32 flex flex-col justify-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm font-medium w-fit">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            Currently available for opportunities
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm <span className="accent-gradient">{name}</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-medium">{title}</p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">{about}</p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#contact" className="button-primary">
              Get In Touch
            </a>
            <a href="#projects" className="button-secondary">
              View My Work
            </a>
          </div>

          {/* Quick Info */}
          <div className="pt-12 flex flex-wrap gap-6 text-sm text-muted-foreground border-t border-border mt-8 pt-8">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">📍</span>
              {location}
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">✉️</span>
              <a href={`mailto:${email}`} className="hover:text-primary transition-colors">
                {email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-container py-20 md:py-32 border-t border-border">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                As a first-year student, I'm building a foundation in computer science while exploring my passion for web development and design. I believe in learning by doing and creating real projects that solve problems.
              </p>
              <p>
                When I'm not coding, you'll find me exploring design trends, contributing to open source projects, or brainstorming ideas for my next project. I'm always eager to learn new technologies and best practices.
              </p>
              <p>
                I'm particularly interested in building user-friendly applications that bridge the gap between beautiful design and robust functionality.
              </p>
            </div>
          </div>

          {/* Skills Overview Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="card-base">
              <Code2 className="w-8 h-8 text-accent mb-3" />
              <h4 className="font-semibold mb-2">Development</h4>
              <p className="text-sm text-muted-foreground">Building scalable web applications with modern frameworks</p>
            </div>
            <div className="card-base">
              <Lightbulb className="w-8 h-8 text-accent mb-3" />
              <h4 className="font-semibold mb-2">Design</h4>
              <p className="text-sm text-muted-foreground">Creating intuitive, beautiful user experiences</p>
            </div>
            <div className="card-base">
              <Users className="w-8 h-8 text-accent mb-3" />
              <h4 className="font-semibold mb-2">Collaboration</h4>
              <p className="text-sm text-muted-foreground">Working effectively in team environments</p>
            </div>
            <div className="card-base">
              <Award className="w-8 h-8 text-accent mb-3" />
              <h4 className="font-semibold mb-2">Learning</h4>
              <p className="text-sm text-muted-foreground">Continuously growing and improving my skills</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-container py-20 md:py-32 border-t border-border">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Skills</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-accent">💻</span> Technical Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-lg bg-secondary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-accent">🌟</span> Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-lg bg-secondary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Proficiency Details */}
        <div className="mt-12 space-y-6">
          <h3 className="text-2xl font-bold mb-6">Proficiency</h3>

          <div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold">Frontend Development</span>
              <span className="text-sm text-muted-foreground">Advanced</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div className="bg-accent h-2 rounded-full" style={{ width: "85%" }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold">Backend Development</span>
              <span className="text-sm text-muted-foreground">Intermediate</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div className="bg-accent h-2 rounded-full" style={{ width: "70%" }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold">UI/UX Design</span>
              <span className="text-sm text-muted-foreground">Intermediate</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div className="bg-accent h-2 rounded-full" style={{ width: "75%" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-container py-20 md:py-32 border-t border-border">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Education</h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="card-base border-l-4 border-accent">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{edu.degree}</h3>
                  <p className="text-lg text-muted-foreground">{edu.school}</p>
                </div>
                <span className="text-lg font-semibold text-accent mt-2 md:mt-0">{edu.year}</span>
              </div>
              <p className="text-muted-foreground">{edu.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-container py-20 md:py-32 border-t border-border">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="card-base flex flex-col h-full group">
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-muted-foreground flex-grow mb-4">{project.description}</p>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-md bg-secondary text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container py-20 md:py-32 border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-12">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>

          {/* Contact Methods */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a href={`mailto:${email}`} className="button-primary">
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </a>
            <a href="#" className="button-secondary">
              Schedule a Chat
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  className="p-3 rounded-lg bg-secondary text-primary hover:bg-accent hover:text-accent-foreground transition-all transform hover:scale-110"
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="mt-16 card-base max-w-lg mx-auto">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-left font-semibold mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label className="block text-left font-semibold mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label className="block text-left font-semibold mb-2">Message</label>
                <textarea
                  placeholder="Your message..."
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                ></textarea>
              </div>
              <button type="submit" className="button-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-container py-12 border-t border-border text-center text-muted-foreground">
        <p>
          © 2024 {name}. Designed and built with <span className="text-accent">❤️</span>
        </p>
        <p className="text-sm mt-2">Built with React, Tailwind CSS & Vite</p>
      </footer>
    </div>
  );
}
