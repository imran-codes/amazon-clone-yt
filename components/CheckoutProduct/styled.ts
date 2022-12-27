import styled from "styled-components";
import { Title } from "../../styles/sharedstyles";

export const Container = styled.div`
  display: flex;
  margin: 20px 0;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Info = styled.div`
  padding: 20px;
  width: 100%;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;
