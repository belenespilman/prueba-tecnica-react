import "../styles/components/_pagination.scss";
import { useAppContext } from "../context/AppContext";

const Pagination: React.FC = () => {
  const { currentPage, totalPosts, handleNext, handlePrevious } =
    useAppContext();

  const postPerPage = 10;
  const totalPages = Math.ceil(totalPosts / postPerPage);
  return (
    <div className="pagination">
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        « Prev
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Next »
      </button>
    </div>
  );
};

export default Pagination;
