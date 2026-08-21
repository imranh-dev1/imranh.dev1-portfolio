import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "group/button",
    "inline-flex",
    "shrink-0",
    "items-center",
    "justify-center",
    "rounded",
    "border",
    "text-sm",
    "font-semibold",
    "whitespace-nowrap",
    "transition-all",
    "duration-500",
    "outline-none",
    "select-none",

    "focus-visible:border-ring",
    "focus-visible:ring-3",
    "focus-visible:ring-ring/50",

    "active:not-aria-[haspopup]:translate-y-px",

    "disabled:pointer-events-none",
    "disabled:opacity-50",

    "[&_svg]:pointer-events-none",
    "[&_svg]:shrink-0",
    "[&_svg:not([class*='size-'])]:size-4",
  ],
  {
    variants: {
      variant: {
        /**
         * Default shadcn button
         */
        default:
          "bg-primary text-primary-foreground hover:bg-primary/80 ",

        /**
         * Portfolio Primary Button
         *
         * Cyan background
         * Dark text
         * Hover -> dark background + cyan text
         */
        primary:
          [
            "border-[#13bbff]",
            "bg-[#13bbff]",
            "text-[#1b1f24]",

            "hover:border-[#13bbff]",
            "hover:bg-[#1b1f24]",
            "hover:text-[#13bbff]",

            "hover:shadow-[0_0_20px_#13bbff]",
          ].join(" "),

        /**
         * Portfolio Secondary Button
         *
         * Dark background
         * Cyan text
         * Hover -> cyan background + dark text
         */
        secondary:
          [
            "border-[#13bbff]",
            "bg-[#1b1f24]",
            "text-[#13bbff]",

            "hover:border-[#13bbff]",
            "hover:bg-[#13bbff]",
            "hover:text-[#1b1f24]",

            "hover:shadow-[0_0_20px_#13bbff]",
          ].join(" "),

        outline:
          [
            "border-border",
            "bg-background",
            "shadow-xs",
            "hover:bg-muted",
            "hover:text-foreground",
            "aria-expanded:bg-muted",
            "aria-expanded:text-foreground",
            "dark:border-input",
            "dark:bg-input/30",
            "dark:hover:bg-input/50",
          ].join(" "),

        ghost:
          [
            "hover:bg-muted",
            "hover:text-foreground",
            "aria-expanded:bg-muted",
            "aria-expanded:text-foreground",
            "dark:hover:bg-muted/50",
          ].join(" "),

        destructive:
          [
            "bg-destructive/10",
            "text-destructive",
            "hover:bg-destructive/20",
            "focus-visible:border-destructive/40",
            "focus-visible:ring-destructive/20",
            "dark:bg-destructive/20",
            "dark:hover:bg-destructive/30",
            "dark:focus-visible:ring-destructive/40",
          ].join(" "),

        link:
          "text-primary underline-offset-4 hover:underline",
      },

      size: {
        default:
          [
            "h-9",
            "gap-1.5",
            "px-3.5",
            "in-data-[slot=button-group]:rounded-md",
            "has-data-[icon=inline-end]:pr-2",
            "has-data-[icon=inline-start]:pl-2",
          ].join(" "),

        xs:
          [
            "h-6",
            "gap-1",
            "rounded-[min(var(--radius-md),8px)]",
            "px-2",
            "text-xs",
            "in-data-[slot=button-group]:rounded-md",
            "has-data-[icon=inline-end]:pr-1.5",
            "has-data-[icon=inline-start]:pl-1.5",
            "[&_svg:not([class*='size-'])]:size-3",
          ].join(" "),

        sm:
          [
            "h-8",
            "gap-1",
            "rounded-[min(var(--radius-md),10px)]",
            "px-2.5",
            "in-data-[slot=button-group]:rounded-md",
            "has-data-[icon=inline-end]:pr-1.5",
            "has-data-[icon=inline-start]:pl-1.5",
          ].join(" "),

        lg:
          [
            "h-10",
            "gap-1.5",
            "px-2.5",
            "has-data-[icon=inline-end]:pr-2",
            "has-data-[icon=inline-start]:pl-2",
          ].join(" "),

        icon: "size-9",

        "icon-xs":
          [
            "size-6",
            "rounded-[min(var(--radius-md),8px)]",
            "in-data-[slot=button-group]:rounded-md",
            "[&_svg:not([class*='size-'])]:size-3",
          ].join(" "),

        "icon-sm":
          [
            "size-8",
            "rounded-[min(var(--radius-md),10px)]",
            "in-data-[slot=button-group]:rounded-md",
          ].join(" "),

        "icon-lg": "size-10",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(
        buttonVariants({
          variant,
          size,
          className,
        }),
      )}
      {...props}
    />
  );
}

export {
  Button,
  buttonVariants,
};