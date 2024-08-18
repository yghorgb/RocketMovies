import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  height: 116px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_1};

  padding: 24px 124px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;
`;

export const Logo = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.PINK};
`;

export const SearchBar = styled.input`
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 19px 24px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 16px;
    width: 124px;

    strong {
      font-size: 14px;
    }

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      cursor: pointer;
    }
  }

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    cursor: pointer;
  }
`;
