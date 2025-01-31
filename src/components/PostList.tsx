import { useAppContext } from "../context/AppContext";
import PostCard from "./PostCard";
import Searcher from "./Searcher";
import "../styles/components/_postLists.scss";
import Modal from "./Modal";

const PostList = () => {
  const {
    filteredPosts,
    setSearchTerm,
    loading,
    handlePostClick,
    isModalOpen,
    selectedPostId,
    handleCloseModal,
  } = useAppContext();

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
    </>
  );
};

export default PostList;
