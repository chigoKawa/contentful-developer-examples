"use client";
import { cva, cx, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { FC, HTMLAttributes } from "react";
import { PiCaretRightBold } from "react-icons/pi";

const linkVars = cva(
  "group  jpl-text-h1x text-base base-btn leading-tight tracking-wider flex items-center space-x-2 ",
  {
    variants: {
      variant: {
        Primary2: "uppercase hover:text-jpl-red-dark text-jpl-red-light",
        Secondary2: "uppercase hover:text-jpl-red-dark text-jpl-red-light",
        Primary: " btn-primary",
        Secondary: " btn-secondary",
        Default: "underline hover:text-jpl-red-dark text-jpl-red-light",
        Unstyled: "",
        Dark: "btn-dark",
      },
    },
    defaultVariants: {
      variant: "Primary",
    },
  }
);

const linkCaretVars = cva("text-base group-hover:animate-pulse ", {
  variants: {
    variant: {
      Primary: "",
      Secondary: "hidden",
      Default: "hidden",
      Unstyled: "hidden",
      Dark: "hidden",
    },
  },
  defaultVariants: {
    variant: "Primary",
  },
});

export interface IProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof linkVars> {
  label: string;
  href: string;
  className?: string;
}

 const DemoHeroButton: FC<IProps> = ({
  label,
  className,
  href = "/",
  variant = "Primary",
  ...ctflProps
}) => {
  return (
    <Link href={href}>
      <div className={cx(linkVars({ variant }))}>
        <div className=" text-inherit ">{label}</div>
      
      </div>
    </Link>
  );
};

export default DemoHeroButton
