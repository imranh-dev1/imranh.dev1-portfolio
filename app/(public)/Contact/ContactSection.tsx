"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
    Mail,
    MessageCircle,
    Phone,
    Send,
    ArrowUpRight,
} from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

const initialFormData: ContactFormData = {
    name: "",
    email: "",
    message: "",
};

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "imranh.dev1@gmail.com",
        href: "mailto:imranh.dev1@gmail.com",
        description: "For project inquiries and opportunities",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+88 01646-048556",
        href: "tel:+8801646048556",
        description: "Available for professional discussions",
    },
    {
        icon: MessageCircle,
        label: "WhatsApp",
        value: "+88 01646-048556",
        href: "https://wa.me/8801646048556",
        description: "Quick messages and project discussions",
    },
];

export default function ContactSection() {
    const [formData, setFormData] = useState<ContactFormData>(initialFormData);

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isSubmitting) return;

        // try {
        //     setIsSubmitting(true);

        //     const response = await fetch(
        //         "https://imran-portfolio-server.vercel.app/contact",
        //         {
        //             method: "POST",
        //             headers: {
        //                 "Content-Type": "application/json",
        //             },
        //             body: JSON.stringify(formData),
        //         },
        //     );

        //     const data = await response.json();

        //     if (!response.ok) {
        //         throw new Error(
        //             data?.message || "Failed to send message.",
        //         );
        //     }

        //     toast.success(
        //         data?.message || "Message sent successfully!",
        //     );

        //     setFormData(initialFormData);
        // } catch (error) {
        //     console.error("Contact form error:", error);

        //     toast.error(
        //         error instanceof Error
        //             ? error.message
        //             : "Something went wrong. Please try again.",
        //     );
        // } finally {
        //     setIsSubmitting(false);
        // }

        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" })
    };

    return (
        <section className="bg-secondary">
            <div className="container mx-auto px-6 py-24 lg:px-0">
                {/* Section Header */}
                <div className="mx-auto mb-8 flex max-w-3xl flex-col items-center text-center">
                    <div className="mb-3 flex items-center gap-2 text-sm font-semibold tracking-[0.15em] text-primary uppercase">
                        <span className="text-lg">—</span>
                        <span>Contact</span>
                    </div>

                    <SectionHeader>
                        <span className="text-primary">&lt; Let&apos;s </span>
                        Connect /&gt;
                    </SectionHeader>

                    <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
                        Have a project in mind, a job opportunity, or simply want
                        to say hello? Feel free to reach out. I&apos;m always open
                        to discussing new ideas and opportunities.
                    </p>
                </div>

                {/* Contact Content */}
                <div className="flex gap-6">
                    {/* Left - Contact Information */}
                    <div className="group rounded-3xl border border-primary/50 bg-background p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-[0_10px_35px_rgba(19,187,255,.18)] flex-1">
                        <div className="mb-8">
                            <p className="mb-2 text-sm font-medium text-primary">
                                GET IN TOUCH
                            </p>

                            <h3 className="text-2xl font-bold tracking-tight">
                                Let&apos;s work together
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                Whether you&apos;re looking to build a new
                                product, improve an existing application, or
                                discuss a potential opportunity, I&apos;d be
                                happy to hear from you.
                            </p>
                        </div>

                        {/* Contact Items */}
                        <div className="space-y-3">
                            {contactInfo.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        target={
                                            item.label === "WhatsApp"
                                                ? "_blank"
                                                : undefined
                                        }
                                        rel={
                                            item.label === "WhatsApp"
                                                ? "noopener noreferrer"
                                                : undefined
                                        }
                                        className="group flex items-center gap-4 rounded-xl border border-primary/50 bg-background p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-secondary"
                                    >
                                        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                                            <Icon className="size-5" />
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                                                {item.label}
                                            </p>

                                            <p className="mt-0.5 truncate text-sm font-semibold">
                                                {item.value}
                                            </p>

                                            <p className="mt-1 text-xs text-muted-foreground">
                                                {item.description}
                                            </p>
                                        </div>

                                        <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right - Contact Form */}
                    <div className="group rounded-3xl border border-primary/50 bg-background p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-[0_10px_35px_rgba(19,187,255,.18)] flex-1">
                        <div className="mb-7">
                            <div className="mb-2 flex items-center gap-2">
                                <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Send className="size-4" />
                                </div>

                                <h3 className="text-xl font-semibold">
                                    Send a message
                                </h3>
                            </div>

                            <p className="text-sm text-muted-foreground">
                                Fill out the form below and I&apos;ll get back to
                                you as soon as possible.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name & Email */}
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="name"
                                        className="text-sm font-medium"
                                    >
                                        Your Name
                                    </label>

                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        required
                                        disabled={isSubmitting}
                                        className="h-11 mt-2 w-full rounded-xl border border-primary/50 bg-background px-4 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-60"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-medium"
                                    >
                                        Email Address
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        required
                                        disabled={isSubmitting}
                                        className="h-11 mt-2 w-full rounded-xl border border-primary/50 bg-background px-4 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-60"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <label
                                    htmlFor="message"
                                    className="text-sm font-medium"
                                >
                                    Your Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project, idea, or opportunity..."
                                    rows={7}
                                    required
                                    disabled={isSubmitting}
                                    className="w-full mt-2 resize-none rounded-xl border border-primary/50 bg-background px-4 py-3 text-sm leading-6 outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-60"
                                />
                            </div>

                            {/* Submit */}
                            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                                <p className="text-xs text-muted-foreground">
                                    I usually respond within 24 hours.
                                </p>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    size="lg"
                                    className="gap-2 sm:min-w-40"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="size-4" />
                                        </>
                                    )}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
} 