import { useQuery } from "@tanstack/react-query";
import { getAllService } from "./services.api";

export const useGetAllService = () => {
  const allService = useQuery({
    queryKey: ["all-service"],
    queryFn: getAllService,
  });
  return allService;
};
