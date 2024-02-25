import Image from "next/image";

import { TagResponse } from "@/query/image";
import XmarkSVG from "@/public/x-mark.svg";

interface Props {
  setIsInfoModalOpen: any;
}

const WIDTH = 144;
const HEIGHT = 64;

const FULL = 450;

const getTop = (ycoordinate: number) => {
  if (ycoordinate > FULL - HEIGHT) return ycoordinate - HEIGHT;
  return ycoordinate;
};

const getLeft = (xcoordinate: number) => {
  if (xcoordinate > FULL - WIDTH) return xcoordinate - WIDTH;
  return xcoordinate;
};

const ProductInfoModal = (props: TagResponse & Props) => {
  const { xcoordinate, ycoordinate, product, setIsInfoModalOpen } = props;

  const { imageUrl, name, brandName } = product;

  return (
    <>
      <div
        className={`absolute w-36 h-16 bg-white rounded flex items-center z-30`}
        style={{ top: getTop(ycoordinate), left: getLeft(xcoordinate) }}
      >
        <div className="flex items-center pl-2 relative">
          <div>
            <Image
              src={imageUrl}
              alt="image"
              width={40}
              height={40}
              className="aspect-square"
            />
          </div>

          <div className="p-2">
            <div className="text-sm">{name}</div>
            <div className="text-sm">{brandName}</div>
          </div>

          <div
            className="absolute -top-2 -right-2"
            onClick={() => {
              setIsInfoModalOpen(false);
            }}
          >
            <XmarkSVG width={20} height={20} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfoModal;
