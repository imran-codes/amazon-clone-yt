import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 300px;
  gap: 5px;
  margin-top: 40px;
  :first-child {
    font-size: 0.4rem;
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;

  p {
    font-size: 1.2rem;
  }
`;

export const Delivery = styled.p`
  font-size: 1rem;
  margin: 0;
  color: #067d62;
`;
