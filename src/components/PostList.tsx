import PostCard from "./PostCard";
import { getPosts } from "../services/apiService";
import { useState, useEffect } from "react";
import { PostCardProps } from "../interfaces";
import Searcher from "./Searcher";
import "../styles/components/_postLists.scss";
import Pagination from "./Pagination";

const PostList = () => {
  const [posts, setPosts] = useState<PostCardProps[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<PostCardProps[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPost, setTotalPosts] = useState(0);
  const postPerPage = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      const postData = await getPosts(currentPage, postPerPage);
      setPosts(postData);
      setTotalPosts(100);
    };

    fetchPosts();
  }, [currentPage]);

  const totalPages = Math.ceil(totalPost / postPerPage);

  const hanldeNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={hanldeNext}
        onPrevious={handlePrevious}
      />
    </>
  );
};

export default PostList;
