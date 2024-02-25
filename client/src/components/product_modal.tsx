import XmarkSVG from "@/public/x-mark.svg";
import { useGetProducts } from "@/query/product";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { tagType } from "./image_tag";
import CheckedSVG from "@/public/checked.svg";

interface ProductModalProps {
  tag: tagType;
  setIsModalOpen: any;
  index: number;
  setTags: Dispatch<SetStateAction<tagType[]>>;
}

interface ProductProps {
  id: number;
  name: string;
  brandName: string;
  imageUrl: string;
  tag: tagType;
  index: number;
  setIsModalOpen: any;
  setTags: Dispatch<SetStateAction<tagType[]>>;
}

const Product = (props: ProductProps) => {
  const { id, name, brandName, imageUrl, index, tag, setTags, setIsModalOpen } =
    props;

  const isSelected = tag?.product?.id === id;

  return (
    <div
      className={`flex items-center`}
      onClick={(e) => {
        e.stopPropagation();
        setTags((prev) => {
          return [
            ...prev.slice(0, index),
            {
              ...prev[index],
              product: {
                id: id,
                name: name,
                brandName: brandName,
                imageUrl: imageUrl,
              },
            },
            ...prev.slice(index + 1, prev.length),
          ];
        });

        setIsModalOpen(false);
      }}
    >
      <div className="w-16 h-16 aspect-square relative ">
        <Image src={imageUrl} alt="image" fill />
      </div>
      <div className="flex flex-col pl-4 w-[70%]">
        <div>{name}</div>
        <div>{brandName}</div>
      </div>
      <div>
        {isSelected && <CheckedSVG width={24} height={24} color="blue" />}
      </div>
    </div>
  );
};

const ProductModal = (props: ProductModalProps) => {
  const { data: products } = useGetProducts();
  const { tag, setIsModalOpen, index, setTags } = props;

  if (!products) return <></>;
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-20">
      <div className="bg-white w-80 rounded shadow-2xl border-gray-light border p-4">
        <div className="h-8 flex justify-end items-center pr-2 border-b">
          <div
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(false);
            }}
          >
            <XmarkSVG width={20} height={20} />
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-4">
          {products.map((product) => {
            return (
              <Product
                {...product}
                index={index}
                setTags={setTags}
                tag={tag}
                setIsModalOpen={setIsModalOpen}
                key={product.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
