import Link from "next/link"
import { ArrowUp, Code2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import SocialLinks from "@/components/shared/SocialLinks/SocialLinks"

const footerLinks = {
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    { label: "Frontend Development", href: "#skills" },
    { label: "Backend Development", href: "#skills" },
    { label: "Full-Stack Development", href: "#skills" },
    { label: "API Development", href: "#skills" },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background">
      <div className="container mx-auto py-14">
        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="#home" className="group inline-flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                <Code2 size={19} />
              </span>

              <span className="text-2xl font-bold tracking-tight">
                Imran<span className="text-primary"> Hossain.</span>
              </span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
              Full-Stack Developer focused on building modern, scalable, and
              user-friendly web applications with clean code and thoughtful
              engineering.
            </p>

            {/* Socials */}
            <div className="mt-3.75">
              <SocialLinks />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Navigation
            </h3>

            <ul className="mt-5 space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">What I Do</h3>

            <ul className="mt-5 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-foreground/10" />

        {/* Bottom Footer */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Imran Hossain. All rights reserved.
          </p>

          <div className="flex items-center justify-between gap-5 sm:justify-end">
            <Link
              href="mailto:imranh.dev1@gmail.com"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              imranh.dev1@gmail.com
            </Link>

            <Button asChild variant="primary" className="rounded-full">
              <Link href="#home" aria-label="Back to top">
                <ArrowUp size={17} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
