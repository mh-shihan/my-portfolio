import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetchJSONData = (url, key) => {
  const { data = [], isLoading } = useQuery({
    queryKey: [key],
    queryFn: async () => {
      const res = await axios.get(url);
      return res.data;
    },
  });
  return [data, isLoading];
};

export default useFetchJSONData;
