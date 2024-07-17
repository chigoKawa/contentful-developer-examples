"use client";
import { cva, cx, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { FC, HTMLAttributes } from "react";
import { PiCaretRightBold } from "react-icons/pi";

const linkVars = cva(
  "group  jpl-text-h1 text-base leading-tight tracking-wider flex items-center space-x-2 ",
  {
    variants: {
      variant: {
        primary: "uppercase hover:text-jpl-red-dark text-jpl-red-light",
        secondary: "uppercase hover:text-jpl-red-dark text-jpl-red-light",
        default: "underline hover:text-jpl-red-dark text-jpl-red-light",
        unstyled: "",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

const linkCaretVars = cva("text-base group-hover:animate-pulse ", {
  variants: {
    variant: {
      primary: "",
      secondary: "hidden",
      default: "hidden",
      unstyled: "hidden",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export interface IProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof linkVars> {
  label: string;
  href: string;
  className?: string;
}

export const StudioLink: FC<IProps> = ({
  label,
  className,
  href = "/",
  variant = "primary",
  ...ctflProps
}) => {
  return (
    <Link href={href}>
      <div className={cx(linkVars({ variant }))}>
        <div className=" text-inherit ">{label}</div>
        <PiCaretRightBold className={cx(linkCaretVars({ variant }))} />
      </div>
    </Link>
  );
};
