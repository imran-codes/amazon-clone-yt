import styled from "styled-components";

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 300px;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 1;
  padding: 20px;
  margin: 10px;

  img {
    width: 100%;
    max-height: 200px;
    object-fit: contain;
    margin-bottom: 10px;
  }

  .product__star {
    color: ${({ theme }) => theme.colors.orange} !important;
  }
`;

const Info = styled.div``;

const Price = styled.p`
  display: flex;
  margin: -10px 0;
  font-size: 20px;
  align-items: flex-start;

  span {
    font-weight: 600;
  }

  small {
    font-size: small;
    margin-top: 2px;
  }
`;

export { ProductContainer, Price, Info };
