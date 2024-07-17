import React, { FC } from "react";

interface IProps {
  title: string;

  cfImageAsset: any;
}
const StudioCard: FC<IProps> = ({ title, cfImageAsset }) => {
  console.log("cfImageOptions", cfImageAsset);
  return (
    <div className="flex flex-col space-y-10 p-2">
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="">
        <img srcSet={cfImageAsset?.srcSet} />
      </div>
    </div>
  );
};

export default StudioCard;
