import useSWR from "swr";
import { fetcher } from "src/utils/fetcher";

export const useFetchArray = (url) => {
  const { data, error } = useSWR(url, fetcher);
  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};

const API_URL = "https://jsonplaceholder.typicode.com";

export const useComments = () => {
  return useFetchArray(`${API_URL}/comments`);
};
export const usePosts = () => {
  return useFetchArray(`${API_URL}/posts`);
};
export const useUsers = () => {
  return useFetchArray(`${API_URL}/users`);
};
