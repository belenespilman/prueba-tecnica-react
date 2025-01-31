import PostCard from "./PostCard";
import { getPosts } from "../services/apiService";
import { useState, useEffect } from "react";
import { PostCardProps } from "../interfaces";
import Searcher from "./Searcher";
import "../styles/components/_postLists.scss";
import Pagination from "./Pagination";
import Modal from "./Modal";

const PostList = () => {
  const [posts, setPosts] = useState<PostCardProps[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<PostCardProps[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPost, setTotalPosts] = useState(0);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const postPerPage = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const postData = await getPosts(currentPage, postPerPage);
      setPosts(postData);
      setTotalPosts(100);
      setLoading(false);
    };

    fetchPosts();
  }, [currentPage]);

  const totalPages = Math.ceil(totalPost / postPerPage);

  const handlePostClick = (postId: number | null) => {
    setSelectedPostId(postId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleNext = () => {
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
      <div>
        {loading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="post-list">
            {filteredPosts.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                body={post.body}
                title={post.title}
                userId={post.userId}
                onClick={() => handlePostClick(post.id)}
              />
            ))}
          </div>
        )}
      </div>

      {isModalOpen && selectedPostId !== null && (
        <Modal
          onClose={handleCloseModal}
          isOpen={isModalOpen}
          postId={selectedPostId}
        />
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </>
  );
};

export default PostList;
