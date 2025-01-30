export interface PostCardProps {
  id: number;
  userId: number;
  body: string;
  title: string;
  onClick: () => void;
}

export interface User {
  id: number;
  name: string;
}

export interface SearcherProps {
  onSearch: (term: string) => void;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrevious: () => void;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  postId: number;
}
