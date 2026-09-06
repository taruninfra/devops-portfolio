import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { ArrowUpRight, BookOpen, Code2, Mail } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-16 relative">
      <section id="hero">
        <div className="mx-auto w-full space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <ScrollReveal delay={0.1}>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-400 dark:from-white dark:to-neutral-500 pb-2">
                  {`Hi, I'm ${DATA.name.split(" ")[0]}`}
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl">
                  {DATA.description}
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.1} className="order-1 md:order-2">
              <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* MODERN IN-PAGE NAVIGATION BAR */}
      <ScrollReveal delay={0.3}>
        <div className="flex flex-wrap items-center gap-3 py-2">
          <Link href="/blog" className="group flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all duration-300 text-sm font-medium cursor-none">
            <BookOpen className="w-4 h-4" />
            Engineering Blog
          </Link>
          <Link href="#projects" className="group flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/40 text-secondary-foreground border border-border/50 hover:bg-secondary/80 hover:border-border transition-all duration-300 text-sm font-medium cursor-none">
            <Code2 className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            Projects
          </Link>
          <Link href="#contact" className="group flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/40 text-secondary-foreground border border-border/50 hover:bg-secondary/80 hover:border-border transition-all duration-300 text-sm font-medium cursor-none">
            <Mail className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            Contact
          </Link>
        </div>
      </ScrollReveal>
      {/* END NAVIGATION BAR */}

      <ScrollReveal>
        <section id="about">
          <div className="flex min-h-0 flex-col gap-y-4">
            <h2 className="text-2xl font-bold">About</h2>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-4">
            <h2 className="text-2xl font-bold">Core Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {DATA.skills.map((skill) => (
                <div key={skill.name} className="border bg-card border-border ring-1 ring-border/20 rounded-xl h-9 w-fit px-4 flex items-center gap-2 transition-colors hover:bg-muted/50">
                  {skill.icon && <skill.icon className="size-4 rounded overflow-hidden object-contain" />}
                  <span className="text-foreground text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-6">
            <h2 className="text-2xl font-bold">Work Experience</h2>
            <WorkSection />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section id="projects">
          <ProjectsSection />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-6">
            <h2 className="text-2xl font-bold">Education</h2>
            <div className="flex flex-col gap-8">
              {DATA.education.map((education) => (
                <Link
                  key={education.school}
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group cursor-none"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img src={education.logoUrl} alt={education.school} className="size-10 md:size-12 p-1 border bg-card rounded-full shadow ring-1 ring-border overflow-hidden object-contain flex-none" />
                    ) : (
                      <div className="size-10 md:size-12 p-1 border bg-muted rounded-full shadow ring-1 ring-border flex-none" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold text-lg leading-none flex items-center gap-2 group-hover:text-primary transition-colors">
                        {education.school}
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" aria-hidden />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">{education.degree}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm tabular-nums text-muted-foreground text-right flex-none font-mono">
                    <span>{education.start} {education.start && education.end ? "-" : ""} {education.end}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section id="hackathons">
          <HackathonsSection />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section id="contact">
          <ContactSection />
        </section>
      </ScrollReveal>
    </main>
  );
}