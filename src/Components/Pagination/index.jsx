import React from "react";
import { paginationWrapper, btnClass } from "./style";
const Pagination = ({ currentPage, setCurrentPage, totalPageCount }) => {
  const onPrevious = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
    window.scrollTo(0, 0);
  };
  console.log(typeof totalPageCount);
  const onNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPageCount));
    window.scrollTo(0, 0);
  };
  return (
    <div css={paginationWrapper}>
      <button css={btnClass} onClick={onPrevious} disabled={currentPage == 1}>
        Previous
      </button>
      <button
        css={btnClass}
        onClick={onNext}
        disabled={currentPage == totalPageCount}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
