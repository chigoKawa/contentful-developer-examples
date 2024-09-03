"use client";
import { cva, cx, type VariantProps } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";
import Link from "next/link";
import { MdClose } from "react-icons/md";

export interface IProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof cmpVars> {
  message: string;

  className?: string;
  url?: string;
  random: any;
}

export const StudioAnnouncement: FC<IProps> = ({
  message,
  className,

  random,
  url,
  variant = "default",
  ...ctflProps
}) => {
  console.log("random", className);

  return (
    <div className={cx(className, cmpVars({ variant }))}>
      <div className="fixed inset-x-0 bottom-0 p-4">
        <div className="relative flex items-center justify-between gap-4 rounded-lg bg-indigo-600 px-4 py-3 text-white shadow-lg">
          <p className="text-sm font-medium">{message}</p>

          <button
            aria-label="Close"
            className="shrink-0 rounded-lg bg-black/10 p-1 transition hover:bg-black/20"
          >
            <MdClose size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

const cmpVars = cva("w-full", {
  variants: {
    variant: {
      default: "bg-primary w-full",
      danger: "bg-danger",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
