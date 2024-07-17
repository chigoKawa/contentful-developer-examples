import React, { FC } from "react";

interface IProps {
  title: string;

  cfImageAsset: any;
}
const StudioCard: FC<IProps> = ({ title, cfImageAsset }) => {
  console.log("cfImageOptions", cfImageAsset);
  return (
    <div className="flex flex-col space-y-4 w-80  h-full overflow-hidden bg-jpl-off-white text-black shadow-lg">
      <h3 className="text-2xl font-bold text-inherit p-2">{title}</h3>

      <div className="h-[80%]">
        <img className="h-full" src={cfImageAsset?.url} />
      </div>
    </div>
  );
};

export default StudioCard;
