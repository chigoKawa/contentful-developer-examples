"use client"
import React, {FC} from 'react';

interface ButtonComponentProps {
  text: string;
}

 const StudioButton = ({ text }: ButtonComponentProps) => {
//   return { text };
  return <>{text}</>
 
};


export default StudioButton