import axios from "axios";

const axiosPublicInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API,
  withCredentials: true,
});

const useAxiosPublic = () => {
  return axiosPublicInstance;
};

export default useAxiosPublic;
