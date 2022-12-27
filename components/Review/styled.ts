import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  p {
    margin: 2px 0;
  }
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .MuiSvgIcon-root {
    font-size: 30px;
    color: gray;
    margin-right: 10px;
  }
`;

export const MiddleRow = styled(TopRow)`
  .MuiSvgIcon-root {
    color: ${({ theme }) => theme.colors.orange};
    font-size: 22px;
  }

  p {
    font-weight: bold;
  }
`;

export const VerifiedText = styled.p`
  color: ${({ theme }) => theme.colors.orange};
  font-weight: bold;
  font-size: 0.8rem;

  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const HelpfulBtn = styled.button`
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  width: fit-content;
  padding: 0 10px 0 11px;
  box-shadow: none;
  font-size: 13px;
  height: 29px;
  border: 1px solid lightgray;
  margin-right: 10px;
  cursor: pointer;
`;

export const BottomRow = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0 11px;
  cursor: pointer;
`;
