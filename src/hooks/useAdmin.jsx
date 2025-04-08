import { createContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
  const { user, loading } = createContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const { data: isAdmin = false, isLoading: adminLoading } = useQuery({
    queryKey: ["admin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosPublic.get(`/admin/${user?.email}`);
      return res.data;
    },
  });
  return { isAdmin, adminLoading };
};

export default useAdmin;
