import React, { useCallback, useEffect, useState } from "react";
import Container from "../../Components/Container";
import { connect } from "react-redux";
import { fetchCharacter } from "../../Redux/actions";
import Pagination from "../../Components/Pagination";
import { wrapper } from "./style";
import Filters from "../../Components/filters";
const Home = ({ characterData, fetchCharacter, loading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortByWeight, setWeight] = useState(false);
  const [sortByHeight, setHeight] = useState(false);
  useEffect(() => {
    if (Object.keys(characterData).includes(`${currentPage}`) === false) {
      console.log("true");
      fetchCharacter(currentPage);
    }
  }, [currentPage]);
  const { results = [], count } = characterData[currentPage] || {};
  let length = results.length;
  const totalPageCount = length !== 0 && Math.ceil(count / length);
  let filteredResults = [
    ...results.map((ele, index) => ({ ...ele, id: index })),
  ];
  if (sortByWeight) {
    filteredResults = filteredResults.sort((a, b) => a.mass - b.mass);
  } else if (sortByHeight) {
    filteredResults = filteredResults.sort((a, b) => a.height - b.height);
  }
  return (
    <div style={{ padding: 20 }}>
      <div css={wrapper}>
        <Filters setHeight={setHeight} setWeight={setWeight} />
        <Container
          data={filteredResults}
          loading={loading}
          currentPage={currentPage}
        />
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPageCount={totalPageCount}
      />
    </div>
  );
};
const props = ({ characterReducer: { characterData, loading } }) => {
  return {
    characterData,
    loading,
  };
};
const actions = (dispatch) => {
  return {
    fetchCharacter: (page) => dispatch(fetchCharacter(page)),
  };
};
export default connect(props, actions)(Home);
