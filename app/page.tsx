import Image from "next/image";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
];

const digitalSkills = [
  "WordPress",
  "Graphic Design",
  "Social Media",
  "Facebook Ads",
  "Copywriting",
  "Email Marketing",
];

const strengths = [
  "Customer Service",
  "Communication",
  "Problem Solving",
  "Teamwork",
  "Time Management",
  "Adaptability",
];

const courses = [
  "General Virtual Assistant Course",
  "Social Media Management Course",
  "Facebook Ads Course",
  "Amazon Arbitrage Course",
  "Graphic Design Course",
  "Basic WordPress Course",
  "Copywriting Course",
  "Email Marketing Course",
];

export default function Home() {
  return (
    <main id="home" className="min-h-screen bg-[#050505] text-white">

      {/* NAVBAR */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

          <a href="#home" className="text-lg font-black tracking-tight">
            KURT<span className="text-[#c7ff3d]">.DEV</span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-white/50 md:flex">
            <a href="#about" className="transition hover:text-[#c7ff3d]">
              About
            </a>
            <a href="#skills" className="transition hover:text-[#c7ff3d]">
              Skills
            </a>
            <a href="#experience" className="transition hover:text-[#c7ff3d]">
              Experience
            </a>
            <a href="#projects" className="transition hover:text-[#c7ff3d]">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-[#c7ff3d]">
              Contact
            </a>
          </div>

          <a
            href="/resume.pdf"
            download
            className="rounded-full border border-[#c7ff3d]/30 px-4 py-2 text-xs font-bold text-[#c7ff3d] transition hover:bg-[#c7ff3d] hover:text-black"
          >
            Download Resume
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-24 pt-36 lg:px-10 lg:pb-32 lg:pt-44">
        <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-[#c7ff3d]/10 blur-[140px]" />
        <div className="absolute bottom-[5%] right-[5%] h-80 w-80 rounded-full bg-[#c7ff3d]/5 blur-[140px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">

          <div>
            <div className="mb-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#c7ff3d]">
              <span className="h-2 w-2 rounded-full bg-[#c7ff3d] shadow-[0_0_15px_#c7ff3d]" />
              Available for opportunities
            </div>

            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-white/30">
              01 / Identity
            </p>

            <h1 className="max-w-5xl text-6xl font-black leading-[0.88] tracking-[-0.06em] sm:text-7xl lg:text-[8rem]">
              KURT
              <br />
              KEVIN
              <br />
              <span className="text-[#c7ff3d]">SAROCA.</span>
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-bold text-white/70">
                FRONT-END DEVELOPER
              </span>

              <span className="text-sm text-white/30">
                React · Next.js · TypeScript
              </span>
            </div>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/40 sm:text-lg">
              I build modern, responsive digital experiences and bring
              together web development, digital skills, customer service,
              and problem solving.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-[#c7ff3d] px-7 py-4 font-bold text-black transition duration-300 hover:scale-105"
              >
                Explore My Work →
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/10 px-7 py-4 font-bold text-white transition hover:border-[#c7ff3d]/40 hover:text-[#c7ff3d]"
              >
                Let&apos;s Talk
              </a>

              <a
                href="/resume.pdf"
                download
                className="rounded-full border border-[#c7ff3d]/30 px-7 py-4 font-bold text-[#c7ff3d] transition hover:bg-[#c7ff3d] hover:text-black"
              >
                Download Resume ↓
              </a>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 border-y border-white/10 py-5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                  Location
                </p>
                <p className="mt-2 text-sm font-bold">Dumaguete</p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                  Work
                </p>
                <p className="mt-2 text-sm font-bold">Remote / Onsite</p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                  Status
                </p>
                <p className="mt-2 text-sm font-bold text-[#c7ff3d]">
                  Available
                </p>
              </div>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-[2rem] bg-[#c7ff3d]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#111]">
                <Image
                  src="/kurt-hero.png"
                  alt="Kurt Kevin Saroca"
                  fill
                  priority
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="rounded-xl border border-white/10 bg-black/50 p-4 backdrop-blur-xl">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                        Developer Profile
                      </span>

                      <span className="flex items-center gap-2 text-[10px] text-[#c7ff3d]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#c7ff3d]" />
                        ONLINE
                      </span>
                    </div>

                    <p className="mt-3 text-sm font-bold">
                      Web Development / Digital Work
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-white/10 bg-[#0b0b0b] p-4 sm:block">
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                Coordinates
              </p>
              <p className="mt-1 text-xs font-bold text-[#c7ff3d]">
                DUMAGUETE / PH
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-white/10 px-6 py-28 lg:px-10 lg:py-36"
      >
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#c7ff3d]">
            02 / About
          </p>

          <div className="mt-8 grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">

            <div>
              <h2 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                I BUILD
                <br />
                DIGITAL
                <br />
                <span className="text-[#c7ff3d]">
                  EXPERIENCES.
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-white/40 sm:text-lg">
              <p>
                My background combines customer service, hospitality,
                digital training, and web development. I enjoy turning
                ideas into clean and practical digital experiences.
              </p>

              <p>
                I&apos;m focused on growing as a modern web developer while
                also bringing communication, problem solving, and
                customer-focused thinking into every project.
              </p>
            </div>
          </div>

          <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Web Development"],
              ["02", "Customer Service"],
              ["03", "Digital Skills"],
              ["04", "Problem Solving"],
            ].map(([number, title]) => (
              <div
                key={number}
                className="bg-[#080808] p-7 transition hover:bg-[#101010]"
              >
                <p className="text-xs font-bold text-[#c7ff3d]">
                  {number}
                </p>
                <p className="mt-10 text-lg font-bold">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="border-t border-white/10 px-6 py-28 lg:px-10 lg:py-36"
      >
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#c7ff3d]">
            03 / Skills
          </p>

          <div className="mt-6 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="text-5xl font-black tracking-[-0.04em] sm:text-6xl">
              WHAT I
              <br />
              <span className="text-[#c7ff3d]">WORK WITH.</span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-white/35">
              A practical combination of technical, digital, and
              people-focused skills.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-3">

            <div className="bg-[#080808] p-8">
              <p className="text-xs font-bold text-[#c7ff3d]">
                01 / FRONT-END
              </p>

              <div className="mt-8 space-y-4">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between border-b border-white/5 pb-3"
                  >
                    <span className="font-medium text-white/75">
                      {skill}
                    </span>
                    <span className="text-[#c7ff3d]">↗</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#080808] p-8">
              <p className="text-xs font-bold text-[#c7ff3d]">
                02 / DIGITAL
              </p>

              <div className="mt-8 space-y-4">
                {digitalSkills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between border-b border-white/5 pb-3"
                  >
                    <span className="font-medium text-white/75">
                      {skill}
                    </span>
                    <span className="text-[#c7ff3d]">↗</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#080808] p-8">
              <p className="text-xs font-bold text-[#c7ff3d]">
                03 / CORE STRENGTHS
              </p>

              <div className="mt-8 space-y-4">
                {strengths.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between border-b border-white/5 pb-3"
                  >
                    <span className="font-medium text-white/75">
                      {skill}
                    </span>
                    <span className="text-[#c7ff3d]">↗</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Web Development",
              "Responsive UI",
              "Digital Products",
              "AI Tools",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 px-4 py-2 text-xs font-bold text-white/50"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="border-t border-white/10 px-6 py-28 lg:px-10 lg:py-36"
      >
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#c7ff3d]">
            04 / Experience
          </p>

          <h2 className="mt-6 max-w-4xl text-5xl font-black leading-none tracking-[-0.04em] sm:text-6xl lg:text-8xl">
            EXPERIENCE
            <br />
            <span className="text-[#c7ff3d]">& TRAINING.</span>
          </h2>

          <div className="mt-16 space-y-5">

            <div className="grid gap-8 card-hover rounded-2xl border border-white/10 bg-white/[0.02] p-7 lg:grid-cols-[0.3fr_0.7fr] lg:p-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c7ff3d]">
                  Sep 2024 — Jan 2025
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-black">
                  Customer Service Representative
                </h3>

                <p className="mt-2 text-sm font-bold text-white/40">
                  WellCare
                </p>

                <ul className="mt-6 space-y-3 text-sm leading-7 text-white/45">
                  <li>• Provided customer support and claims assistance.</li>
                  <li>• Helped resolve customer concerns and problems.</li>
                  <li>• Documented customer interactions using CRM systems.</li>
                </ul>
              </div>
            </div>

            <div className="grid gap-8 card-hover rounded-2xl border border-white/10 bg-white/[0.02] p-7 lg:grid-cols-[0.3fr_0.7fr] lg:p-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c7ff3d]">
                  Sep 2024 — Dec 2024
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-black">
                  Barista
                </h3>

                <p className="mt-2 text-sm font-bold text-white/40">
                  Happy Cup — Katipunan, Quezon City
                </p>

                <ul className="mt-6 space-y-3 text-sm leading-7 text-white/45">
                  <li>• Prepared hot and cold beverages and customer orders.</li>
                  <li>• Provided customer service and maintained a welcoming environment.</li>
                  <li>• Operated POS and assisted with inventory.</li>
                  <li>• Maintained cleanliness and workplace safety.</li>
                </ul>
              </div>
            </div>

          </div>

          {/* EDUCATION */}
          <div className="mt-20 grid gap-12 lg:grid-cols-2">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c7ff3d]">
                05 / Education
              </p>

              <div className="mt-6 card-hover rounded-2xl border border-white/10 bg-white/[0.02] p-8">
                <p className="text-xs text-white/30">
                  2025 — 2026
                </p>

                <h3 className="mt-4 text-2xl font-black">
                  Senior High School Graduate
                </h3>

                <p className="mt-2 text-white/40">
                  St. John&apos;s Worth Montessori
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c7ff3d]">
                Training
              </p>

              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {courses.map((course) => (
                  <div
                    key={course}
                    className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-white/60"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

     {/* PROJECTS */}
<section
  id="projects"
  className="border-t border-white/10 px-6 py-28 lg:px-10 lg:py-36"
>
  <div className="mx-auto max-w-7xl">

    <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#c7ff3d]">
      06 / Projects
    </p>

    <h2 className="mt-6 text-5xl font-black tracking-[-0.04em] sm:text-6xl lg:text-8xl">
      SELECTED
      <br />
      <span className="text-[#c7ff3d]">WORK.</span>
    </h2>

    <div className="mt-16 space-y-8">

      {/* PROJECT 01 */}
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02]">
        <div className="grid lg:grid-cols-2">

          <div className="p-8 lg:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c7ff3d]">
              Project 01 / Web Development
            </p>

            <h3 className="mt-6 text-4xl font-black">
              CreatorHub AI
            </h3>

            <p className="mt-6 max-w-lg text-sm leading-7 text-white/40">
              An AI-focused digital product concept designed around
              creator content generation and modern web experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "AI",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="min-h-[350px] bg-[#0b0b0b] p-6">
            <div className="relative h-full min-h-[300px] overflow-hidden rounded-xl border border-white/10 bg-[#111]">
              <Image
                src="/creatorhub-ai.jpeg"
                alt="CreatorHub AI project screenshot"
                fill
                className="object-cover object-top transition duration-500 hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>

      {/* PROJECT 02 */}
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02]">
        <div className="grid lg:grid-cols-2">

          <div className="order-2 min-h-[350px] bg-[#0b0b0b] p-6 lg:order-1">
  <div className="relative h-full min-h-[300px] overflow-hidden rounded-xl border border-white/10 bg-[#111]">
    <Image
      src="/portfolio.jpeg"
      alt="Personal developer portfolio screenshot"
      fill
      className="object-cover object-top transition duration-500 hover:scale-105"
    />
  </div>
</div>
          <div className="order-1 p-8 lg:order-2 lg:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c7ff3d]">
              Project 02 / Portfolio
            </p>

            <h3 className="mt-6 text-4xl font-black">
              Personal Developer Portfolio
            </h3>

            <p className="mt-6 max-w-lg text-sm leading-7 text-white/40">
              A responsive personal website designed to present
              experience, skills, projects, and professional contact
              information.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Responsive Design",
                "UI Design",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative overflow-hidden border-t border-white/10 px-6 py-32 lg:px-10"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c7ff3d]/5 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr]">

            {/* LEFT */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#c7ff3d]">
                07 / Contact
              </p>

              <h2 className="mt-6 max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                LET&apos;S
                <br />
                BUILD
                <br />
                <span className="text-[#c7ff3d]">SOMETHING.</span>
              </h2>

              <p className="mt-8 max-w-xl text-base leading-8 text-white/40 sm:text-lg">
                Looking for a web developer, digital assistant, BPO
                professional, or someone who can bring a digital project
                to life? I&apos;d be happy to hear from you.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=kurtdev@gmail.com"
target="_blank"
rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-full bg-[#c7ff3d] px-7 py-4 font-bold text-black transition duration-300 hover:scale-105"
                >
                  Email Me
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href="tel:09762752415"
                  className="rounded-full border border-white/10 px-7 py-4 font-bold text-white transition hover:border-[#c7ff3d]/40 hover:text-[#c7ff3d]"
                >
                  Call Me
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center">
              <div className="w-full rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 shadow-[0_0_50px_rgba(199,255,61,0.04)] backdrop-blur-xl sm:p-9">

                <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-6">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#c7ff3d]">
                    Professional Contact
                  </p>

                  <div className="flex items-center gap-2 text-xs text-white/40">
                    <span className="h-2 w-2 rounded-full bg-[#c7ff3d] shadow-[0_0_12px_#c7ff3d]" />
                    Available
                  </div>
                </div>

                <div className="space-y-6">

                  <div>
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                      Name
                    </p>
                    <p className="text-lg font-bold">
                      Kurt Kevin Saroca
                    </p>
                  </div>

                  <div>
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                      Phone
                    </p>
                    <a
                      href="tel:09762752415"
                      className="text-lg font-bold transition hover:text-[#c7ff3d]"
                    >
                      0976 275 2415
                    </a>
                  </div>

                  <div>
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                      Email
                    </p>
                    <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=kurtdev@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="break-all text-lg font-bold transition hover:text-[#c7ff3d]"
>
  kurtdev@gmail.com
</a>
                  </div>

                  <div>
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                      Focus
                    </p>

                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full border border-[#c7ff3d]/20 bg-[#c7ff3d]/5 px-3 py-1.5 text-xs font-bold text-[#c7ff3d]">
                        Web Development
                      </span>

                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-bold text-white/60">
                        Digital Work
                      </span>

                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-bold text-white/60">
                        BPO
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                      Location
                    </p>

                    <p className="font-bold">
                      Dumaguete, Philippines
                    </p>
                  </div>

                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-sm leading-7 text-white/40">
                    Open to professional opportunities, freelance projects,
                    BPO roles, and digital collaborations.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-white/30 sm:flex-row">

          <p>
            © 2026 Kurt Kevin Saroca. All rights reserved.
          </p>

          <a
            href="#home"
            className="transition hover:text-[#c7ff3d]"
          >
            Back to top ↑
          </a>

        </div>
      </footer>

    </main>
  );
}