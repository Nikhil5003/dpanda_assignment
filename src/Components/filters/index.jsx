import React from "react";
import { filters, filterItem, filterWrapper } from "./style";
function Filters({ setHeight, setWeight }) {
  return (
    <div css={filters}>
      <h1 style={{ textAlign: "center" }}>Filters</h1>
      <div css={filterWrapper}>
        <div css={filterItem}>
          <input
            type="checkbox"
            name=""
            id=""
            onChange={() => setHeight((prev) => !prev)}
          />
          <label style={{ marginLeft: 10 }} htmlFor="Sort by Weight">
            Sort by height
          </label>
        </div>
        <div css={filterItem}>
          <input
            type="checkbox"
            name=""
            id=""
            onChange={() => setWeight((prev) => !prev)}
          />
          <label style={{ marginLeft: 10 }} htmlFor="Sort by Weight">
            Sort by Weight
          </label>
        </div>
      </div>
    </div>
  );
}

export default Filters;
