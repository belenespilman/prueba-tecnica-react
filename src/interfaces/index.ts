export interface PostCardProps {
  id: number;
  userId: number;
  body: string;
  title: string;
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
