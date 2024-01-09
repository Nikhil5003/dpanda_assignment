import { css } from "@emotion/react";

export const card = css`
  width: 400px;
  margin-bottom: 10px;
  cursor: pointer;
  border-radius: 10px;
  color: white;
  &:hover {
    box-shadow: 6px 2px 27px 17px rgba(214, 206, 214, 0.5);
    border: none;
  }
  border: 0.5px solid black;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 109, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
`;
export const commonStyle = css`
  font-size: 20px;
  margin-top: 5px;
`;
export const cardWrapper = css`
  padding: 20px;
`;
export const nameStyle = css`
  text-align: center;
`;
