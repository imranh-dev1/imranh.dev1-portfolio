import rentNestImg from "@/asstes/savi_creative_studios_squarespace_website_desings.png";
import rentNestHomeImg from "@/asstes/rent-nest-liart-vercel-app.png";
import hostelHubImg from "@/asstes/hostel-management-system.png";
import medicalCampImg from "@/asstes/medical-camp-management.png";
import nextGenerationImg from "@/asstes/next-gen.png";
import carDoctorImg from "@/asstes/car-doctor-next-js.png";
import chillGamerImg from "@/asstes/chill-gamer.png";

export const projects = [
    {
        id: 1,
        title: "Rent Nest",
        category: "Full Stack Rental Property Management Platform",
        image: rentNestHomeImg,

        overview:
            "RentNest is a modern rental property marketplace built with Next.js and Node.js that connects tenants, landlords, and administrators in one platform. It provides property discovery, rental requests, role-based dashboards, secure payments, property management, and administrative controls through a responsive and user-friendly interface.",

        features: [
            "Role-Based Dashboards for Admin, Landlord & Tenant",
            "JWT Authentication with Protected Routes",
            "Property Listing, Management & Moderation",
            "Advanced Property Search & Filtering",
            "Rental Request & Approval Workflow",
            "Stripe Checkout Payment Integration",
            "Cloudinary Image Upload & Optimization",
            "Dashboard Analytics & Earnings Overview",
            "Property Review System",
            "Responsive Mobile-First Interface",
        ],

        technologies: [
            "Next.js 16",
            "TypeScript",
            "React",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "Prisma",
            "JWT",
            "Stripe",
            "Cloudinary",
            "Tailwind CSS",
            "shadcn/ui",
            "TanStack Query",
            "React Hook Form",
            "Zod",
        ],

        challenges:
            "Designing a secure multi-role rental platform required handling different permissions for tenants, landlords, and administrators, while also managing rental workflows, protected routes, image uploads, form validation, and secure online payments.",

        solution:
            "Built a modular full-stack architecture using Next.js, Express.js, Prisma, and PostgreSQL. Implemented JWT-based authentication with HTTP-only cookies, role-based route protection, React Hook Form with Zod validation, TanStack Query for server-state management, Cloudinary for image handling, and Stripe Checkout for secure payments.",

        stats: [
            { label: "User Roles", value: "3" },
            { label: "Payment", value: "Stripe" },
            { label: "Database", value: "PostgreSQL" },
            { label: "Responsive", value: "100%" },
        ],

        live: "https://rent-nest-liart.vercel.app",
        github: "https://github.com/imranh-dev1/Rent_Nest_Frontend",
    },
    {
        id: 2,
        title: "Hostel Hub",
        category: "Mern Stack Hostel Management System",
        image: hostelHubImg,

        overview:
            "HostelHub is a modern hostel management platform designed to simplify meal management, user administration, payments, and community engagement for students and administrators. Built with React, Node.js, MongoDB, and Stripe, it provides a seamless and responsive experience across devices.",

        features: [
            "JWT Authentication & Protected Routes",
            "Student & Admin Management",
            "Hostel Meal Management System",
            "Secure Online Payment Integration",
            "Table Management with Pagination",
            "Search & Filtering Functionality",
            "Community Engagement Features",
            "Responsive Web & Mobile-Friendly Design",
        ],

        technologies: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Stripe",
            "Firebase Auth",
            "JWT",
            "Tailwind CSS",
            "Framer Motion",
            "React Query",
        ],

        challenges:
            "Implementing secure authentication for sensitive routes and building efficient table management with pagination and search capabilities while keeping the platform responsive and easy to use.",

        solution:
            "Implemented JWT-based authentication and protected routes, added reusable table components with pagination and search functionality, integrated Stripe for online payments, and used React Query for efficient server-state management.",

        stats: [
            { label: "Authentication", value: "JWT" },
            { label: "Payment", value: "Stripe" },
            { label: "Responsive", value: "100%" },
            { label: "Database", value: "MongoDB" },
        ],

        live: "https://hostel-management-system-78bac.web.app",
        github:
            "https://github.com/imran-information/Hostel-Management-System/tree/main",
    },
    {
        id: 3,
        title: "Medical Camp Management System",
        category: "Mern Stack Medical Camp Management Platform",
        image: medicalCampImg,

        overview:
            "Medical Camp Management System (MCMS) is a MERN stack-based platform designed to simplify the organization and participation of medical camps. It provides organizers with tools to manage camps, registrations, participants, payments, and volunteers while giving participants a seamless experience for discovering and joining medical camps.",

        features: [
            "Role-Based Dashboard for Organizers & Participants",
            "Firebase Authentication & JWT Authorization",
            "Medical Camp Creation & Management",
            "Camp Registration & Participant Management",
            "Stripe Payment Integration",
            "Participant Feedback & Rating System",
            "Advanced Search, Sorting & Pagination",
            "Participant Analytics with Recharts",
            "Health Records Management",
            "Volunteer Management System",
            "Responsive Mobile, Tablet & Desktop Design",
            "Axios Interceptors for Secure API Requests",
        ],

        technologies: [
            "React",
            "React Router",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "Firebase",
            "JWT",
            "Stripe",
            "TanStack Query",
            "Tailwind CSS",
            "Recharts",
            "AOS",
            "Material Tailwind",
        ],

        challenges:
            "Implementing secure authentication and role-based access control, managing camp registrations and payments, and building efficient dashboards with searchable and paginated tables while maintaining a responsive user experience.",

        solution:
            "Implemented Firebase authentication with JWT-secured API endpoints, separate organizer and participant dashboards, Stripe payment integration, reusable table components with search and pagination, Recharts for analytics, and responsive interfaces with smooth AOS animations.",

        stats: [
            { label: "User Roles", value: "2+" },
            { label: "Payment", value: "Stripe" },
            { label: "Responsive", value: "100%" },
            { label: "Authentication", value: "JWT" },
        ],

        live: "https://medical-camp-management-1b67d.web.app/",
        github:
            "https://github.com/imranh-dev1/Medical-Camp-Management-System-client",
    },
    {
        id: 4,
        title: "Next Generation",
        category: "Mern Stack Blogging Platform",
        image: nextGenerationImg,

        overview:
            "Next Generation is a modern blogging platform where users can discover, write, manage, and interact with blog content. The platform includes secure authentication, blog management, wishlists, comments, search and filtering, featured blogs, and personalized user experiences.",

        features: [
            "Email/Password & Google Authentication",
            "JWT Authentication & Protected Routes",
            "Blog Creation, Update & Management",
            "Blog Search & Category Filtering",
            "Personalized Blog Wishlist",
            "Interactive Comments on Blog Details",
            "Featured Blogs Based on Word Count",
            "Dynamic Authentication-Based Navbar",
            "Sortable Featured Blogs Table",
            "Responsive Mobile-First Design",
            "Loading Skeletons for Better UX",
            "Full-Screen Blog Image Preview",
        ],

        technologies: [
            "React",
            "React Router",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Firebase",
            "JWT",
            "TanStack Query",
            "Redux",
            "Framer Motion",
            "DaisyUI",
            "TanStack Table",
            "React Hot Toast",
        ],

        challenges:
            "Implementing secure authentication and protected routes while managing blog ownership, wishlists, comments, dynamic filtering, and searchable content across different user interactions.",

        solution:
            "Implemented Firebase authentication with JWT-secured API routes, MongoDB-based blog and user management, protected blog operations, dynamic search and category filtering, personalized wishlists, interactive comments, and reusable UI components with TanStack Query and Redux.",

        stats: [
            { label: "Authentication", value: "JWT" },
            { label: "Database", value: "MongoDB" },
            { label: "Social Login", value: "Google" },
            { label: "Responsive", value: "100%" },
        ],

        live: "https://next-gen-230be.web.app/",
        github:
            "https://github.com/imranh-dev1/next-generation-client",
    },
    {
        id: 5,
        title: "Car Doctor",
        category: "Next.js Car Repair Service Platform",
        image: carDoctorImg,

        overview:
            "Car Doctor is a modern car repair service platform built with Next.js that allows users to explore available automotive services, view service details, book appointments, and manage their bookings through a responsive and user-friendly interface.",

        features: [
            "Car Repair Service Listing",
            "Service Details Page",
            "Online Appointment Booking",
            "Booking Management System",
            "Update & Delete Bookings",
            "User Authentication & Authorization",
            "Protected Booking Management",
            "Responsive Mobile & Desktop Design",
            "MongoDB Database Integration",
            "Secure Environment Variable Configuration",
        ],

        technologies: [
            "Next.js",
            "React",
            "MongoDB",
            "NextAuth.js",
            "JavaScript",
            "Tailwind CSS",
            "REST API",
        ],

        challenges:
            "Building a smooth appointment booking workflow while implementing authentication, protected booking management, and reliable database operations for creating, updating, and deleting appointments.",

        solution:
            "Built the application with Next.js and MongoDB, implemented authentication and authorization with NextAuth.js, created service and booking workflows, and designed responsive interfaces for managing automotive services and appointments.",

        stats: [
            { label: "Framework", value: "Next.js" },
            { label: "Database", value: "MongoDB" },
            { label: "Authentication", value: "NextAuth" },
            { label: "Responsive", value: "100%" },
        ],

        live: "https://car-doctor-next-js.vercel.app/",
        github:
            "https://github.com/imran-information/car-doctor-next-JS",
    },
    {
        id: 6,
        title: "Chill Gamer",
        category: "Mern Stack Game Review Platform",
        image: chillGamerImg,

        overview:
            "Chill Gamer is a modern game review platform where users can explore, create, manage, and save game reviews. It provides secure authentication, personalized watchlists, rating-based sorting, genre filtering, and a responsive interface for a smooth gaming community experience.",

        features: [
            "User Registration & Authentication",
            "Game Review Creation & Management",
            "Update & Delete Own Reviews",
            "Personalized Game Watchlist",
            "Highest Rated Games Section",
            "Rating & Genre Based Filtering",
            "Review Sorting & Search",
            "Dark & Light Theme Toggle",
            "Responsive Mobile-First Design",
            "Custom 404 Error Page",
        ],

        technologies: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Firebase Authentication",
            "Tailwind CSS",
            "Material UI",
            "JavaScript",
        ],

        challenges:
            "Implementing secure user authentication, managing user-generated reviews, building a personalized watchlist, and providing efficient filtering and sorting while maintaining a responsive user experience.",

        solution:
            "Built a REST API with Node.js and Express.js, used MongoDB for review and watchlist management, integrated Firebase Authentication for secure user access, and created responsive interfaces with React, Tailwind CSS, and Material UI.",

        stats: [
            { label: "Authentication", value: "Firebase" },
            { label: "Database", value: "MongoDB" },
            { label: "Review System", value: "CRUD" },
            { label: "Responsive", value: "100%" },
        ],

        live: "https://chill-gamer-3528e.web.app/",
        github:
            "https://github.com/imranh-dev1/chill-gamer-client",
    },
];