import type { ReactNode } from "react";

interface SectionHeaderProps {
    children: ReactNode;
    className?: string;
}

const SectionHeader = ({
    children,
    className = "",
}: SectionHeaderProps) => {
    return (
        <h2
            className={`
        text-center
        text-3xl
        font-bold
        text-white
        md:text-left
        md:text-4xl
        ${className}
      `}
        >
            {children}
        </h2>
    );
};

export default SectionHeader;