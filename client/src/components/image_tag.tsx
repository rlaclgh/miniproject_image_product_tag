"use client";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import Tag from "./tag";

export interface tagType {
  xCooridnate: number;
  yCooridnate: number;
  product: productType | null;
}
interface productType {
  id: number;
  name: string;
  brandName: string;
  imageUrl: string;
}

interface ImageTagProps {
  tags: tagType[];
  imageUrl: string;
  setTags: Dispatch<SetStateAction<tagType[]>>;
}

const ImageTag = (props: ImageTagProps) => {
  const { imageUrl, tags, setTags } = props;

  return (
    <div
      className="w-full aspect-square relative"
      onClick={(e) => {
        setTags((prev) => [
          ...prev,
          {
            xCooridnate: e.nativeEvent.offsetX - 6,
            yCooridnate: e.nativeEvent.offsetY - 6,
            product: null,
          },
        ]);
      }}
    >
      <div>
        <Image src={imageUrl} alt="image" fill={true}></Image>
      </div>

      {tags.map((tag, index) => {
        return <Tag tag={tag} key={index} index={index} setTags={setTags} />;
      })}
    </div>
  );
};

export default ImageTag;
