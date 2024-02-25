import {
  MutationFunction,
  UseMutationOptions,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import Axios from ".";

interface CreatePreSignedUrlProps {
  contentType: string;
}

interface CreatePreSignedUrlResponse {
  url: string;
}

const createPreSignedUrl: MutationFunction<
  AxiosResponse<CreatePreSignedUrlResponse>,
  CreatePreSignedUrlProps
> = (props) => {
  const { contentType } = props;
  return Axios({
    method: "post",
    url: "/image/pre-signed",
    data: {
      contentType,
    },
  });
};

export const useCreatePreSignedUrl = (
  options?: UseMutationOptions<
    AxiosResponse<CreatePreSignedUrlResponse>,
    Error,
    CreatePreSignedUrlProps
  >
) => {
  return useMutation({
    mutationFn: createPreSignedUrl,
    ...options,
  });
};

export interface GetImagesResponse {
  id: number;
  imageUrl: string;
  tags: TagResponse[];
}

export interface TagResponse {
  id: number;
  xcoordinate: number;
  ycoordinate: number;
  product: ProductResponse;
}

interface ProductResponse {
  id: number;
  name: string;
  brandName: string;
  imageUrl: string;
}

const getImages = async () => {
  const data = await Axios({
    method: "get",
    url: `/image`,
  });

  return data.data;
};

export const useGetImages = () => {
  return useQuery<GetImagesResponse[]>({
    queryKey: ["image"],
    queryFn: getImages,
  });
};

interface CreateImageProps {
  imageUrl: string;
  tags: CreateImageTagProps[];
}

interface CreateImageTagProps {
  xCoordinate: number;
  yCoordinate: number;
  productId: number;
}

const createImage: MutationFunction<AxiosResponse, CreateImageProps> = (
  props
) => {
  return Axios({
    method: "post",
    url: "/image",
    data: {
      ...props,
    },
  });
};

export const useCreateImage = (
  options?: UseMutationOptions<AxiosResponse, Error, CreateImageProps>
) => {
  return useMutation({
    mutationFn: createImage,
    ...options,
  });
};
