"use client";

import { useEffect, useState } from "react";
import { DownloadIcon, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

import NavbarLogo from "./NavbarLogo";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("home");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const sections =
            document.querySelectorAll<HTMLElement>("section[id]");

        if (!sections.length) {
            setActiveSection("home");
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            b.intersectionRatio - a.intersectionRatio,
                    );

                if (visibleSections.length > 0) {
                    setActiveSection(
                        visibleSections[0].target.id,
                    );
                }
            },
            {
                rootMargin: "-100px 0px -55% 0px",
                threshold: [0.1, 0.25, 0.5],
            },
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    const handleNavigate = (section: string) => {
        setActiveSection(section);
        setMobileMenuOpen(false);
    };

    const handleLogoClick = () => {
        setActiveSection("home");
        setMobileMenuOpen(false);
    };

    return (
        <header className="fixed top-0 z-50 w-full">
            <div className="container mx-auto px-3 sm:px-5">
                <nav className="my-4 rounded-full border border-primary bg-minBg/95 px-4 shadow-lg backdrop-blur-md sm:px-6">
                    <div className="flex h-14 items-center justify-between">
                        {/* Logo */}
                        <NavbarLogo onClick={handleLogoClick} />

                        {/* Desktop Navigation */}
                        <NavbarDesktop
                            activeSection={activeSection}
                            onNavigate={handleNavigate}
                        />

                        {/* Desktop CV */}
                        <div className="hidden lg:block">
                            <Button
                                asChild
                                variant="secondary"
                                size="default"
                                className="uppercase tracking-wide"
                            >
                                <a
                                    href="https://drive.google.com/file/d/1O1cSs8I55MVPzjJ1qxh_5_wRLEn0XPW/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2"
                                >
                                    <DownloadIcon size={18} />
                                    Download CV
                                </a>
                            </Button>
                        </div>

                        {/* Mobile Menu */}
                        <div className="lg:hidden">
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                aria-label="Open navigation"
                                onClick={() => setMobileMenuOpen(true)}
                                className="rounded-full text-white hover:bg-primary/10 hover:text-primary"
                            >
                                <Menu size={22} />
                            </Button>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Mobile Navigation */}
            <NavbarMobile
                open={mobileMenuOpen}
                activeSection={activeSection}
                onNavigate={handleNavigate}
                onClose={() => setMobileMenuOpen(false)}
            />
        </header>
    );
};

export default Navbar;