import {
  MutationFunction,
  UseMutationOptions,
  useMutation,
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
