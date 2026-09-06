import { DATA } from "@/data/resume";
import { ProjectCard } from "@/components/project-card";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function ProjectsSection() {
  return (
    <div className="flex flex-col gap-y-12 w-full">
      <div className="space-y-4 w-full text-center">
        <ScrollReveal>
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm font-medium">
            My Projects
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Check out my latest work
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[600px] mx-auto">
            I've built infrastructure and automated pipelines that drive real business value. Here are some of my key deployments.
          </p>
        </ScrollReveal>
      </div>
      
      {/* Updated to a single column (grid-cols-1) so horizontal cards have room to stretch */}
      <div className="grid grid-cols-1 gap-8 w-full">
        {DATA.projects.map((project, id) => (
          <ScrollReveal key={project.title} delay={0.1} yOffset={40} className="w-full">
            <ProjectCard
              href={project.href}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              video={project.video}
              links={project.links}
            />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}