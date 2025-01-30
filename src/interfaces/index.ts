export interface PostCardProps {
  id: number;
  userId: number;
  body: string;
  title: string;
}

export interface SearcherProps {
  onSearch: (term: string) => void;
}
