import { css } from "@emotion/react";
export const container = css`
  width: 80%;
  min-height: 90vh;
  margin-left: 20px;
  flex: 3;
`;
export const containerWrapper = css`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const loadingStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
