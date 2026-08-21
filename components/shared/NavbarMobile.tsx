"use client";

import Link from "next/link";

import { NAV_ITEMS } from "./navbar.config";

interface NavbarMobileProps {
    activeSection: string;
    onNavigate: (section: string) => void;
    onClose: () => void;
}

const NavbarMobile = ({
    activeSection,
    onNavigate,
    onClose,
}: NavbarMobileProps) => {
    return (
        <div className="border-t border-primary-color/20 py-3 lg:hidden">
            <ul className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => {
                    const Icon = item.icon;
                    const section = item.href.replace("#", "");
                    const isActive = activeSection === section;

                    return (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                onClick={() => {
                                    onNavigate(section);
                                    onClose();
                                }}
                                className={`flex items-center gap-3 rounded-lg px-4 py-3 font-bold transition-all duration-300 ${isActive
                                    ? "bg-primary-color/10 text-primary-color"
                                    : "text-white hover:bg-primary-color/5 hover:text-primary-color"
                                    }`}
                            >
                                <Icon size={18} strokeWidth={2} />

                                <span>{item.label}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default NavbarMobile;