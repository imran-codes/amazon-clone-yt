import styled from "styled-components";

const HomeContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

const ProductRows = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  z-index: 1;
  margin: 0 auto;
`;

const BackgroundImg = styled.img`
  width: 100%;
  object-fit: contain;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  margin-bottom: -20%;
  z-index: -1;
`;

export { HomeContainer, ProductRows, BackgroundImg };
