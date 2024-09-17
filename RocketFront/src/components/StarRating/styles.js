import styled from "styled-components";

export const StarContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Star = styled.div`
  color: ${({ filled }) => (filled ? "#ff859b" : "#ccc")};
  font-size: 16px;
  margin-right: 5px;

  &:last-child {
    margin-right: 0;
  }
`;
