import Link from "next/link";
import { Mail } from "lucide-react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

const SOCIAL_ICON_CLASS =
    "inline-flex h-10 w-10 items-center justify-center rounded-full " +
    "text-primary " +
    "mr-[17px] " +
    "cursor-pointer " +
    "backdrop-brightness-[88%] " +
    "shadow-[0_0_20px_transparent] " +
    "transition-all duration-500 ease-in-out " +
    "hover:scale-110 " +
    "hover:shadow-[0_0_20px_var(--primary)]";

const socialLinks = [
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/imranh-dev1",
        icon: <LiaLinkedin className="h-7 w-7" />,
        external: true,
    },
    {
        label: "X",
        href: "https://x.com/imranh_dev1",
        icon: <BsTwitter className="h-5 w-5" />,
        external: true,
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com/imranh.dev1",
        icon: <FaFacebook className="h-5 w-5" />,
        external: true,
    },
    {
        label: "Email",
        href: "mailto:imranh.dev1@gmail.com",
        icon: <Mail className="h-5 w-5" />,
        external: false,
    },
];

const SocialLinks = () => {
    return (
        <div className="flex items-center">
            {socialLinks.map((link) => (
                <Link
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    aria-label={link.label}
                    className={SOCIAL_ICON_CLASS}
                >
                    {link.icon}
                </Link>
            ))}
        </div>
    );
};

export default SocialLinks;