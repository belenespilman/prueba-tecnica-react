import PostCard from "./PostCard";
import { getPosts } from "../services/apiService";
import { useState, useEffect } from "react";
import "../styles/components/_postLists.scss";
import { PostCardProps } from "../interfaces";
import Searcher from "./Searcher";

const PostList = () => {
  const [posts, setPosts] = useState<PostCardProps[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<PostCardProps[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const postPerPage = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      const postData = await getPosts(1, postPerPage);
      console.log(postData);
      setPosts(postData);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const results = posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(results);
  }, [searchTerm, posts]);

  return (
    <>
      <Searcher onSearch={setSearchTerm} />

      <div className="post-list">
        {filteredPosts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            body={post.body}
            title={post.title}
            userId={post.userId}
          />
        ))}
      </div>
    </>
  );
};

export default PostList;
