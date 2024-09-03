"use client";
import { cva, cx, type VariantProps } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";
import Link from "next/link";
import { Chip } from "@nextui-org/react";

export interface IProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVars> {
  label: string;
  listText: any[];
  sideEffect?: "alertMe" | "consoleLog";
  className?: string;
  url?: string;
  random: any;
}

export const StudioButton: FC<IProps> = ({
  label,
  className,
  sideEffect,
  random,
  url,
  listText,
  variant = "primary",
  ...ctflProps
}) => {
  const handleClick = () => {
    if (sideEffect === "alertMe") {
      alert("You clicked on me");
    } else {
      console.log("You clicked on me but ama log this");
    }
  };

  console.log("random", listText);

  if (url) {
    return (
      <Link href={url}>
        <div className={cx(className, buttonVars({ variant }))}>{label}</div>
      </Link>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={cx(className, buttonVars({ variant }))}
      {...ctflProps}
    >
      hello
      {listText &&
        listText?.map((txt, txidx) => {
          return <Chip key={txidx}>Chip</Chip>;
        })}
      {label}
    </button>
  );
};

const buttonVars = cva("base-btn ", {
  variants: {
    variant: {
      primary: "btn-primary",
      secondary: "btn-secondary",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
