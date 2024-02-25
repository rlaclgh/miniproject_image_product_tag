import { GetImagesResponse, TagResponse } from "@/query/image";
import Image from "next/image";
import ProductInfoModal from "./product_info_modal";
import { useState } from "react";

const ImageWithTag = (props: GetImagesResponse) => {
  const { imageUrl, tags } = props;
  return (
    <div className="w-full aspect-square relative">
      <Image src={imageUrl} alt="image" fill={true} />

      {tags.map((tag) => {
        return <Tag {...tag} key={tag.id} />;
      })}
    </div>
  );
};

const Tag = (props: TagResponse) => {
  const { xcoordinate, ycoordinate } = props;

  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  return (
    <>
      <div
        className={`absolute rounded-full w-3 h-3 ${"bg-blue"}`}
        style={{ top: ycoordinate, left: xcoordinate }}
        onClick={() => {
          setIsInfoModalOpen(true);
        }}
      ></div>
      {isInfoModalOpen && (
        <ProductInfoModal {...props} setIsInfoModalOpen={setIsInfoModalOpen} />
      )}
    </>
  );
};

export default ImageWithTag;
