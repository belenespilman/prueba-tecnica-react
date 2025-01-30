import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com//posts";

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "aplication/json",
  },
});

export const getPosts = async (page: number, limit: number) => {
  try {
    const response = await apiClient.get(API_URL, {
      params: {
        _page: page,
        _limit: limit,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching posts");
    return [];
  }
};
