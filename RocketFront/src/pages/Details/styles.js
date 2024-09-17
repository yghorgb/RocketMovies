import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    "header"
    "content";

  p {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 16px;
    text-align: justify;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 120px;
`;

export const TitleContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 24px;
`;

export const Title = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  img {
    height: 16px;
    width: 16px;
    border-radius: 50%;
  }

  .clock {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const TagContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 40px 0;
`;
