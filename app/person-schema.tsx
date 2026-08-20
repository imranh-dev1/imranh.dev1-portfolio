export default function PersonSchema() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Imran Hossain",
        jobTitle: "Full Stack Developer",
        url: process.env.NEXT_PUBLIC_SITE_URL,
        email: "imranh.dev1@gmail.com",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Dhaka",
            addressCountry: "Bangladesh",
        },
        knowsAbout: [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "MongoDB",
            "Prisma",
            "Tailwind CSS",
        ],
        sameAs: [
            "https://github.com/imranh-dev1",
            "https://www.linkedin.com/in/imranh-dev1/",
        ],
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}