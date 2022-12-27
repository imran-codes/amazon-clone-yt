import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  height: max-content;
`;

export const CheckoutTitle = styled.h2`
  margin-right: 10px;
  padding: 10px;
  border-bottom: 1px solid lightgray;
`;

export const CheckoutBody = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  :first-child {
    flex: 0.6;
  }
  :last-child {
    flex: 0.4;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    :first-child {
      flex: 1;
    }
    :last-child {
      flex: 1;
    }
  }
`;
