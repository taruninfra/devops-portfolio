/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);
  if (!src || imageError) return <div className="w-full h-52 bg-muted/50" />;
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-52 object-contain p-8 bg-white dark:bg-white/5 transition-transform duration-700 group-hover:scale-110"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string; href?: string; description: string; dates: string; tags: readonly string[]; link?: string; image?: string; video?: string; links?: readonly { icon: React.ReactNode; type: string; href: string; }[]; className?: string;
}

export function ProjectCard({ title, href, description, dates, tags, link, image, video, links, className }: Props) {
  return (
    <div className={cn("group relative flex flex-col h-full bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:shadow-[0_0_40px_-15px_rgba(59,130,246,0.2)] hover:-translate-y-2 hover:border-primary/40 cursor-none z-10", className)}>
      
      {/* Dynamic Inner Glow Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />

      <div className="relative shrink-0 overflow-hidden border-b border-border/30 z-10">
        <Link href={href || "#"} target="_blank" rel="noopener noreferrer" className="block cursor-none">
          {video ? (
            <video src={video} autoPlay loop muted playsInline className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110" />
          ) : image ? (
            <ProjectImage src={image} alt={title} />
          ) : (
            <div className="w-full h-52 bg-muted/50" />
          )}
        </Link>
        {links && links.length > 0 && (
          <div className="absolute top-3 right-3 flex flex-wrap gap-2 z-20">
            {links.map((link, idx) => (
              <Link href={link.href} key={idx} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="cursor-none">
                <Badge className="flex items-center gap-1.5 text-xs bg-black/70 backdrop-blur-md text-white border-white/10 hover:bg-black transition-colors" variant="default">
                  {link.icon} {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
      
      <div className="p-6 md:p-8 flex flex-col gap-4 flex-1 z-10">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1.5">
            <h3 className="font-bold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">{title}</h3>
            <time className="text-xs text-muted-foreground font-mono">{dates}</time>
          </div>
          <Link href={href || "#"} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors cursor-none bg-secondary/50 p-2 rounded-full group-hover:bg-primary/10" aria-label={`Open ${title}`}>
            <ArrowUpRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
          </Link>
        </div>
        <div className="text-sm flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto pt-6">
            {tags.map((tag) => (
              <Badge key={tag} className="text-[11px] font-medium bg-secondary/60 text-secondary-foreground hover:bg-secondary border-none transition-colors px-2.5 py-1" variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}