import React, { FC } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

interface IProps {
  title: string;
  cfImageAsset: any;
}
const StudioCard: FC<IProps> = ({ title, cfImageAsset }) => {
  console.log("cfImageOptions", cfImageAsset);

  return (
    <>
      {/* --{JSON.stringify(image)}-- */}
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{title}</p>
          {/* <small className="text-default-500">12 Tracks</small> */}
          {/* <h4 className="font-bold text-large">Frontend Radio</h4> */}
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={cfImageAsset?.url}
            width={270}
          />
        </CardBody>
      </Card>
    </>
  );
  return (
    <div className="flex flex-col space-y-4 w-80  h-full overflow-hidden bg-jpl-off-white text-black shadow-lg">
      <h3 className="text-2xl font-bold text-inherit p-2">{title}</h3>

      <div className="h-[82%]">
        <img className="h-full" src={cfImageAsset?.url} />
      </div>
    </div>
  );
};

export default StudioCard;
