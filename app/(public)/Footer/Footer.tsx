import Link from "next/link";
import {
    Mail,
    ArrowUp,
    Code2,
} from "lucide-react";

import { FaFacebook, FaGithub } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { BsTwitter } from "react-icons/bs";
import { Button } from "@/components/ui/button";

const footerLinks = {
    navigation: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Experience", href: "#experience" },
        { label: "Contact", href: "#contact" },
    ],
    services: [
        { label: "Frontend Development", href: "#services" },
        { label: "Backend Development", href: "#services" },
        { label: "Full-Stack Development", href: "#services" },
        { label: "API Development", href: "#services" },
    ],
};

const socialLinks = [
    {
        label: "GitHub",
        href: "https://github.com/imranh-dev1",
        icon: FaGithub,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/imranh-dev1/",
        icon: LiaLinkedin,
    },
    {
        label: "Email",
        href: "mailto:imranme.global@gmail.com",
        icon: Mail,
    },
];

const SOCIAL_ICON_CLASS =
    "inline-flex h-10 w-10 items-center justify-center rounded-full " +
    "text-[#13bbff] " +
    "mr-[17px] " +
    "cursor-pointer " +
    "backdrop-brightness-[88%] " +
    "shadow-[0_0_20px_transparent] " +
    "transition-all duration-500 ease-in-out " +
    "hover:scale-110 " +
    "hover:shadow-[0_0_20px_#13bbff]";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background">
            <div className="mx-auto container py-14 ">
                {/* Main Footer */}
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link
                            href="#home"
                            className="group inline-flex items-center gap-2"
                        >
                            <span className="flex size-9 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                                <Code2 size={19} />
                            </span>

                            <span className="text-2xl font-bold tracking-tight">
                                Imran<span className="text-primary"> Hossain.</span>
                            </span>
                        </Link>

                        <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
                            Full-Stack Developer focused on building modern,
                            scalable, and user-friendly web applications with
                            clean code and thoughtful engineering.
                        </p>

                        {/* Socials */}
                        <div className="mt-3.75 flex items-center">
                            <Link
                                href="https://www.linkedin.com/in/imranh-dev1"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className={SOCIAL_ICON_CLASS}
                            >
                                <LiaLinkedin className="h-7 w-7" />
                            </Link>

                            <Link
                                href="https://x.com/imranh_dev1"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="X"
                                className={SOCIAL_ICON_CLASS}
                            >
                                <BsTwitter className="h-5 w-5" />
                            </Link>

                            <Link
                                href="https://www.facebook.com/imranh.dev1"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className={SOCIAL_ICON_CLASS}
                            >
                                <FaFacebook className="h-5 w-5" />
                            </Link>

                            <Link
                                href="mailto:imranh.dev1@gmail.com"
                                aria-label="Email"
                                className={SOCIAL_ICON_CLASS}
                            >
                                <Mail className="h-5 w-5" />
                            </Link>
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
                        <h3 className="text-sm font-semibold text-foreground">
                            What I Do
                        </h3>

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
                <div className="my-5 h-px bg-white/10" />

                {/* Bottom Footer */}
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} Imran Hossain. All rights reserved.
                    </p>

                    <div className="flex items-center gap-5">
                        <Link
                            href="mailto:imranh.dev1@gmail.com"
                            className="text-sm text-muted-foreground transition-colors hover:text-primary"
                        >
                            imranh.dev1@gmail.com
                        </Link>

                        <Button variant="primary" className="rounded-full">
                            <Link
                                href="#home"
                                aria-label="Back to top">
                                <ArrowUp size={17} />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
}