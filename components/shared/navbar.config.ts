import {
    Home,
    User,
    Code2,
    BriefcaseBusiness,
    FolderKanban,
    Mail,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export interface NavItem {
    label: string;
    href: string;
    icon: LucideIcon;
}

export const NAV_ITEMS: NavItem[] = [
    {
        label: "Home",
        href: "#home",
        icon: Home,
    },
    {
        label: "About",
        href: "#about",
        icon: User,
    },
    {
        label: "Skills",
        href: "#skills",
        icon: Code2,
    },
    {
        label: "Experience",
        href: "#experience",
        icon: BriefcaseBusiness,
    },
    {
        label: "Projects",
        href: "#project",
        icon: FolderKanban,
    },
    {
        label: "Contact",
        href: "#contact",
        icon: Mail,
    },
];