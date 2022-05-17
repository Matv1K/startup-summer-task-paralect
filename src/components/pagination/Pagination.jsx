import { useState } from "react";
import ReactPaginate from "react-paginate";

import "./Pagination.scss";

const Pagination = ({ publicRepos, setCurrentPage }) => {
  const [page, setPage] = useState(1);

  const handleChange = (data) => {
    const selectedPage = data.selected + 1;

    setCurrentPage(selectedPage);
    setPage(selectedPage);
  };

  return (
    <div className="pagination">
      <p className="pagination__info">
        {page * 4 - 3}-{page * 4 < publicRepos ? page * 4 : publicRepos} of{" "}
        {publicRepos} items
      </p>

      <ReactPaginate
        previousLabel="&#10094;"
        nextLabel="&#10095;"
        breakLabel="..."
        pageCount={Math.ceil(publicRepos / 4)}
        marginPagesDisplayed="1"
        pageRangeDisplayed={3}
        containerClassName="pagination__menu"
        pageClassName="pagination__page"
        activeClassName="pagination__page_active"
        previousClassName="pagination__previous"
        nextClassName="pagination__next"
        breakClassName="pagination__break"
        onPageChange={handleChange}
      />
    </div>
  );
};

export default Pagination;
