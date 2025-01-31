export interface PostCardProps {
  id: number;
  userId: number;
  body: string;
  title: string;
  onClick: (postid: number | null) => void;
}

export interface User {
  id: number;
  name: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  postId: number | null;
}

export interface AppContextType {
  posts: PostCardProps[];
  setPosts: React.Dispatch<React.SetStateAction<PostCardProps[]>>;
  filteredPosts: PostCardProps[];
  setFilteredPosts: React.Dispatch<React.SetStateAction<PostCardProps[]>>;
  totalPosts: number;
  setTotalPosts: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchTerm: string;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  postPerPage: number;
  selectedPostId: number | null;
  setSelectedPostId: React.Dispatch<React.SetStateAction<number | null>>;
  handlePostClick: (postid: number | null) => void;
  handleCloseModal: () => void;
  handleNext: () => void;
  handlePrevious: () => void;
}
