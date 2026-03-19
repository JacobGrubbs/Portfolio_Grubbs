export default function JacobPortfolio() {
  const skills = [
    "Cybersecurity",
    "Information Technology Support",
    "Identity and Access Management",
    "Networking",
    "Python",
    "SQL",
    "Java",
    "Node.js",
    "Microsoft 365",
    "Technical Documentation",
  ];

  const coursework = [
    "Information Security Fundamentals",
    "Network Security",
    "Data Communications and Networking Principles",
    "Operating Systems Fundamentals",
    "Computer Crime, Forensics, and Auditing",
    "Cybersecurity of Data and Software",
  ];

  const projects = [
  {
    title: "Game Store Java Application",
    desc: "Developed a Java-based game store application using object-oriented programming principles. The program supports customer management, cart functionality, inventory interaction, and purchase workflows through a menu-driven system. This project strengthened my skills in Java programming, class structure, arrays, and user-focused design.",
    tools: "Java, Object-Oriented Programming, JOptionPane, Arrays",
    link: "https://github.com/JacobGrubbs/game-store-java",
  },
  {
    title: "E-Commerce SQL Database Project",
    desc: "Designed a relational SQL database for an e-commerce style system with linked tables for customers, products, orders, and order items. The project demonstrates database structure, key relationships, and organized data management for handling transactions and business records. This project strengthened my skills in SQL and relational database design.",
    tools: "SQL, Relational Databases, Primary Keys, Foreign Keys",
    link: "https://github.com/JacobGrubbs/sql-database-project",
  },
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Jacob Grubbs
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight">
              Information Technology & Cybersecurity Student
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              I am a George Mason University student majoring in Information
              Technology with a concentration in Cybersecurity. I am building my
              career around technology, security, and problem solving, with
              experience in security operations, access management, networking,
              and programming.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:jacobgrubbs3@gmail.com"
                className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm"
              >
                Contact Me
              </a>
              <a
                href="https://www.linkedin.com/in/jacob-grubbs-66367a301"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium"
              >
                LinkedIn
              </a>
              <a
                href="/Grubbs_Jacob_Resume.pdf"
                className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium"
              >
                Resume PDF
              </a>
              <a
                href="#projects"
                className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium"
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-lg">
              <h2 className="text-xl font-semibold">Quick Snapshot</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-slate-300">School</p>
                  <p className="mt-1 font-medium">George Mason University</p>
                </div>
                <div>
                  <p className="text-sm text-slate-300">Major</p>
                  <p className="mt-1 font-medium">Information Technology</p>
                </div>
                <div>
                  <p className="text-sm text-slate-300">Focus</p>
                  <p className="mt-1 font-medium">Cybersecurity</p>
                </div>
                <div>
                  <p className="text-sm text-slate-300">Location</p>
                  <p className="mt-1 font-medium">Haymarket, Virginia</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold">What I Bring</h3>
              <p className="mt-3 text-slate-600 leading-7">
                A strong foundation in Information Technology, a growing cyber
                skill set, and professional experience supporting secure
                operations in a fast-paced environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16" id="projects">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Experience Highlights
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Projects & Experience</h2>
          </div>
        </div>

<div className="mt-8 grid gap-6 md:grid-cols-2">
  {projects.map((project) => (
    <div
      key={project.title}
      className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
    >
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="mt-4 text-slate-600 leading-7">{project.desc}</p>
      <p className="mt-4 text-sm font-medium text-slate-500">
        Tools: {project.tools}
      </p>
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-block rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white"
      >
        View Project
      </a>
    </div>
  ))}
</div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-4 grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Skills
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">Technical Skills</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Coursework
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">Relevant Classes</h2>
          <ul className="mt-6 grid gap-3 text-slate-600">
            {coursework.map((course) => (
              <li key={course} className="rounded-2xl bg-slate-50 px-4 py-3">
                {course}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl bg-slate-900 px-8 py-10 text-white shadow-lg md:flex md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
              Contact
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Let’s Connect</h2>
            <p className="mt-4 max-w-2xl text-slate-300 leading-7">
              I am currently seeking internship and entry-level opportunities in
              Information Technology, cybersecurity, security operations, and
              technical support.
            </p>
          </div>
          <div className="mt-6 md:mt-0 space-y-2 text-sm md:text-right">
            <p>jacobgrubbs3@gmail.com</p>
            <p>540-907-0785</p>
            <p>Haymarket, Virginia</p>
            <a
              href="https://www.linkedin.com/in/jacob-grubbs-66367a301"
              target="_blank"
              rel="noreferrer"
              className="inline-block underline underline-offset-4"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}