import styled from "styled-components";

export const Container = styled.div`
  padding: 8px 16px;
  font-size: 12px;
  background-color: #282124;
  color: #e5e5e5;
  border-radius: 8px;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 50%;
  }
`;
