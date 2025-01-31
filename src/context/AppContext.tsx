import {
  useContext,
  useState,
  createContext,
  ReactNode,
  useEffect,
} from "react";
import { PostCardProps, AppContextType } from "../interfaces";
import { getPosts } from "../services/apiService";

export const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<PostCardProps[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<PostCardProps[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
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

  const totalPages = Math.ceil(totalPosts / postPerPage);

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

  const value = {
    posts,
    setPosts,
    filteredPosts,
    setFilteredPosts,
    totalPosts,
    setTotalPosts,
    currentPage,
    setCurrentPage,
    setSearchTerm,
    searchTerm,
    isModalOpen,
    setIsModalOpen,
    setSelectedPostId,
    selectedPostId,
    handleCloseModal,
    handlePostClick,
    handleNext,
    handlePrevious,
    loading,
    postPerPage,
    setLoading,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('"useAppContext must be used within an AppProvider"');
  }
  return context;
};

export { useAppContext, AppProvider };
