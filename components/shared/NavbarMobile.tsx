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
                className="w-[280px] border-primary-color/20 bg-minBg text-white sm:w-[340px]"
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
                                className={`flex items-center gap-3 rounded-xl px-4 py-3 font-semibold transition-colors duration-300 ${isActive
                                    ? "bg-primary-color/10 text-primary-color"
                                    : "text-white hover:bg-primary-color/5 hover:text-primary-color"
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