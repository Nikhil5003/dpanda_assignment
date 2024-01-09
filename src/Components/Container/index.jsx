import React from "react";
import Card from "../Card";
import { container, containerWrapper, loadingStyle } from "./style";
import "./style.css";
import LoadingSpinner from "../Loader";
const Container = ({ data: cardData, loading: isLoading, currentPage }) => {
  return (
    <div css={container}>
      <div css={containerWrapper}>
        {!isLoading ? (
          cardData.map(
            ({
              name,
              height,
              skin_color,
              hair_color,
              mass,
              eye_color,
              gender,
              id: index,
            } = {}) => (
              <Card
                key={index}
                currentIndex={Math.min((currentPage - 1) * 10 + index + 1, 82)}
                name={name}
                height={height}
                skinColor={skin_color}
                hairColor={hair_color}
                gender={gender}
                eyeColor={eye_color}
                weight={mass}
              />
            )
          )
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </div>
  );
};

export default Container;
