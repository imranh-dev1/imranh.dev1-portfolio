"use client";

import Link from "next/link";

import { NAV_ITEMS } from "./navbar.config";

interface NavbarDesktopProps {
    activeSection: string;
    onNavigate: (section: string) => void;
}

const NavbarDesktop = ({
    activeSection,
    onNavigate,
}: NavbarDesktopProps) => {
    return (
        <div className="hidden lg:flex">
            <ul className="flex items-center gap-1">
                {NAV_ITEMS.map((item) => {
                    const Icon = item.icon;
                    const section = item.href.replace("#", "");
                    const isActive = activeSection === section;

                    return (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                onClick={() => onNavigate(section)}
                                className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-bold transition-all duration-300 ${isActive
                                    ? "text-primary-color"
                                    : "text-white hover:text-primary-color"
                                    }`}
                            >
                                <Icon size={17} strokeWidth={2} />

                                <span>{item.label}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default NavbarDesktop;