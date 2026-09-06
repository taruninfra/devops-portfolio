/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";
import { motion } from "framer-motion";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);
  if (!src || imageError) return <div className="w-full h-36 bg-muted/50" />;
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-36 object-contain p-4 bg-white dark:bg-white/5 transition-transform duration-700 group-hover:scale-110"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string; href?: string; description: string; dates: string; tags: readonly string[]; link?: string; image?: string; video?: string; links?: readonly { icon: React.ReactNode; type: string; href: string; }[]; className?: string;
}

export function ProjectCard({ title, href, description, dates, tags, link, image, video, links, className }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      layout
      onClick={() => setIsExpanded(!isExpanded)}
      className={cn("group relative flex flex-col h-full bg-card/40 backdrop-blur-xl border border-border/50 rounded-xl overflow-hidden transition-colors duration-500 ease-out hover:shadow-[0_0_30px_-15px_rgba(59,130,246,0.2)] hover:border-primary/40 cursor-none z-10", className)}
    >
      
      {/* Dynamic Inner Glow Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />

      {/* Compact Image Header */}
      <motion.div layout="position" className="relative shrink-0 overflow-hidden border-b border-border/30 z-10">
        <Link href={href || "#"} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="block cursor-none">
          {video ? (
            <video src={video} autoPlay loop muted playsInline className="w-full h-36 object-cover transition-transform duration-700 group-hover:scale-110" />
          ) : image ? (
            <ProjectImage src={image} alt={title} />
          ) : (
            <div className="w-full h-36 bg-muted/50" />
          )}
        </Link>
        {links && links.length > 0 && (
          <div className="absolute top-2 right-2 flex flex-wrap gap-1.5 z-20">
            {links.map((link, idx) => (
              <Link href={link.href} key={idx} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="cursor-none">
                <Badge className="flex items-center gap-1 text-[10px] bg-black/70 backdrop-blur-md text-white border-white/10 hover:bg-black transition-colors px-1.5 py-0" variant="default">
                  {link.icon} {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </motion.div>
      
      {/* Tightly Packed Content */}
      <div className="p-4 md:p-5 flex flex-col gap-3 flex-1 z-10">
        <motion.div layout="position" className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-base md:text-lg tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">{title}</h3>
            <time className="text-[10px] md:text-xs text-muted-foreground font-mono">{dates}</time>
          </div>
          <Link href={href || "#"} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-muted-foreground hover:text-primary transition-colors cursor-none bg-secondary/50 p-1.5 rounded-full group-hover:bg-primary/10 shrink-0" aria-label={`Open ${title}`}>
            <ArrowUpRight className="h-3.5 w-3.5 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
          </Link>
        </motion.div>
        
        {/* Expandable Description */}
        <motion.div layout="position" className={cn("text-xs md:text-sm flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert transition-all duration-300", isExpanded ? "" : "line-clamp-3")}>
          <Markdown>{description}</Markdown>
        </motion.div>

        {/* Read More / Show Less Toggle Indicator */}
        <motion.div layout="position" className="flex items-center gap-1 text-[11px] font-medium text-primary/70 group-hover:text-primary transition-colors mt-0.5">
          {isExpanded ? (
            <><ChevronUp className="w-3 h-3" /> Show less</>
          ) : (
            <><ChevronDown className="w-3 h-3" /> Read more</>
          )}
        </motion.div>
        
        {/* Tags */}
        {tags && tags.length > 0 && (
          <motion.div layout="position" className="flex flex-wrap gap-1.5 mt-auto pt-2">
            {tags.map((tag) => (
              <Badge key={tag} className="text-[9px] md:text-[10px] font-medium bg-secondary/60 text-secondary-foreground hover:bg-secondary border-none transition-colors px-2 py-0.5" variant="secondary">
                {tag}
              </Badge>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}