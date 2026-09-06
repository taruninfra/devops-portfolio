"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function ContactSection() {
  return (
    <div className="space-y-12 w-full py-12">
      <BlurFade delay={BLUR_FADE_DELAY * 16}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm font-semibold">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Want to chat about cloud architecture, infrastructure scaling, or DevOps? Just shoot me a direct message on{" "}
              <Link
                href={DATA.contact.social.LinkedIn.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline underline-offset-4 font-medium transition-colors"
              >
                LinkedIn
              </Link>{" "}
              or email me directly at{" "}
              <Link
                href={DATA.contact.social.email.url}
                className="text-blue-500 hover:underline underline-offset-4 font-medium transition-colors"
              >
                tarun.tech.it@gmail.com
              </Link>
              . I respond to all technical inquiries.
            </p>
          </div>
        </div>
      </BlurFade>
    </div>
  );
}