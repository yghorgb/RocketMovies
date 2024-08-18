import styled from "styled-components";

export const Container = styled.button`
  background: none;
  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 16px;
  border: none;

  display: flex;
  align-items: center;
  gap: 8px;
  height: 21px;
`;
