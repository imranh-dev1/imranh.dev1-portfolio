import Link from "next/link";

interface NavbarLogoProps {
    onClick?: () => void;
}

const NavbarLogo = ({ onClick }: NavbarLogoProps) => {
    return (
        <Link
            href="#home"
            onClick={onClick}
            className="text-2xl font-bold transition-colors duration-300 hover:text-primary-color md:text-3xl"
        >
            Developer <span className="text-primary-color">I.</span>
        </Link>
    );
};

export default NavbarLogo;