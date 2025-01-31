import { SearcherProps } from "../interfaces";
import "../styles/components/_searcher.scss";

const Searcher: React.FC<SearcherProps> = ({ onSearch }) => {
  return (
    <div className="searcher">
      <input
        id="1"
        type="text"
        placeholder="Find a title 🔎"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default Searcher;
