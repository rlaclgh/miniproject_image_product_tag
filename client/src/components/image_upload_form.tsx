"use client";
import { Controller, useForm } from "react-hook-form";
import CameraSVG from "@/public/camera.svg";
import XmarkSVG from "@/public/x-mark.svg";

import Image from "next/image";
import TextButton from "./text_button";
import { useCreateImage, useCreatePreSignedUrl } from "@/query/image";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { RULES } from "@/constants/rules";
import ImageTag, { tagType } from "./image_tag";
import { useState } from "react";

interface FormProps {
  imageUrl: string;
}

const ImageUploadForm = () => {
  const router = useRouter();
  const { control, formState, getValues } = useForm<FormProps>({
    defaultValues: {
      imageUrl: "",
    },

    mode: "onChange",
    reValidateMode: "onChange",
  });

  const [tags, setTags] = useState<tagType[]>([]);

  const { mutateAsync: createPreSignedUrl } = useCreatePreSignedUrl({
    onSuccess: () => {
      toast.success("presigned url을 생성했습니다.");
    },
  });

  const { mutate: createImage } = useCreateImage({
    onSuccess: () => {
      toast.success("이미지를 생성했습니다.");
      router.push("/");
    },
  });

  return (
    <div className="">
      <Controller
        name="imageUrl"
        control={control}
        rules={RULES.REQUIRED}
        render={({ field: { onChange, value } }) => {
          return (
            <>
              <label className="text-sm text-black font-normal" htmlFor={""}>
                <div>이미지</div>
              </label>

              <div className="flex">
                <div className="relative w-full h-full border border-solid border-gray-light shadow flex aspect-square">
                  {!value && (
                    <>
                      <label
                        htmlFor={"imageUrl"}
                        className="relative flex w-full cursor-pointer items-center justify-center"
                      >
                        <CameraSVG width={60} height={60} />
                      </label>

                      <input
                        className="absolute top-0 left-0 right-0 bottom-0 w-0 h-0"
                        type="file"
                        accept="image/*"
                        id={"imageUrl"}
                        onChange={async (e) => {
                          if (!e) return;
                          if (!e.target) return;
                          if (!e.target.files) return;
                          const file: File = e.target.files[0];

                          const objectURL = URL.createObjectURL(file);
                          onChange(objectURL);

                          const result = await createPreSignedUrl({
                            contentType: file.type,
                          });

                          try {
                            await axios.put(result.data.url, file, {
                              headers: {
                                "Content-Type": file.type,
                              },
                              // onUploadProgress: (progressEvent) => {
                              //   const percentCompleted = Math.round(
                              //     (progressEvent.loaded * 100) / progressEvent.total
                              //   );
                              // },
                            });

                            onChange(result?.data?.url.split("?X")[0]);
                          } catch (error) {
                            console.log("🚀 ~ onChange={ ~ error:", error);
                          }
                        }}
                      />
                    </>
                  )}

                  {value && (
                    <ImageTag imageUrl={value} tags={tags} setTags={setTags} />
                  )}
                </div>
              </div>
            </>
          );
        }}
      />

      <div className="h-4" />

      <TextButton
        text="업로드"
        onClick={() => {
          createImage({
            imageUrl: getValues("imageUrl"),
            tags: tags
              .filter((tag) => !!tag.product?.id)
              .map((tag) => ({
                productId: tag.product?.id!,
                xCoordinate: tag.xCooridnate,
                yCoordinate: tag.yCooridnate,
              })),
          });
        }}
        disabled={!formState.isValid}
      />
    </div>
  );
};

export default ImageUploadForm;
