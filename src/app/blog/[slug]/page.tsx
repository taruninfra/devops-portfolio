import { ScrollReveal } from "@/components/scroll-reveal";
import fs from "fs";
import path from "path";
import Markdown from "react-markdown";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

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

function getPost(slug: string) {
  const mdxPath = path.join(process.cwd(), "content", `${slug}.mdx`);
  const mdPath = path.join(process.cwd(), "content", `${slug}.md`);
  
  let filePath = "";
  if (fs.existsSync(mdxPath)) filePath = mdxPath;
  else if (fs.existsSync(mdPath)) filePath = mdPath;
  else return null;

  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

// Function to fetch all posts for the Next/Prev navigation
function getAllPosts() {
  const dir = path.join(process.cwd(), "content");
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx" || path.extname(file) === ".md");
  
  return files.map((file) => {
    const rawContent = fs.readFileSync(path.join(dir, file), "utf-8");
    const { metadata } = parseFrontmatter(rawContent);
    return { metadata, slug: path.basename(file, path.extname(file)) };
  }).sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime());
}

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "content");
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir);
  return files.map((file) => ({
    slug: file.replace(/\.mdx?$/, ""),
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  // Get all posts and find adjacent ones for navigation
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  
  // Sorted newest to oldest, so nextPost (newer) is index - 1, prevPost (older) is index + 1
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <article className="flex flex-col gap-8 pb-24 w-full">
      <ScrollReveal delay={0.1}>
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-none mb-4 bg-card/40 px-4 py-2 rounded-full border border-border/50 hover:bg-card/80"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </ScrollReveal>

      <div className="space-y-4">
        <ScrollReveal delay={0.2} yOffset={20}>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
            {post.metadata.title}
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.3} yOffset={20}>
          <div className="flex items-center gap-4 border-b border-border/50 pb-8 mt-4">
            <p className="text-sm font-mono text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full border border-border/50">
              {new Date(post.metadata.publishedAt).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </p>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.4} yOffset={30}>
        <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary prose-a:cursor-none hover:prose-a:text-primary/80 prose-img:rounded-2xl prose-img:border prose-img:border-border/50 prose-img:shadow-lg prose-pre:bg-card/50 prose-pre:border prose-pre:border-border/50 prose-pre:backdrop-blur-md">
          <Markdown>
            {post.content}
          </Markdown>
        </div>
      </ScrollReveal>

      {/* MODERN NEXT / PREVIOUS NAVIGATION */}
      <ScrollReveal delay={0.2} yOffset={30}>
        <div className="flex flex-col sm:flex-row items-stretch justify-between gap-4 border-t border-border/50 pt-10 mt-10">
          
          {/* Older Post (Previous) */}
          {prevPost ? (
            <Link 
              href={`/blog/${prevPost.slug}`} 
              className="group flex flex-col gap-2 text-left w-full sm:w-1/2 p-6 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm hover:bg-card hover:border-primary/50 transition-all duration-300 cursor-none"
            >
              <span className="text-xs font-mono text-muted-foreground flex items-center gap-1 group-hover:text-foreground transition-colors">
                <ChevronLeft className="w-4 h-4" /> 
                Older Post
              </span>
              <span className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {prevPost.metadata.title}
              </span>
            </Link>
          ) : (
            <div className="w-full sm:w-1/2"></div>
          )}

          {/* Newer Post (Next) */}
          {nextPost ? (
            <Link 
              href={`/blog/${nextPost.slug}`} 
              className="group flex flex-col gap-2 text-right items-end w-full sm:w-1/2 p-6 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm hover:bg-card hover:border-primary/50 transition-all duration-300 cursor-none"
            >
              <span className="text-xs font-mono text-muted-foreground flex items-center gap-1 group-hover:text-foreground transition-colors">
                Newer Post 
                <ChevronRight className="w-4 h-4" />
              </span>
              <span className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {nextPost.metadata.title}
              </span>
            </Link>
          ) : (
            <div className="w-full sm:w-1/2"></div>
          )}

        </div>
      </ScrollReveal>
    </article>
  );
}