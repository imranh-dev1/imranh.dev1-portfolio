"use client";

import { useEffect, useState } from "react";
import { DownloadIcon, Menu, X } from "lucide-react";

import NavbarLogo from "./NavbarLogo";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

import { NAV_ITEMS } from "./navbar.config";

import { Button } from "../ui/button";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("home");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const sections = Array.from(
            document.querySelectorAll<HTMLElement>("section[id]"),
        );

        // If only Home/Banner exists
        if (sections.length === 0) {
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
                root: null,
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
                <nav className="my-4 rounded-full border border-primary-color bg-minBg/95 px-4 shadow-lg backdrop-blur-md sm:px-6">
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
                                className="w-full uppercase tracking-wide sm:w-auto"
                            >
                                <a
                                    href="https://drive.google.com/file/d/1O1cSs8I55MVPzjJ1qxh_5_wRLEn0XPW/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-start gap-2"
                                >
                                    <DownloadIcon size={18} />
                                    Download CV
                                </a>
                            </Button>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            type="button"
                            aria-label={
                                mobileMenuOpen
                                    ? "Close navigation"
                                    : "Open navigation"
                            }
                            aria-expanded={mobileMenuOpen}
                            onClick={() =>
                                setMobileMenuOpen((prev) => !prev)
                            }
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-color/40 text-white transition-all duration-300 hover:border-primary-color hover:text-primary-color lg:hidden"
                        >
                            {mobileMenuOpen ? (
                                <X size={21} />
                            ) : (
                                <Menu size={21} />
                            )}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {mobileMenuOpen && (
                        <NavbarMobile
                            activeSection={activeSection}
                            onNavigate={handleNavigate}
                            onClose={() => setMobileMenuOpen(false)}
                        />
                    )}

                    {/* Mobile CV */}
                    {mobileMenuOpen && (
                        <div className="border-t border-primary-color/20 py-3 lg:hidden">
                            <Button
                                asChild
                                variant="secondary"
                                size="default"
                                className="w-full uppercase tracking-wide"
                            >
                                <a
                                    href="https://drive.google.com/file/d/1O1cSs8I55MVPzjJ1qxh_5_wRLEn0XPW/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2"
                                >
                                    <DownloadIcon size={18} />
                                    Download CV
                                </a>
                            </Button>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;