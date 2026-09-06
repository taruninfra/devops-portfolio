import { ScrollReveal } from "@/components/scroll-reveal";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import fs from "fs";
import path from "path";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
};

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match ? match[1] : "";
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  const metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(":");
    let value = valueArr.join(":").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); 
    if (key.trim()) {
      metadata[key.trim() as keyof Metadata] = value;
    }
  });

  return { metadata: metadata as Metadata, content };
}

function getBlogPosts() {
  const dir = path.join(process.cwd(), "content");
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx" || path.extname(file) === ".md");
  
  return files.map((file) => {
    const rawContent = fs.readFileSync(path.join(dir, file), "utf-8");
    const { metadata, content } = parseFrontmatter(rawContent);
    return { metadata, slug: path.basename(file, path.extname(file)), content };
  });
}

export const metadata = {
  title: "Blog",
  description: "Technical deep-dives into Cloud Architecture, DevOps, and Site Reliability.",
};

export default async function BlogPage() {
  const posts = getBlogPosts();

  return (
    <section className="space-y-12">
      <ScrollReveal delay={0.1}>
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-500 pb-2">
            Engineering Blog
          </h1>
          <p className="text-muted-foreground text-lg">
            Technical deep-dives into Cloud Architecture, DevOps, and Site Reliability.
          </p>
        </div>
      </ScrollReveal>
      
      <div className="flex flex-col gap-6 mt-12">
        {posts
          .sort((a, b) => {
            if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) return -1;
            return 1;
          })
          .map((post, id) => (
            <ScrollReveal key={post.slug} delay={0.1} yOffset={40}>
              <Link
                className="group flex flex-row items-center gap-6 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/50 relative overflow-hidden cursor-none"
                href={`/blog/${post.slug}`}
              >
                {/* Stylized Numbering */}
                <span className="text-4xl md:text-5xl font-bold text-muted-foreground/20 group-hover:text-primary/40 transition-colors duration-300 font-mono">
                  {String(id + 1).padStart(2, '0')}
                </span>
                
                <div className="flex w-full justify-between items-start gap-4 border-l border-border/50 pl-6">
                  <div className="space-y-2">
                    <h2 className="font-semibold text-foreground text-lg md:text-xl tracking-tight group-hover:text-primary transition-colors">
                      {post.metadata.title}
                    </h2>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
                      {post.metadata.summary}
                    </p>
                    <div className="pt-2">
                      <p className="text-xs text-neutral-500 font-mono">
                        {new Date(post.metadata.publishedAt).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-6 w-6 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0 mt-1" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
      </div>
    </section>
  );
}