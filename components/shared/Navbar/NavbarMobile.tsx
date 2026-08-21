"use client";

import Link from "next/link";
import { X } from "lucide-react";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";

import { NAV_ITEMS } from "./navbar.config";

interface NavbarMobileProps {
    open: boolean;
    activeSection: string;
    onNavigate: (section: string) => void;
    onClose: () => void;
}

const NavbarMobile = ({
    open,
    activeSection,
    onNavigate,
    onClose,
}: NavbarMobileProps) => {
    return (
        <Sheet open={open} onOpenChange={(value) => !value && onClose()}>
            <SheetContent
                side="right"
                className="w-70 border-primary/20 bg-minBg text-white sm:w-85"
            >
                <SheetHeader>
                    <SheetTitle className="text-left text-white">
                        Navigation
                    </SheetTitle>
                </SheetHeader>

                <nav className="mt-6 flex flex-col gap-2">
                    {NAV_ITEMS.map((item) => {
                        const section = item.href.replace("#", "");
                        const Icon = item.icon;

                        const isActive = activeSection === section;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => {
                                    onNavigate(section);
                                    onClose();
                                }}
                                className={`flex items-center gap-3 rounded-xl px-4 py-3 font-semibold transition duration-300 ${isActive
                                    ? "bg-primary/10 text-primary"
                                    : "text-white hover:bg-primary/5 hover:text-primary"
                                    }`}
                            >
                                <Icon size={19} />

                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default NavbarMobile;