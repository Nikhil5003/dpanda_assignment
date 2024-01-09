import React from "react";
import { card, cardWrapper, nameStyle, commonStyle } from "./style";
const Card = ({
  name,
  height,
  weight,
  hairColor,
  eyeColor,
  skinColor,
  gender,
  currentIndex: index,
}) => {
  return (
    <div
      onClick={() => {
        window.open(`/${index}`, "_blank");
      }}
      css={card}
    >
      <div css={cardWrapper}>
        <h2 css={nameStyle}>
          <b>{name}</b>
        </h2>
        <div css={commonStyle}>
          Height of this character is <b>{height}</b>
        </div>
        <div css={commonStyle}>
          Weight of this character is <b>{weight}</b>
        </div>
        <div css={commonStyle}>
          Color of hair is <b>{hairColor}</b>
        </div>
        <div css={commonStyle}>
          Color of eye is <b>{eyeColor}</b>
        </div>
        <div css={commonStyle}>
          Color of skin is <b>{skinColor}</b>
        </div>
        <div css={commonStyle}>
          Gender of this character is <b>{gender}</b>
        </div>
      </div>
    </div>
  );
};

export default Card;
