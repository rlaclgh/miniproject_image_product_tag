import { Dispatch, SetStateAction, useState } from "react";
import ProductModal from "./product_modal";
import { tagType } from "./image_tag";

interface TagProps {
  tag: tagType;
  index: number;
  setTags: Dispatch<SetStateAction<tagType[]>>;
}

const Tag = (props: TagProps) => {
  const { tag, index, setTags } = props;

  const { xCooridnate, yCooridnate, product } = tag;

  const isSelected = !!product;

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className={`absolute rounded-full w-3 h-3 ${
          isSelected ? "bg-blue" : "bg-gray-light"
        }`}
        style={{ top: yCooridnate, left: xCooridnate }}
        onClick={(e) => {
          e.stopPropagation();

          setIsModalOpen(true);
        }}
      />

      {isModalOpen && (
        <ProductModal
          tag={tag}
          setIsModalOpen={setIsModalOpen}
          index={index}
          setTags={setTags}
        />
      )}
    </>
  );
};

export default Tag;
