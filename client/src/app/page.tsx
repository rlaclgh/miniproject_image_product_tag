"use client";
import Header from "@/components/header";
import ImageWithTag from "@/components/image_with_tag";
import { useGetImages } from "@/query/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: images } = useGetImages();

  const router = useRouter();

  if (!images) return <></>;

  return (
    <div>
      <Header
        renderCenter={() => <div>메인 페이지</div>}
        renderRight={() => (
          <div
            onClick={() => {
              router.push("/upload");
            }}
          >
            생성
          </div>
        )}
      />

      {images?.map((image) => {
        return <ImageWithTag {...image} key={image.id} />;
      })}

      <div className="flex justify-center items-center h-screen"></div>
    </div>
  );
}
