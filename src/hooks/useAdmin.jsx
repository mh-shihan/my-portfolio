import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { data: isAdmin, isLoading: adminLoading } = useQuery({
    queryKey: ["admin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosPublic.get(`/admin/${user?.email}`);
      return res.data;
    },
  });
  //   console.log(isAdmin, adminLoading);
  return { isAdmin, adminLoading };
};

export default useAdmin;
