"use client";

import Link from "next/link";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
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
        <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
                {NAV_ITEMS.map((item) => {
                    const section = item.href.replace("#", "");
                    const Icon = item.icon;

                    const isActive = activeSection === section;

                    return (
                        <NavigationMenuItem key={item.href}>
                            <NavigationMenuLink asChild>
                                <Link
                                    href={item.href}
                                    onClick={() => onNavigate(section)}
                                    className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-bold transition duration-300 ${isActive
                                        ? "text-primary"
                                        : "text-white hover:text-primary"
                                        }`}
                                >
                                    <Icon size={17} />

                                    <span>{item.label}</span>
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    );
                })}
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default NavbarDesktop;