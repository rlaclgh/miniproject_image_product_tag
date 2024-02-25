import { useQuery } from "@tanstack/react-query";
import Axios from ".";

interface GetProductsResponse {
  id: number;
  name: string;
  brandName: string;
  imageUrl: string;
  createdAt: string;
}

const getProducts = async () => {
  const data = await Axios({
    method: "get",
    url: `/product`,
  });

  return data.data;
};

export const useGetProducts = () => {
  return useQuery<GetProductsResponse[]>({
    queryKey: ["product"],
    queryFn: getProducts,
  });
};
