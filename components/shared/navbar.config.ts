import {
    BriefcaseBusiness,
    Code2,
    FolderKanban,
    Home,
    Mail,
    User,
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