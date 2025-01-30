import PostCard from "./PostCard";
import { getPosts } from "../services/apiService";
import { useState, useEffect } from "react";
import "../styles/components/_postLists.scss";

const PostList = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const postPerPage = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      const postData = await getPosts(1, postPerPage);
      console.log(postData);
      setPosts(postData);
    };

    fetchPosts();
  }, []);

  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
