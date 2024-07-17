"use client";
import React, { FC } from "react";

interface IProps {
  imageUrl: string;
  className?: string;
  width?: number;
  height?: number;
  altText?: string;
}

export const StudioImage: FC<IProps> = ({
  imageUrl,
  width = 500,
  height = 500,
  altText,
  className,
  ...ctflProps
}) => {

  
  return (
    <img
      className={className}
      // className="inset-0 h-full w-full object-cover "
      src={imageUrl}
      alt={altText}
      width={width}
      height={height}
      {...ctflProps}
    />
  );
};
