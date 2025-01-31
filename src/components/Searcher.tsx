import "../styles/components/_searcher.scss";
import { useAppContext } from "../context/AppContext";

const Searcher: React.FC = () => {
  const { setSearchTerm } = useAppContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="searcher">
      <input
        id="1"
        type="text"
        placeholder="Find a title 🔎"
        onChange={handleChange}
      />
    </div>
  );
};

export default Searcher;
