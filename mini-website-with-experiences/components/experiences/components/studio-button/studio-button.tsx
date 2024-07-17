"use client";
import { cva, cx, type VariantProps } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";


export interface IProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVars> {
  label: string;
  sideEffect?: "alertMe" | "consoleLog";
  className?: string;
}

export const StudioButton: FC<IProps> = ({
  label,
  className,
  sideEffect,
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

  return (
    <button
      onClick={handleClick}
      className={cx(className, buttonVars({ variant }))}
      {...ctflProps}
    >
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
