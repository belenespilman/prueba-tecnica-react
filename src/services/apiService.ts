import axios from "axios";
import { PostCardProps } from "../interfaces";

const API_URL = "https://jsonplaceholder.typicode.com";

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "aplication/json",
  },
});

export const getPosts = async (
  page: number,
  limit: number
): Promise<PostCardProps[]> => {
  try {
    const response = await apiClient.get(`${API_URL}/posts`, {
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

export const getPostDetails = async (postId: number) => {
  try {
    const postResponse = await apiClient.get(`${API_URL}/posts/${postId}`);

    const postData = postResponse.data;

    const authorResponse = await apiClient.get(
      `${API_URL}/users/${postData.userId}`
    );
    const authorData = authorResponse.data;

    return { postData, authorData };
  } catch (error) {
    console.error("Error fetching post details", error);
    return { postData: null, authorData: null };
  }
};
