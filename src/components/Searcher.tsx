import { SearcherProps } from "../interfaces";

const Searcher: React.FC<SearcherProps> = ({ onSearch }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Find by title"
        onChange={(e) => onSearch(e.target.value)}
      />
    </>
  );
};

export default Searcher;
